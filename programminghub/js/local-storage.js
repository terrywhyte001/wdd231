export function saveThemePreference(theme) {
  localStorage.setItem("preferredTheme", theme);
}

export function getThemePreference() {
  return localStorage.getItem("preferredTheme") || "light";
}

export function saveVisitedLanguage(languageId) {
  let visited = JSON.parse(localStorage.getItem('visitedLanguages')) || [];
  if (!visited.includes(languageId)) {
    visited.push(languageId);
    localStorage.setItem('visitedLanguages', JSON.stringify(visited));
  }
}

export function getVisitedLanguages() {
  return JSON.parse(localStorage.getItem('visitedLanguages')) || [];
}