import { showModal } from './modal.js';
import { saveVisitedLanguage } from './local-storage.js';

const container = document.getElementById('languages-container');

async function fetchLanguages() {
  try {
    const response = await fetch('data/languages.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayLanguages(data);
  } catch (error) {
    console.error('Failed to fetch languages:', error);
    container.innerHTML = '<p class="error">Unable to load languages at the moment. Please try again later.</p>';
  }
}

function displayLanguages(languages) {
  languages.forEach(language => {
    const card = document.createElement('div');
    card.classList.add('language-card');
    card.innerHTML = `
      <h2>${language.name}</h2>
      <p><strong>Year:</strong> ${language.year}</p>
      <p><strong>Creator:</strong> ${language.creator}</p>
      <p><strong>Description:</strong> ${language.description}</p>
      <button class="more-info" data-id="${language.name}">More Info</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', event => {
      const languageId = event.target.dataset.id;
      showModal(languageId);
      saveVisitedLanguage(languageId);
    });
  });
}

fetchLanguages();
