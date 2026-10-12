import { events } from "./gameState.js";

export function addEvent(message) {
  events.push(message);

  if (events.length > 10) {
    events.shift();
  }

  renderEvents();
}

export function renderEvents() {
  const eventLog = document.getElementById("eventLog");

  if (!eventLog) return;

  eventLog.innerHTML = "";

  events.forEach((event) => {
    const li = document.createElement("li");
    li.textContent = event;
    eventLog.appendChild(li);
  });
}
