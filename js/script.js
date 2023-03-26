//#region AGE/YEAR
var year = 1999;
var month = 6; //July = 7 - 1
var day = 10;
var today = new Date();
var age = today.getFullYear() - year;
if (
  today.getMonth() < month ||
  (today.getMonth() == month && today.getDate() < day)
) {
  age--;
}
document.querySelector("#age").textContent = age;
document.querySelector("#year").textContent = today.getFullYear();
//#endregion

//#region PROJECTS
function makeProjectElement(project) {
  const { title, description, image, link } = project;
  return `
  <div class="project-box">
    <img src="${image}.png" alt="${title}" />
    <div class="project-layer">
      <h4>${title}</h4>
      <p>${description}</p>
      <a href="${link}" target="_blank"><i class="bx bx-link-external"></i></a>
    </div>
  </div>`;
}
const projectContainer = document.querySelector("#project-container");

projectContainer.innerHTML = "";
projects.reverse().forEach((project) => {
  projectContainer.innerHTML += makeProjectElement(project);
});
//#endregion

//#region NAVBAR ICON
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
//#endregion

//#region SCROLL
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
});

ScrollReveal({
  distance: "80px",
  duration: 1500,
  delay: 100,
});

ScrollReveal().reveal(".home-content, .about-content, .heading", {
  origin: "top",
});
ScrollReveal().reveal(".home-img, .project-box, .heading", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .card-group", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});

//#endregion
