document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((html) => {
      const navbarElement = document.getElementById("navbar");
      if (navbarElement) {
        navbarElement.innerHTML = html;

        // Obtener la página actual (por ejemplo, index.html -> 'inicio')
        const paginaActual = window.location.pathname
          .split("/")
          .pop()
          .split(".")[0];

        // Remover la clase active de todos los enlaces
        document.querySelectorAll(".navbar ul li a").forEach((enlace) => {
          enlace.classList.remove("active");
        });

        // Añadir la clase active al enlace correspondiente
        const currentLink = document.getElementById(paginaActual);
        if (currentLink) {
          currentLink.classList.add("active");
        }

        // Llamar a la función para añadir event listeners a los enlaces
        addNavLinkListeners();
        document.dispatchEvent(new Event("navbarLoaded"));
        // Dispara el evento personalizado
      } else {
        console.error("El elemento con id 'navbar' no se encontró en el DOM.");
      }
    })
    .catch((error) => console.error("Error cargando navBar:", error));
});

window.toggleMenu = function () {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("nav-links-visible");
};

function addNavLinkListeners() {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace
      console.log("here");
      if (link.innerHTML === "O") {
        const para = document.createElement("h2");
        para.innerText =
          "Deberías ver este contenido en una pantalla más grande.";
        para.setAttribute("id", "intro-text");
        document.getElementById("home-intro").appendChild(para);
        const imageSrc = this.getAttribute("data-image");
        changeImage(imageSrc);
      } else {
        const imageSrc = this.getAttribute("data-image");
        changeImage(imageSrc);
        document.getElementById("intro-text").remove();
      }
    });
  });
}

function changeImage(imageSrc) {
  const mainImage = document.getElementById("main-image");
  if (mainImage) {
    mainImage.src = imageSrc;
  } else {
    console.error("El elemento con id 'main-image' no se encontró en el DOM.");
  }
}
