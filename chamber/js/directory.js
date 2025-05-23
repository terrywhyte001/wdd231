const directory = document.getElementById("directory");
const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");

// Fetch members
async function fetchMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  directory.innerHTML = ""; // Clear previous content
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership ? member.membership : ''}</p>
    `;
    directory.appendChild(card);
  });
}

gridBtn.addEventListener("click", () => {
  directory.classList.add("grid-view");
  directory.classList.remove("list-view");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list-view");
  directory.classList.remove("grid-view");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

// Footer date
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
const lastModSpan = document.getElementById("lastModified");
if (lastModSpan) lastModSpan.textContent = document.lastModified;

fetchMembers();
