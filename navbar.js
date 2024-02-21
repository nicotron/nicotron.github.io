// navbar.js
document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Cargar la barra de navegación usando fetch
    const response = await fetch("navbar.html");
    const navbarHtml = await response.text();

    // Insertar el HTML de la barra de navegación en el contenedor
    const navbarContainer = document.getElementById("navbar");
    navbarContainer.innerHTML = navbarHtml;
  } catch (error) {
    console.error("Error al cargar la barra de navegación:", error);
  }
});
