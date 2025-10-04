const products = [
  {id: "fc-1888", name: "Flux Capacitor"},
  {id: "pl-1985", name: "Power Laces"},
  {id: "ws-2015", name: "Weather Simulator"},
  {id: "tc-2050", name: "Time Machine"}
];

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector("#productName");

  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id; // value = id (per rubric)
    option.textContent = product.name; // display name
    selectElement.appendChild(option);
  });
});
