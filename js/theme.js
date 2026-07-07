// js/theme.js

const STORAGE_KEY = "color-theme";

const root = document.documentElement;

const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const themeButtons = () =>
    document.querySelectorAll(
        "#theme-toggle,#theme-toggle-mobile"
    );

function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
}

function getPreferredTheme() {
    const stored = getStoredTheme();

    if (stored === "light" || stored === "dark") {
        return stored;
    }

    return mediaQuery.matches ? "dark" : "light";
}

function updateIcons(theme) {

    themeButtons().forEach(button => {

        const sun = button.querySelector(".ph-sun");
        const moon = button.querySelector(".ph-moon");

        if (!sun || !moon) return;

        if (theme === "dark") {

            sun.classList.add("hidden");
            moon.classList.remove("hidden");

        } else {

            moon.classList.add("hidden");
            sun.classList.remove("hidden");

        }

    });

}

export function applyTheme(theme) {

    root.classList.toggle("dark", theme === "dark");

    updateIcons(theme);

}

export function setTheme(theme) {

    localStorage.setItem(STORAGE_KEY, theme);

    applyTheme(theme);

}

export function toggleTheme() {

    const nextTheme =
        root.classList.contains("dark")
            ? "light"
            : "dark";

    setTheme(nextTheme);

}

export function initializeTheme() {

    applyTheme(getPreferredTheme());

    themeButtons().forEach(button => {

        button.addEventListener("click", toggleTheme);

    });

}

mediaQuery.addEventListener("change", event => {

    if (getStoredTheme()) return;

    applyTheme(event.matches ? "dark" : "light");

});

initializeTheme();