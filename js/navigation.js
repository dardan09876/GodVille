import { renderEvents } from "./eventLog.js";

const mainContent = document.getElementById("mainContent");

function loadPage(page) {
  mainContent.innerHTML = "";

  switch (page) {
    case "remote":
      mainContent.innerHTML = "<h2>Remote Control</h2>";
      renderEvents();
      break;

    case "diary":
      mainContent.innerHTML = '<h2>Hero\'s Diary</h2> <ul id="eventLog"></ul>';
      renderEvents();
      break;

    case "hero":
      mainContent.innerHTML = "<h2>Hero Stats</h2>";
      renderEvents();
      break;

    case "stuff":
      mainContent.innerHTML = "<h2>Inventory</h2>";
      renderEvents();
      break;
  }
}

export { loadPage };
