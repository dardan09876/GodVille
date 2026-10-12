import { gameState } from "./gameState.js";
import { addEvent } from "./eventLog.js";

const goldText = document.getElementById("goldText");

const locations = [
  "an abandoned shrine",
  "a forgotten graveyard",
  "a mysterious cave",
  "an ancient battlefield",
  "a peaceful clearing",
];

function getRandomLocation() {
  const index = Math.floor(Math.random() * locations.length);
  return locations[index];
}
const location = getRandomLocation();

export function randomTravelEvent() {
  const hero = gameState.hero;
  const random = Math.random();

  if (random < 0.5) {
    // 50% chance nothing happens
    return;
  } else if (random < 0.75) {
    // 25% chance to encounter a monster
    addEvent("Hero encounters a wandering goblin!");
  } else if (random < 0.9) {
    // 15% chance to find gold
    const goldFound = Math.floor(Math.random() * 10) + 1;

    hero.gold += goldFound;
    goldText.textContent = `Gold: ${hero.gold}`;

    addEvent(`Hero finds ${goldFound} gold coins!`);
  } else {
    // 10% chance to discover a location
    addEvent(`Hero discovers ${location}.`);
  }
}
