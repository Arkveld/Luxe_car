//Menu burger
const menuToggle = document.querySelector(".menu_toggle");
const menu = document.querySelector(".menu");
const menuToggleSpan = document.querySelector(".menu_toggle span");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  menuToggleSpan.classList.toggle("active");
  menu.classList.toggle("responsive");
});
