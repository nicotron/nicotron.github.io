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

    // Actualiza el estado de accesibilidad
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});