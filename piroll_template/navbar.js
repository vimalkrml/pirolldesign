const navOpen = document.querySelector("#navbar__open");
const navClose = document.querySelector("#navbar__close");
const navItems = document.querySelector(".c-nav-bar__items");

navOpen.addEventListener("click", function() {
  navItems.classList.add("c-nav-bar__items--mod");
});

navClose.addEventListener("click", function() {
  navItems.classList.remove("c-nav-bar__items--mod");
});