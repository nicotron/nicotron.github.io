// Dropdown Curriculum - Interactividad
(() => {
  const dropdownButton = document.getElementById('curriculum-dropdown');
  const dropdownContent = document.getElementById('curriculum-dropdown-content');

  if (!dropdownButton || !dropdownContent) return;

  // Abrir/cerrar dropdown
  function toggleDropdown() {
    const isExpanded = dropdownButton.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function openDropdown() {
    dropdownButton.setAttribute('aria-expanded', 'true');
    dropdownContent.classList.remove('dropdown__content--hidden');
    dropdownContent.classList.add('dropdown__content--visible');
  }

  function closeDropdown() {
    dropdownButton.setAttribute('aria-expanded', 'false');
    dropdownContent.classList.remove('dropdown__content--visible');
    dropdownContent.classList.add('dropdown__content--hidden');
  }

  // Event listeners
  dropdownButton.addEventListener('click', toggleDropdown);

  // Cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dropdownButton.getAttribute('aria-expanded') === 'true') {
      closeDropdown();
    }
  });
})();
