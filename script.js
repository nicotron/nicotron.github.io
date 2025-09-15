// Objeto de configuración para la validación del formulario
const FORM_CONFIG = {
  // Configuración para el campo nombre
  name: {
    // Valida que el nombre no esté vacío
    validator: (value) => value.trim() !== "",
    // Mensaje cuando el campo es inválido
    errorMessage: "Por favor ingresa tu nombre",
    // Mensaje por defecto
    defaultMessage: "Campo requerido",
  },
  // Configuración para el campo email
  email: {
    // Valida formato de email usando expresión regular
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: "Ingresa un correo electrónico válido",
    defaultMessage: "Campo requerido",
  },
  // Configuración para los checkboxes de intereses
  interests: {
    // Valida que al menos un checkbox esté seleccionado
    validator: (checkboxes) => checkboxes.length > 0,
    errorMessage: "Selecciona al menos una opción",
    defaultMessage: "Selecciona al menos una opción",
  },
  // Configuración para el campo mensaje
  message: {
    // Valida que el mensaje no esté vacío
    validator: (value) => value.trim() !== "",
    errorMessage: "Por favor ingresa un mensaje",
    defaultMessage: "Campo requerido",
  },
};

// Función para validar un campo específico del formulario
function validateField(fieldId, value) {
  // Obtiene la configuración para este campo
  const config = FORM_CONFIG[fieldId];
  // Obtiene el elemento del DOM
  const field = document.getElementById(fieldId);
  // Obtiene el elemento para mostrar mensajes
  const messageElement = document.getElementById(`${fieldId}Message`);
  // Valida el campo usando su función validadora
  const isValid = config.validator(value);

  // Agrega o quita la clase de error según la validación
  field.classList.toggle("error", !isValid);
  messageElement.classList.toggle("error", !isValid);
  // Muestra el mensaje correspondiente según la validación
  messageElement.textContent = isValid
    ? config.defaultMessage
    : config.errorMessage;

  // Retorna el resultado de la validación
  return isValid;
}

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

  // --- FUNCIONALIDAD DEL FORMULARIO ---
  // Obtiene elementos del formulario
  const form = document.getElementById("contactForm");
  const studentCheckbox = document.getElementById("student");
  const teachingHourDiv = document.getElementById("teaching-hour");
  const submitButton = document.getElementById("submitButton");

  // Maneja la visibilidad del campo de reserva de hora
  if (studentCheckbox && teachingHourDiv) {
    // Oculta el campo de reserva al inicio
    teachingHourDiv.style.display = "none";
    // Alterna visibilidad según el checkbox
    studentCheckbox.addEventListener("change", (e) => {
      teachingHourDiv.style.display = e.target.checked ? "block" : "none";
    });
  }

  // Función para validar todo el formulario
  const validateForm = () => {
    // Valida cada campo del formulario
    const isNameValid = validateField("name", form.name.value);
    const isEmailValid = validateField("email", form.email.value);
    const isInterestsValid = validateField(
      "interests",
      Array.from(form.querySelectorAll('input[name="interests[]"]:checked'))
    );
    const isMessageValid = validateField("message", form.message.value);

    // Retorna true solo si todos los campos son válidos
    return isNameValid && isEmailValid && isInterestsValid && isMessageValid;
  };

  // Valida el formulario mientras se escribe
  form?.addEventListener("input", () => {
    // Habilita/deshabilita el botón según la validación
    submitButton.disabled = !validateForm();
  });

  // Maneja el envío del formulario
  form?.addEventListener("submit", (e) => {
    // Previene el envío por defecto
    e.preventDefault();
    // Verifica si el formulario es válido
    if (validateForm()) {
      // Muestra mensaje de éxito
      alert("Formulario enviado correctamente");
      // Limpia el formulario
      form.reset();
      // Deshabilita el botón de envío
      submitButton.disabled = true;
    }
  });

  // Añade eventos para el estado activo de los campos
  const inputGroups = form.querySelectorAll(".input-group");

  inputGroups.forEach((group) => {
    const input = group.querySelector("input, textarea");
    if (input) {
      input.addEventListener("focus", () => {
        group.classList.add("active");
      });

      input.addEventListener("blur", () => {
        if (!input.value) {
          group.classList.remove("active");
        }
      });
    }
  });

  // Función para verificar si los campos requeridos están llenos
  function checkRequiredFields() {
    const name = document.getElementById("name").value.trim();
    const institution = document.getElementById("institution").value.trim();
    const interests = document.querySelectorAll(
      'input[name="interests[]"]:checked'
    );
    const message = document.getElementById("message").value.trim();

    // Verificar si todos los campos requeridos tienen valor
    const isValid =
      name !== "" &&
      institution !== "" &&
      interests.length > 0 &&
      message !== "";

    // Habilitar/deshabilitar el botón según la validación
    submitButton.disabled = !isValid;

    // Opcional: agregar clase visual para el botón deshabilitado
    submitButton.classList.toggle("button--disabled", !isValid);
  }

  // Escuchar cambios en los campos del formulario
  form.addEventListener("input", checkRequiredFields);

  // Escuchar cambios en los checkboxes de intereses
  document.querySelectorAll('input[name="interests[]"]').forEach((checkbox) => {
    checkbox.addEventListener("change", checkRequiredFields);
  });

  // Verificar campos al cargar la página
  checkRequiredFields();
});
