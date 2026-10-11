import { gameState } from "./gameState.js";

export function updateHero() {
  const hero = gameState.hero;

  switch (hero.currentAction) {
    case "idle":
      hero.currentAction = "traveling";
      console.log("Hero begins traveling.");
      break;

    case "traveling":
      console.log("Hero continues traveling.");
      break;

    case "resting":
      console.log("Hero is resting.");
      break;
  }
}
