document.addEventListener("DOMContentLoaded", () => {

    initNavbar();

    initTheme();

    initTyping();

    // initAbout();

    initAnimations();

});

// =========================
// About Section Read More
// =========================

  document.addEventListener("DOMContentLoaded", () => {
    const aboutContent = document.getElementById("about-content");
    const aboutFade = document.getElementById("about-fade");
    const aboutToggle = document.getElementById("about-toggle");
    const aboutIcon = document.getElementById("about-icon");

    if (!aboutContent || !aboutToggle) return;

    let expanded = false;
    const collapsedHeight = 170;

    // Set initial height
    aboutContent.style.maxHeight = `${collapsedHeight}px`;

    aboutToggle.addEventListener("click", () => {
      if (!expanded) {
        aboutContent.style.maxHeight = `${aboutContent.scrollHeight}px`;
        aboutFade?.classList.add("opacity-0");
        aboutToggle.firstChild.textContent = "Read Less ";
        aboutIcon?.classList.add("rotate-180");
      } else {
        aboutContent.style.maxHeight = `${collapsedHeight}px`;
        aboutFade?.classList.remove("opacity-0");
        aboutToggle.firstChild.textContent = "Read More ";
        aboutIcon?.classList.remove("rotate-180");
      }

      expanded = !expanded;
    });
  });
