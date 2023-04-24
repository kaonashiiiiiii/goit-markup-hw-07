(() => {
    const refs = {
        openMobileBtn: document.querySelector("[data-mobile-open]"),
        closeMobileBtn: document.querySelector("[data-mobile-close]"),
        mobile: document.querySelector("[data-mobile]"),
    };

    refs.openMobileBtn.addEventListener("click", toggleMobile);
    refs.closeMobileBtn.addEventListener("click", toggleMobile);

    function toggleMobile() {
        refs.mobile.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();

// (() => {
//     const refs = {
//         openMenuBtn: document.querySelector("[data-menu-open]"),
//         closeMenuBtn: document.querySelector("[data-menu-close]"),
//         menu: document.querySelector("[data-menu]"),
//     };

//     refs.openMenuBtn.addEventListener("click", toggleMenu);
//     refs.closeMenuBtn.addEventListener("click", toggleMenu);

//     function toggleMenu() {
//         refs.menu.classList.toggle("is-hidden");
//         document.body.classList.toggle("no-scroll");
//     }
// })();