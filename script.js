// script.js

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".navbar-toggler");
  const nav = document.querySelector("#navbarNav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});
