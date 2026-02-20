const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const sampleBtn = document.getElementById("sampleBtn");
const eventList = document.getElementById("eventList");

const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("desc");

//  Add Event
addBtn.addEventListener("click", () => {

  const title = titleInput.value.trim();
  const date = dateInput.value;
  const category = categoryInput.value;
  const desc = descInput.value;

  if (!title || !date) {
    alert("Please enter title and date");
    return;
  }

  createEventCard(title, date, category, desc);

  titleInput.value = "";
  dateInput.value = "";
  descInput.value = "";
});

// Create Card
function createEventCard(title, date, category, desc) {

  const emptyMsg = document.querySelector(".empty");
  if (emptyMsg) emptyMsg.remove();

  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <button class="delete-btn">×</button>
    <h3>${title}</h3>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p>${desc}</p>
  `;

  eventList.appendChild(card);
}

// Event for Delete
eventList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});

//  Clear All
clearBtn.addEventListener("click", () => {
  eventList.innerHTML =
    '<p class="empty">No events yet. Add your first event!</p>';
});

//  Sample Events
sampleBtn.addEventListener("click", () => {
  createEventCard("Tech Conference", "2026-03-12", "Conference", "Annual tech meet");
  createEventCard("Team Meeting", "2026-03-15", "Meeting", "Project discussion");
});

//  DOM Demo (Key Press)
document.addEventListener("keydown", (e) => {
  document.getElementById("keyDisplay").textContent =
    "You Pressed: " + e.key;
});