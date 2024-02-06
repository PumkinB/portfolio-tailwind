// Header

window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", (e) => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  e.stopPropagation();
});

window.addEventListener("click", () => {
  if (!navMenu.classList.contains("hidden")) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});
