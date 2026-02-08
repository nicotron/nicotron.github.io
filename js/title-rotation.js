// Rotación de títulos con animación character-by-character
const rotatingTitle = document.getElementById('rotating-title');

if (rotatingTitle) {
  const titles = [
    'Product Designer',
    'Creative Technologist',
    'Computational Designer'
  ];

  let currentIndex = 0;
  const charDuration = 250; // Duración en ms para cada carácter (0.05s por carácter = 0.5s para 10 caracteres aprox)

  // Función para deletrear hacia atrás
  async function deleteCharByChar() {
    let currentText = rotatingTitle.textContent;
    while (currentText.length > 0) {
      currentText = currentText.slice(0, -1);
      rotatingTitle.textContent = currentText;
      await sleep(charDuration);
    }
  }

  // Función para deletrear hacia adelante
  async function appearCharByChar(text) {
    let displayText = '';
    for (let char of text) {
      displayText += char;
      rotatingTitle.textContent = displayText;
      await sleep(charDuration);
    }
  }

  // Función auxiliar para esperar
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Función principal para rotar títulos
  async function rotateTitle() {
    // Eliminar caracteres uno a uno
    await deleteCharByChar();

    // Cambiar al siguiente título
    currentIndex = (currentIndex + 1) % titles.length;

    // Aparecer caracteres uno a uno
    await appearCharByChar(titles[currentIndex]);

    // Esperar 2 segundos antes de iniciar la siguiente rotación
    await sleep(2000);

    // Llamar recursivamente
    rotateTitle();
  }

  // Iniciar la rotación
  rotateTitle();
}
