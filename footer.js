document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector("footer").innerHTML = html;
      console.log("loaded footer");
      // Dispara el evento personalizado
      document.dispatchEvent(new Event("footerLoaded"));
    })
    .catch((error) => console.error("Error cargando el footer:", error));
});
