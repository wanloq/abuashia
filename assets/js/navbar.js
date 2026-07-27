// assets/js/navbar.js

function initNavbar() {
    const navbar = document.getElementById("navbar");

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = document.getElementById("menu-icon");

    const mobileSkillsBtn = document.getElementById("mobile-skills-btn");
    const mobileSkillsMenu = document.getElementById("mobile-skills-menu");
    const mobileSkillsIcon = document.getElementById("mobile-skills-icon");

    const navLinks = document.querySelectorAll(".nav-link[href^='#']");
    const mobileLinks = document.querySelectorAll(".mobile-link[href^='#']");

    let menuOpen = false;

    //-------------------------------------------------
    // Mobile Menu
    //-------------------------------------------------

    function openMenu() {
        mobileMenu.classList.remove("hidden");

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

        menuOpen = true;
    }

    function closeMenu() {
        mobileMenu.classList.add("hidden");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

        // Close Skills submenu
        mobileSkillsMenu.classList.add("hidden");
        mobileSkillsIcon.classList.remove("rotate-180");

        menuOpen = false;
    }

    mobileMenuBtn?.addEventListener("click", () => {
        menuOpen ? closeMenu() : openMenu();
    });

    //-------------------------------------------------
    // Mobile Skills Dropdown
    //-------------------------------------------------

    mobileSkillsBtn?.addEventListener("click", () => {
        mobileSkillsMenu.classList.toggle("hidden");
        mobileSkillsIcon.classList.toggle("rotate-180");
    });

    //-------------------------------------------------
    // Close Menu After Clicking a Link
    //-------------------------------------------------

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    //-------------------------------------------------
    // Close on Desktop Resize
    //-------------------------------------------------

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1024) {
            closeMenu();
        }
    });

    //-------------------------------------------------
    // Navbar Scroll Effect
    //-------------------------------------------------

    function updateNavbar() {

        if (window.scrollY > 40) {

            navbar.classList.add(
                "h-16",
                "shadow-lg"
            );

            navbar.classList.remove("h-20");

        } else {

            navbar.classList.remove(
                "h-16",
                "shadow-lg"
            );

            navbar.classList.add("h-20");

        }

    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();

    //-------------------------------------------------
    // Active Navigation Link
    //-------------------------------------------------

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }

        });

        [...navLinks, ...mobileLinks].forEach(link => {

            link.classList.remove(
                "text-brand-orange",
                "font-bold"
            );

            if (link.getAttribute("href") === `#${current}`) {

                link.classList.add(
                    "text-brand-orange",
                    "font-bold"
                );

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

    //-------------------------------------------------
    // Close Mobile Menu if Clicking Outside
    //-------------------------------------------------

    document.addEventListener("click", (e) => {

        if (!menuOpen) return;

        if (
            !mobileMenu.contains(e.target) &&
            !mobileMenuBtn.contains(e.target)
        ) {
            closeMenu();
        }

    });

}