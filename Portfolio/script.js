const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const linkEl = document.querySelector(".main-nav-link");
const nav = document.querySelector(".main-nav");

btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

nav.addEventListener("click", function () {
  nav.style.transition = "all 0s";
  headerEl.classList.remove("nav-open");
});
