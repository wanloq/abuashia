// js/main.js

const navbar = document.getElementById("navbar");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuButton = document.getElementById("mobile-menu-btn");

const sections = [...document.querySelectorAll("section[id]")];

const navLinks = [
    ...document.querySelectorAll(
        'a[href^="#"]'
    ),
];

const revealElements = [
    ...document.querySelectorAll("[data-reveal]")
];

const lazyImages = [
    ...document.querySelectorAll("img[data-src]")
];

/* ----------------------------
    Navbar Scroll
-----------------------------*/

const updateNavbar = () => {

    if (window.scrollY > 40) {

        navbar.classList.add(
            "shadow-lg",
            "shadow-slate-900/5",
            "dark:shadow-black/30"
        );

        navbar.classList.remove("h-20");

    } else {

        navbar.classList.remove(
            "shadow-lg",
            "shadow-slate-900/5",
            "dark:shadow-black/30"
        );

    }

};

window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);

updateNavbar();

/* ----------------------------
    Mobile Menu
-----------------------------*/

mobileMenuButton?.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("hidden");

        mobileMenuButton
            .querySelector("i")
            ?.classList.toggle("ph-list");

        mobileMenuButton
            .querySelector("i")
            ?.classList.toggle("ph-x");

    }
);

document
    .querySelectorAll("#mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            const icon =
                mobileMenuButton.querySelector("i");

            icon.classList.remove("ph-x");
            icon.classList.add("ph-list");

        });

    });

/* ----------------------------
    Smooth Scroll
-----------------------------*/

navLinks.forEach(link => {

    link.addEventListener("click", event => {

        const target = link.getAttribute("href");

        if (!target.startsWith("#")) return;

        const section =
            document.querySelector(target);

        if (!section) return;

        event.preventDefault();

        section.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

});

/* ----------------------------
    Active Navigation
-----------------------------*/

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach(link => {

                const active =
                    link.getAttribute("href") === `#${id}`;

                link.classList.toggle(
                    "text-brand-sky",
                    active
                );

                link.classList.toggle(
                    "font-semibold",
                    active
                );

            });

        });

    },

    {
        threshold: 0.5
    }

);

sections.forEach(section => observer.observe(section));

/* ----------------------------
    Reveal Animation
-----------------------------*/

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.dataset.visible = "true";

            revealObserver.unobserve(entry.target);

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    element.dataset.visible = "false";

    revealObserver.observe(element);

});

/* ----------------------------
    Lazy Images
-----------------------------*/

const imageObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const image = entry.target;

            image.src = image.dataset.src;

            image.onload = () => {

                image.classList.remove(
                    "opacity-0",
                    "scale-95"
                );

                image.classList.add(
                    "opacity-100",
                    "scale-100"
                );

            };

            imageObserver.unobserve(image);

        });

    },

    {
        rootMargin: "200px"
    }

);

lazyImages.forEach(image => {

    imageObserver.observe(image);

});

/* ----------------------------
    Contact Form
-----------------------------*/

const form =
    document.querySelector("#contact-form");

form?.addEventListener("submit", event => {

    event.preventDefault();

    const button =
        form.querySelector("button");

    const original = button.innerHTML;

    button.disabled = true;

    button.innerHTML = `
        <i class="ph ph-spinner-gap animate-spin"></i>
        Sending...
    `;

    setTimeout(() => {

        button.innerHTML = `
            <i class="ph ph-check"></i>
            Message Sent
        `;

        form.reset();

        setTimeout(() => {

            button.disabled = false;

            button.innerHTML = original;

        }, 2000);

    }, 1200);

});

/* ----------------------------
    Copyright
-----------------------------*/

const year =
    document.querySelector("#current-year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}