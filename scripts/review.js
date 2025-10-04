document.addEventListener("DOMContentLoaded", () => {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);

  document.querySelector("#reviewCounter").textContent =
    `You have submitted ${count} review(s).`;
});
