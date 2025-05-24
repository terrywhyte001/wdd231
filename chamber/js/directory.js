const directoryContainer = document.getElementById('member-display');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

// Fetch member data from JSON file
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members);
}

// Display members in the selected view
function displayMembers(members) {
    directoryContainer.innerHTML = ''; // Clear existing content
    members.forEach(member => {
        const memberCard = createMemberCard(member);
        directoryContainer.appendChild(memberCard);
    });
}

// Create a member card element
function createMemberCard(member) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p>Membership Level: ${member.membershipLevel}</p>
    `;
    return card;
}

// Toggle between grid and list view
gridBtn.addEventListener('click', () => {
    directoryContainer.classList.add('grid');
    directoryContainer.classList.remove('list-view');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    directoryContainer.classList.add('list-view');
    directoryContainer.classList.remove('grid');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});

// Display the current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize the app
fetchMembers();