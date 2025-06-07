document.addEventListener('DOMContentLoaded', () => {
  const cardsContainer = document.getElementById('cards');
  const visitMessage = document.getElementById('visitMessage');

  // Load items from JSON file
  fetch('data/items.json')
    .then(res => res.json())
    .then(items => {
      items.forEach((item, index) => {
        const card = document.createElement('article');
        card.className = 'card';
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure>
            <img src="${item.image}" alt="Photo of ${item.name}" loading="lazy" />
            <figcaption>${item.name}</figcaption>
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button type="button" aria-label="Learn more about ${item.name}">Learn More</button>
        `;

        cardsContainer.appendChild(card);
      });
    })
    .catch(error => {
      cardsContainer.innerHTML = '<p>Sorry, failed to load points of interest.</p>';
      console.error('Error loading JSON:', error);
    });

  // Visitor last visit message using localStorage
  const now = Date.now();
  const lastVisit = localStorage.getItem('lastVisit');

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const diffDays = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      visitMessage.textContent = `You last visited ${diffDays} day${diffDays === 1 ? '' : 's'} ago.`;
    }
  }

  localStorage.setItem('lastVisit', now);
});
