// show-menu
const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      toggle.classList.toggle("toggle");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

// Active and remove Menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active link
  navLink.forEach(n => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));

// Scroll
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home__title", {});
sr.reveal(".button1", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".home__social-icon", { interval: 200 });

// Scroll about
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 200 });
sr.reveal(".about__text", { delay: 400 });

// Scroll Skills
sr.reveal(".skills__subtitle", {});
sr.reveal(".skills__icon", { delay: 200 });
sr.reveal(".skills__data", { delay: 200 });

// AOS
AOS.init({
  offset: 400,
  duration: 700,
});
