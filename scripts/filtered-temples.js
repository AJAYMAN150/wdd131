// =======================
// Footer dynamic year and last modified
// =======================
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// =======================
// Hamburger menu toggle
// =======================
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

// =======================
// Temple Data
// =======================
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    size: 253000,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois",
    dedicated: "1846-05-01",
    size: 54000,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    size: 41000,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    size: 44000,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    size: 116642,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    size: 42000,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    size: 85000,
    imageUrl: "images/temple7.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    size: 52590,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah",
    dedicated: "2015-06-07",
    size: 96630,
    imageUrl: "images/temple9.jpg"
  }
];

// =======================
// Build Temple Cards
// =======================
function createTempleCard(temple) {
  const card = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = temple.templeName;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    Location: ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Size: ${temple.size.toLocaleString()} sq ft
  `;

  card.appendChild(img);
  card.appendChild(caption);

  return card;
}

function displayTemples(filteredTemples) {
  const container = document.getElementById("temples");
  container.innerHTML = ""; // clear before inserting
  filteredTemples.forEach(t => container.appendChild(createTempleCard(t)));
}

// Default: show all temples
displayTemples(temples);

// =======================
// Filters
// =======================
document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.size > 90000));
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(temples.filter(t => t.size < 10000));
});
