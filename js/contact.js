// js/contact.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function handleContactSubmit(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const feedback = document.getElementById('formFeedback');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<i class="ph ph-spinner-gap animate-spin text-xl"></i> <span class="ml-2">Sending...</span>';
            btn.disabled = true;
            
            // Simulate API Call delay
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
                contactForm.reset();
                feedback.classList.remove('hidden');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    feedback.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }
});