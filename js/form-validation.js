// /js/form-validation.js

// Objeto de configuración para la validación del formulario.
const FORM_CONFIG = {
  name: {
    validator: (value) => value.trim() !== "",
    errorMessage: "Por favor ingresa tu nombre.",
    initialMessage: "El nombre es un campo obligatorio.",
  },
  institution: {
    validator: (value) => value.trim() !== "",
    errorMessage: "Por favor ingresa el nombre de tu institución.",
    initialMessage: "La institución ayuda a contextualizar tu mensaje.",
  },
  email: {
    validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    errorMessage: "Ingresa un correo electrónico válido.",
    initialMessage: "Introduce una dirección de correo válida.",
  },
  booking: {
    validator: (value) => value.trim() !== "",
    errorMessage: "Por favor, selecciona una hora de reserva.",
    initialMessage: "Selecciona la hora de docencia.",
  },
  interests: {
    validator: (checkboxes) => checkboxes.length > 0,
    errorMessage: "Selecciona al menos una opción.",
    initialMessage: "Selecciona al menos una opción.",
  },
  message: {
    validator: (value) => value.trim() !== "",
    errorMessage: "Por favor ingresa un mensaje.",
    initialMessage: "Este campo es obligatorio.",
  },
};

// Función para validar un campo específico.
function validateField(fieldId, value) {
  const config = FORM_CONFIG[fieldId];
  const field = document.getElementById(fieldId);
  const messageElement = document.getElementById(`${fieldId}Message`);

  if (!config || !messageElement) return false;

  const isValid = config.validator(value);

  if (field) {
    field.classList.toggle("error", !isValid);
  }

  messageElement.classList.toggle("error", !isValid);

  if (!isValid) {
    messageElement.textContent = config.errorMessage;
    messageElement.style.display = "block";
  } else {
    // Si el campo es válido, restaura el mensaje inicial y lo mantiene visible
    messageElement.textContent = config.initialMessage;
    messageElement.classList.remove("error");
    messageElement.style.display = "block";
  }

  return isValid;
}

// Función principal para validar todos los campos del formulario.
const validateAllFields = (form) => {
  // Valida los campos estáticos.
  const isNameValid = validateField("name", form.name.value);
  const isEmailValid = validateField("email", form.email.value);
  const isMessageValid = validateField("message", form.message.value);

  // Valida los checkboxes de intereses.
  const interestsCheckboxes = Array.from(
    form.querySelectorAll('input[name="interests[]"]:checked')
  );
  const isInterestsValid = validateField("interests", interestsCheckboxes);

  // Lógica para el campo condicional 'institution' y 'booking'.
  const isStudent = form.querySelector("#student").checked;
  const institutionValue = form.querySelector("#institution").value;
  const isInstitutionValid =
    !isStudent || validateField("institution", institutionValue);

  const bookingValue = form.querySelector("#booking").value;
  const isBookingValid = !isStudent || validateField("booking", bookingValue);

  // Habilita el botón si todos los campos son válidos.
  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isMessageValid &&
    isInterestsValid &&
    isInstitutionValid &&
    isBookingValid;

  // Actualiza la propiedad 'disabled' del botón de envío.
  const submitButton = form.querySelector("#submitButton");
  if (submitButton) {
    submitButton.disabled = !isFormValid;
  }

  return isFormValid;
};

// Evento que se ejecuta cuando el DOM está completamente cargado.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  // Lógica para mostrar/ocultar los campos de estudiante/docente.
  const studentCheckbox = document.getElementById("student");
  const teachingHourDiv = document.getElementById("teaching-hour");

  if (studentCheckbox && teachingHourDiv) {
    studentCheckbox.addEventListener("change", (e) => {
      const isChecked = e.target.checked;
      teachingHourDiv.style.display = isChecked ? "block" : "none";

      // Si el checkbox está marcado, el campo es requerido, de lo contrario no.
      const institutionField = document.getElementById("institution");
      const bookingField = document.getElementById("booking");

      if (institutionField) {
        institutionField.required = isChecked;
      }
      if (bookingField) {
        bookingField.required = isChecked;
      }

      // Al cambiar el estado, se revalida todo el formulario.
      validateAllFields(form);
    });
  }

  // Escucha el evento 'input' en el formulario para validar en tiempo real.
  form.addEventListener("input", () => validateAllFields(form));

  // Escucha el evento 'change' para los checkboxes de intereses.
  form.querySelectorAll('input[name="interests[]"]').forEach((checkbox) => {
    checkbox.addEventListener("change", () => validateAllFields(form));
  });

  // Escucha el evento de envío del formulario.
  form.addEventListener("submit", (e) => {
    // Detiene el envío por defecto si el formulario no es válido.
    if (!validateAllFields(form)) {
      e.preventDefault();
      alert("Por favor, corrige los errores del formulario antes de enviarlo.");
    }
  });

  // Validar al cargar la página para reflejar el estado inicial.
  validateAllFields(form);
});
