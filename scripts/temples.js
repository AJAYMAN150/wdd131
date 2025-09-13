// Footer dynamic year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
    menuButton.textContent = "☰";
  } else {
    nav.style.display = "flex";
    menuButton.textContent = "✖";
  }
});
