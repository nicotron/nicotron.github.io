// /js/hamburger-menu.js

// Escucha el evento 'DOMContentLoaded' para asegurar que el script se ejecute
// solo cuando todo el HTML ha sido cargado.
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el botón del menú de hamburguesa y el menú principal.
    const menuToggle = document.querySelector(".menu-toggle");
    const mainMenu = document.getElementById("main-menu");
    // Selecciona todos los enlaces dentro del menú principal.
    const menuLinks = document.querySelectorAll(".main-menu__item a");

    // Función que alterna el estado del menú (abierto/cerrado).
    const toggleMenu = () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        menuToggle.classList.toggle("is-active");
        mainMenu.classList.toggle("is-active");
    };

    // Agrega el evento de clic al botón del menú para abrir/cerrar.
    menuToggle.addEventListener("click", toggleMenu);

    // Agrega el evento de clic a cada enlace del menú para cerrar el menú al navegar.
    menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));
});