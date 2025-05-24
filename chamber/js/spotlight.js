// spotlight.js
const spotlightContainer = document.getElementById("spotlight-container");

async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Failed to load member data");

    // If your JSON is an array, not an object, use this:
    const members = await response.json();

    // If your JSON is { "members": [...] }, use:
    // const { members } = await response.json();

    // Filter for gold or silver members (number or string)
    const premiumMembers = members.filter(
      m => m.membership === 2 || m.membership === 3 ||
           m.membership === "silver" || m.membership === "gold"
    );

    // Shuffle and pick 2-3
    const selected = premiumMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

    spotlightContainer.innerHTML = selected.map(member => `
      <div class="spotlight-card">
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">
          ${
            member.membership === 3 || member.membership === "gold"
              ? "Gold"
              : "Silver"
          } Member
        </p>
      </div>
    `).join('');
  } catch (err) {
    spotlightContainer.innerHTML = "<p>Unable to load member spotlights.</p>";
    console.error(err);
  }
}

loadSpotlights();
