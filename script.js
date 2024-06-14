document.addEventListener("footerLoaded", function () {
  const images = document.querySelectorAll(".hover-image");
  const footerContent = document.getElementById("footer-content");
  const footerSustituto = document.getElementById("footer-sustituto");

  if (footerContent && footerSustituto) {
    images.forEach((image) => {
      image.addEventListener("mouseover", function () {
        footerSustituto.textContent = this.dataset.text;
        // footerContent.textContent = footerContent.textContent;
        footerContent.classList.add("hidden");
      });

      image.addEventListener("mouseout", function () {
        footerContent.classList.remove("hidden");
        footerContent.textContent = footerContent.textContent;
        footerSustituto.textContent = "";
      });
    });
  } else {
    console.error(
      "El elemento con id 'footer-content' no se encontró en el DOM."
    );
  }
});

document.addEventListener("navbarLoaded", function () {
  const images = document.querySelectorAll(".hover-image");
  const navBarContent = document.getElementById("navbar-title");
  const navBarSustituto = document.getElementById("navbar-sustituto");

  if (navBarContent && navBarSustituto) {
    images.forEach((image) => {
      image.addEventListener("mouseover", function () {
        navBarSustituto.textContent = this.dataset.alt;
        // navBarContent.textContent = navBarContent.textContent;
        navBarContent.classList.add("hidden");
      });

      image.addEventListener("mouseout", function () {
        navBarContent.classList.remove("hidden");
        navBarContent.textContent = navBarContent.textContent;
        navBarSustituto.textContent = "";
      });
    });
  } else {
    console.error(
      "El elemento con id 'footer-content' no se encontró en el DOM."
    );
  }
});
