import { gameState } from "./gameState.js";
import { addEvent } from "./eventLog.js";
import { randomTravelEvent } from "./eventSystem.js";

export function updateHero() {
  const hero = gameState.hero;

  switch (hero.currentAction) {
    case "idle":
      hero.currentAction = "traveling";
      hero.actionProgress = 0;
      hero.actionDuration = 5;

      addEvent("Hero begins traveling.");
      break;

    case "traveling":
      hero.actionProgress++;

      randomTravelEvent();

      addEvent(
        `Hero is traveling: ${hero.actionProgress}/${hero.actionDuration}`,
      );

      if (hero.actionProgress >= hero.actionDuration) {
        hero.currentAction = "resting";
        hero.actionProgress = 0;
        hero.actionDuration = 3;

        addEvent("Hero stops traveling and begins resting.");
      }
      break;

    case "resting":
      hero.actionProgress++;

      addEvent(
        `Hero is resting: ${hero.actionProgress}/${hero.actionDuration}`,
      );

      if (hero.actionProgress >= hero.actionDuration) {
        hero.currentAction = "idle";
        hero.actionProgress = 0;
        hero.actionDuration = 0;

        addEvent("Hero finishes resting.");
      }
      break;
  }
}
