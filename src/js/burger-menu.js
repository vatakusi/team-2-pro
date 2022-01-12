(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileLink = document.querySelector("[data-menu-link]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("active");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        document.body.classList.toggle("modal-open");
        mobileMenuRef.classList.toggle("active");
    });

    mobileLink.addEventListener("click", () => {
        mobileMenuRef.classList.remove("active");
        document.body.classList.remove("modal-open");
        menuBtnRef.classList.remove("active");
    });
})();
