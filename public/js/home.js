import { getGameNightData, inputGameData } from "./components/game-night.js";

// Get the game night data for display on the page
let tickerElement = document.getElementById('game-night-ticker');
getGameNightData().then((data) => {
  console.log("Parsed Game Data");

  inputGameData(tickerElement, data);
});

// Behavior for the discord button
const discordButton = document.getElementById('discord-button');
const initPos = {
  x: discordButton.style.left,
  y: discordButton.style.top,
}
let isMoved = false;
discordButton.addEventListener('mouseenter', (e) => {
  // move away from the mouse
  if (!isMoved) {
    discordButton.style.opacity = "0";
    discordButton.style.cursor = "unset";
  }

  isMoved = !isMoved;
});
