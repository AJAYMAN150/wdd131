// ========== WEAPON SELECTOR ==========
const weapons = {
  sword: "Balanced and reliable — ideal for beginners and heroes like Zhao Yun.",
  spear: "Excellent reach and crowd control; signature weapon of Guan Yu.",
  dual: "Fast and flashy — great for chaining combos like Lu Xun.",
  bow: "Long-range precision attacks; perfect for keeping distance.",
};

const weaponSelect = document.getElementById("weaponSelect");
const weaponInfo = document.getElementById("weaponInfo");

weaponSelect.addEventListener("change", () => {
  const choice = weaponSelect.value;
  if (choice && weapons[choice]) {
    weaponInfo.style.display = "block";
    weaponInfo.textContent = weapons[choice];
    localStorage.setItem("lastWeapon", choice);
  } else {
    weaponInfo.style.display = "none";
  }
});

// Load saved weapon choice
const lastWeapon = localStorage.getItem("lastWeapon");
if (lastWeapon && weapons[lastWeapon]) {
  weaponSelect.value = lastWeapon;
  weaponInfo.style.display = "block";
  weaponInfo.textContent = weapons[lastWeapon];
}

// ========== FEEDBACK FORM ==========
const feedbackForm = document.getElementById("feedbackForm");
const thankYou = document.getElementById("thankYouMessage");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const favChar = document.getElementById("favChar").value;
  const comments = document.getElementById("comments").value;

  const feedback = { user, favChar, comments };
  localStorage.setItem("feedback", JSON.stringify(feedback));

  thankYou.classList.remove("hidden");
  feedbackForm.reset();
});
