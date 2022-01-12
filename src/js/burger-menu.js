(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileLink0 = document.querySelector("[data-menu-link0]");
    const mobileLink1 = document.querySelector("[data-menu-link1]");
    const mobileLink2 = document.querySelector("[data-menu-link2]");
    const mobileLink3 = document.querySelector("[data-menu-link3]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("active");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        document.body.classList.toggle("modal-open");
        mobileMenuRef.classList.toggle("active");
    });

    mobileLink0.addEventListener("click", () => {
        mobileMenuRef.classList.remove("active");
        document.body.classList.remove("modal-open");
        menuBtnRef.classList.remove("active");
    });
    mobileLink1.addEventListener("click", () => {
        mobileMenuRef.classList.remove("active");
        document.body.classList.remove("modal-open");
        menuBtnRef.classList.remove("active");
    });
    mobileLink2.addEventListener("click", () => {
        mobileMenuRef.classList.remove("active");
        document.body.classList.remove("modal-open");
        menuBtnRef.classList.remove("active");
    });
    mobileLink3.addEventListener("click", () => {
        mobileMenuRef.classList.remove("active");
        document.body.classList.remove("modal-open");
        menuBtnRef.classList.remove("active");
    });
})();



