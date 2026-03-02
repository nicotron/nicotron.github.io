// /js/hamburger-menu.js

// Escucha el evento 'DOMContentLoaded' para asegurar que el script se ejecute
// solo cuando todo el HTML ha sido cargado.
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón del menú de hamburguesa y el menú principal.
    const menuToggle = document.querySelector(".header__menu-toggle");
    const mainMenu = document.getElementById("main-menu");
    // Selecciona todos los enlaces dentro del menú principal.
    const menuLinks = document.querySelectorAll(".menu__link");

    // Función que alterna el estado del menú (abierto/cerrado).
    const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    // Toggle BEM modifier classes
    menuToggle.classList.toggle("header__menu-toggle--is-active");
    mainMenu.classList.toggle("menu--is-active");
    };

    // Agrega el evento de clic al botón del menú para abrir/cerrar.
    menuToggle.addEventListener("click", toggleMenu);

    // Agrega el evento de clic a cada enlace del menú para cerrar el menú al navegar.
    menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));
});