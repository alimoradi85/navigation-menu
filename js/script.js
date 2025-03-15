const homeSection = document.getElementById("home");
const contactUsSection = document.getElementById("contact-us");
const productSection = document.getElementById("product");
const aboutUsSection = document.getElementById("about-us");

const sections = document.querySelectorAll(".section-main");

const nav = document.querySelector(".navbar");

const ulElement = document.querySelector(".navbar ul");

const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    const datasection = link.dataset.item;
    const selected = document.getElementById(datasection);
    window.scrollTo(0, selected.offsetTop);
  });
});

document.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;

  if (scrollTop > 250) {
    nav.classList.add("after-scroll-ul");
  } else {
    nav.classList.remove("after-scroll-ul");
  }

  sections.forEach((section) => {
    lightItem(scrollTop, section);
  });
});
const lightItem = (scrollTop, section) => {
  const sectionTop = section.offsetTop;
  const sectionTopAndHeight = section.clientHeight + section.offsetTop;

  const sectionId = section.id;
  if (scrollTop >= sectionTop) {
    links.forEach((link) => {
      if (sectionId === link.dataset.item) {
        link.classList.add("opacity");
      }
    });
  }
  if (scrollTop >= sectionTopAndHeight || scrollTop < sectionTop) {
    links.forEach((link) => {
      if (sectionId === link.dataset.item) {
        link.classList.remove("opacity");
      }
    });
  }
};
