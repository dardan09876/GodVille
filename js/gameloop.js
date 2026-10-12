import { gameState } from "./gameState.js";
import { updateHero } from "./heroSystem.js";

export function gameTick() {
  updateHero();
}

export function startGameLoop() {
  setInterval(gameTick, 10000);
}
