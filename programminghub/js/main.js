import { showModal } from "./modal.js";
import { saveThemePreference, getThemePreference } from "./local-storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const savedTheme = getThemePreference();
  document.body.classList.toggle("dark", savedTheme === "dark");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    saveThemePreference(newTheme);
  });

  const modalTrigger = document.querySelector("#info-button");
  if (modalTrigger) {
    modalTrigger.addEventListener("click", () => {
      showModal("Welcome to Programming Hub! Here you can explore and learn.");
    });
  }
});