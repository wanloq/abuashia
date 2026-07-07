// js/ai.js

// ==========================================
// GEMINI API INTEGRATIONS
// ==========================================
const geminiApiKey = ""; // Canvas handles this natively when empty
const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${geminiApiKey}`;

// Utility: Fetch from Gemini with retry logic
async function fetchGemini(payload, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(geminiApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return await response.json();
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(res => setTimeout(res, delay));
            delay *= 2; // Exponential backoff
        }
    }
}

// --- Feature 1: CV Optimizer ---
let isCvModalOpen = false;

window.toggleCvModal = function() {
    const cvModal = document.getElementById('cv-modal');
    const cvModalContent = document.getElementById('cv-modal-content');
    
    if (!cvModal || !cvModalContent) return;

    isCvModalOpen = !isCvModalOpen;
    if (isCvModalOpen) {
        cvModal.classList.remove('hidden');
        // Small delay to allow display:block to apply before animating opacity
        setTimeout(() => {
            cvModal.classList.remove('opacity-0');
            cvModalContent.classList.remove('scale-95');
        }, 10);
    } else {
        cvModal.classList.add('opacity-0');
        cvModalContent.classList.add('scale-95');
        setTimeout(() => {
            cvModal.classList.add('hidden');
            window.resetCvModal(); // reset state on close
        }, 300); // match transition duration
    }
}

window.resetCvModal = function() {
    document.getElementById('cv-textarea').value = '';
    document.getElementById('cv-input-section').classList.remove('hidden');
    document.getElementById('cv-result-section').classList.add('hidden');
    document.getElementById('analyze-btn').innerHTML = '<span>Analyze with Gemini AI</span> <i class="ph ph-sparkle ml-2"></i>';
    document.getElementById('analyze-btn').disabled = false;
}

window.analyzeCV = async function() {
    const cvText = document.getElementById('cv-textarea').value.trim();
    if (!cvText) return;

    const btn = document.getElementById('analyze-btn');
    btn.innerHTML = '<i class="ph ph-spinner-gap animate-spin text-xl mr-2"></i> Analyzing...';
    btn.disabled = true;

    const systemPrompt = "You are an expert technical recruiter and ATS software analyzer. The user will provide a resume or CV text. Analyze it strictly for tech roles (Software Engineering, AI, Backend). Provide your response formatted as a JSON object matching this schema: { \"score\": Number (0-100), \"pros\": [\"string 1\", \"string 2\", \"string 3\"], \"improvements\": [\"string 1\", \"string 2\", \"string 3\"] }";

    const payload = {
        contents: [{ parts: [{ text: `Analyze this CV:\n${cvText}` }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    score: { type: "INTEGER", description: "ATS matching score out of 100" },
                    pros: { type: "ARRAY", items: { type: "STRING" }, description: "3 strong points of the CV" },
                    improvements: { type: "ARRAY", items: { type: "STRING" }, description: "3 areas to improve for tech roles" }
                },
                required: ["score", "pros", "improvements"]
            }
        }
    };

    try {
        const result = await fetchGemini(payload);
        if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
            const jsonStr = result.candidates[0].content.parts[0].text;
            const data = JSON.parse(jsonStr);
            
            // Update UI
            document.getElementById('cv-input-section').classList.add('hidden');
            const resultSection = document.getElementById('cv-result-section');
            resultSection.classList.remove('hidden');
            
            // Set Score Color
            const scoreEl = document.getElementById('cv-score');
            scoreEl.textContent = `${data.score}/100`;
            scoreEl.className = `text-3xl font-extrabold ${data.score >= 80 ? 'text-green-500' : (data.score >= 60 ? 'text-brand-orange' : 'text-red-500')}`;
            
            // Render Feedback
            let feedbackHtml = `
                <div class="mb-3">
                    <h5 class="font-bold text-green-600 dark:text-green-400 mb-2 flex items-center"><i class="ph ph-thumbs-up mr-2"></i> Strong Points</h5>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                        ${data.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h5 class="font-bold text-brand-orange dark:text-orange-400 mb-2 flex items-center"><i class="ph ph-wrench mr-2"></i> Areas to Improve</h5>
                    <ul class="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                        ${data.improvements.map(imp => `<li>${imp}</li>`).join('')}
                    </ul>
                </div>
            `;
            document.getElementById('cv-feedback').innerHTML = feedbackHtml;
        }
    } catch (error) {
        console.error("CV Analysis failed", error);
        btn.innerHTML = '<span>Error. Try Again.</span> <i class="ph ph-warning-circle ml-2"></i>';
        btn.disabled = false;
    }
}

// --- Feature 2: AI Chat Assistant ---
let isChatOpen = false;
let chatHistory = [];
        
const chatSystemPrompt = `You are a conversational AI assistant embedded in the portfolio website of Abuashia Michael Jinks. 
Your goal is to answer questions from recruiters, founders, and developers about Michael.

Key Information about Michael:
- Role: Full Stack Developer & AI Engineer in training under Turing Tech LLC.
- Location: Abuja, Nigeria (open to Remote, Hybrid, On-site).
- Core Backend Skills: Golang, Python, SQL, REST APIs, Docker, Redis.
- Core Frontend Skills: HTML5, CSS3, Tailwind CSS, JavaScript.
- Currently Learning: AI Integration, Machine Learning, React.js, Prompt Engineering.
- Background: Transitioned from Mechanical Engineering & CAD design, bringing engineering logic to software.
- Featured Projects: Vercel Clone (Go/Redis/Cloudflare R2), Redis Clone (Go networking), Nexus Frontend (HTML/Tailwind), AI CV Optimizer (Python/Gemini).
- Availability: "Available for Hire". Contact via michaeljinksa@gmail.com.

Rules for the AI:
- Keep answers brief, professional, and friendly (1-3 sentences max).
- You are speaking ON BEHALF of Michael, so use phrases like "Michael has experience with..." or "Michael is currently..." but you can also introduce yourself as his AI assistant.
- Do not hallucinate skills he does not have.
- Format with basic HTML if needed (e.g. <b>bold</b> for emphasis), but keep it simple.`;

window.toggleChat = function() {
    const chatWindow = document.getElementById('chat-window');
    const chatInput = document.getElementById('chat-input');
    
    if (!chatWindow) return;

    isChatOpen = !isChatOpen;
    if (isChatOpen) {
        chatWindow.classList.remove('hidden');
        setTimeout(() => chatWindow.classList.remove('opacity-0', 'scale-95'), 10);
        document.querySelector('#chat-toggle-btn .animate-ping')?.remove(); // Remove ping after opening
        if (chatInput) chatInput.focus();
    } else {
        chatWindow.classList.add('opacity-0', 'scale-95');
        setTimeout(() => chatWindow.classList.add('hidden'), 200);
    }
}

function appendMessage(text, isUser = false) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;

    const wrapper = document.createElement('div');
    wrapper.className = `flex items-start max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`;
    
    const iconHTML = isUser 
        ? `<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 flex items-center justify-center text-slate-500 dark:text-slate-400 ml-2 mt-1"><i class="ph ph-user text-lg"></i></div>`
        : `<div class="w-8 h-8 rounded-full bg-brand-sky/20 flex-shrink-0 flex items-center justify-center text-brand-sky mr-2 mt-1"><i class="ph ph-robot text-lg"></i></div>`;
    
    const bubbleClasses = isUser
        ? `bg-brand-sky text-white border border-brand-sky p-3 rounded-2xl rounded-tr-none shadow-sm`
        : `bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm`;

    wrapper.innerHTML = `
        ${iconHTML}
        <div class="${bubbleClasses}">${text}</div>
    `;
    
    chatMessages.appendChild(wrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Attach event listener once DOM is loaded to handle form submission gracefully.
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    
    if (chatForm) {
        chatForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const chatInput = document.getElementById('chat-input');
            const chatSubmitBtn = document.getElementById('chat-submit-btn');
            const chatMessages = document.getElementById('chat-messages');
            
            const text = chatInput.value.trim();
            if (!text) return;

            // 1. Add User message to UI and history
            appendMessage(text, true);
            chatHistory.push({ role: "user", parts: [{ text: text }] });
            chatInput.value = '';
            chatInput.disabled = true;
            chatSubmitBtn.disabled = true;

            // Add Loading Indicator
            const loadingId = 'typing-indicator';
            const loadingWrapper = document.createElement('div');
            loadingWrapper.id = loadingId;
            loadingWrapper.className = `flex items-start max-w-[85%]`;
            loadingWrapper.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-brand-sky/20 flex-shrink-0 flex items-center justify-center text-brand-sky mr-2 mt-1"><i class="ph ph-robot text-lg"></i></div>
                <div class="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-500 flex space-x-1 items-center h-[46px]">
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                </div>
            `;
            chatMessages.appendChild(loadingWrapper);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // 2. Prepare payload and fetch Gemini
            const payload = {
                contents: chatHistory,
                systemInstruction: { parts: [{ text: chatSystemPrompt }] }
            };

            try {
                const result = await fetchGemini(payload);
                document.getElementById(loadingId).remove();
                
                if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
                    const responseText = result.candidates[0].content.parts[0].text;
                    const formattedText = responseText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
                    
                    appendMessage(formattedText, false);
                    chatHistory.push(result.candidates[0].content);
                }
            } catch (error) {
                console.error("Chat API failed", error);
                const loader = document.getElementById(loadingId);
                if(loader) loader.remove();
                appendMessage("Sorry, I'm having trouble connecting to my AI backend right now. Please try again later.", false);
            } finally {
                chatInput.disabled = false;
                chatSubmitBtn.disabled = false;
                chatInput.focus();
            }
        });
    }
});