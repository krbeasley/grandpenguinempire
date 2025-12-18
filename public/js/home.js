import { getGameNightData, inputGameData } from "./components/game-night.js";

// Get the game night data for display on the page
let tickerElement = document.getElementById('game-night-ticker');
getGameNightData().then((data) => {
  console.log("Parsed Game Data");

  inputGameData(tickerElement, data);
});
