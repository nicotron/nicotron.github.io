// Selecciona el botón y el menú
const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('#main-menu');

// Agrega un "event listener" para el clic en el botón
menuToggle.addEventListener('click', () => {
  // Alterna la clase 'is-active' en el botón para la animación
  menuToggle.classList.toggle('is-active');
  
  // Alterna la clase 'is-active' en el menú para mostrarlo/ocultarlo
  mainMenu.classList.toggle('is-active');
  
  // Actualiza el estado de accesibilidad
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// Selecciona todos los enlaces dentro del menú
const menuLinks = document.querySelectorAll('.main-menu__item a');

// Agrega un event listener a cada enlace para cerrar el menú
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remueve las clases para cerrar el menú
    menuToggle.classList.remove('is-active');
    mainMenu.classList.remove('is-active');
// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // --- FUNCIONALIDAD DEL MENÚ ---
  // Obtiene elementos del menú
  const menuToggle = document.querySelector(".menu-toggle");
  const mainMenu = document.getElementById("main-menu");
  const menuLinks = document.querySelectorAll(".main-menu__item a");

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    // Verifica si el menú está expandido
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    // Actualiza el estado de accesibilidad
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    // Alterna las clases activas
    menuToggle.classList.toggle("is-active");
    mainMenu.classList.toggle("is-active");
  };

  // Agrega eventos para abrir/cerrar el menú
  menuToggle.addEventListener("click", toggleMenu);
  // Cierra el menú al hacer clic en un enlace
  menuLinks.forEach((link) => link.addEventListener("click", toggleMenu));

  });
});