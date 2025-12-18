
import { ROOT_URL } from "../utilities/api-helper.js";

export async function getGameNightData() {
  return new Promise((resolve) => {
    fetch(`${ROOT_URL()}/api/game-night`)
      .then((res) => res.json())
      .then((json) => JSON.parse(json))
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(err.message);
        resolve(null);
      });
  })
}

export function inputGameData(tickerContainer, gameData) {
  // console.log(gameData);

  // Get the ticker element
  const tickerElement = document.querySelector(`#${tickerContainer.id} .ticker`);
  if (!tickerElement) { console.error("Couldn't parse the ticker element."); return null; }

  // Load the data into the ticker element
  const players = gameData["players"];
  const games = gameData["games"];

  // Loop through each game as they are in order of play, gathering the name of the player,
  // and the results if the game has been played already.
  let tickerTiles = [];
  for (let i = 0; i < games.length; i++) {
    const gameTitle = games[i]["title"];
    const gameGenre = games[i]["genre"];
    const player = findPlayerByGameIndex(i, players);

    // Make sure a player was located for the game
    if (player === null) {
      console.error(`Failed to load player for ${gameTitle}`);
      return null;
    }

    // Get the game results
    const isGame1 = player['games'][0] === i;
    const isGame2 = player['games'][1] === i;
    let gameResult;

    if (isGame1) {
      gameResult = player['results'][0];
    } else if (isGame2) {
      gameResult = player['results'][1];
    } else {
      console.error(`Failed to find the correct game for ${gameTitle}`);
      return null;
    }

    // Create a ticker tile from the parsed information
    tickerTiles.push(
      createTickerTile(player, {
        "title" : gameTitle,
        "genre" : gameGenre,
        "result" : gameResult
      })
    );
  }

  // Add the tiles to the ticker element twice
  tickerTiles.forEach((tile) => {
    tickerElement.append(tile);
  });
}

// Find a player's information from a game index.
function findPlayerByGameIndex(gameIndex, playerData) {
  for (let i = 0; i < playerData.length; i++) {
    let playerGames = playerData[i]["games"];
    if (playerGames.includes(gameIndex)) {
      return playerData[i];
    }
  }

  return null;
}

// Returns a "ticker tile" HTML element
function createTickerTile(playerInfo, gameData) {
  // Build the tile
  let tile = document.createElement('div');
  tile.classList.add("w-[180px]", "h-12", "rounded", "bg-neutral-800", "flex", "flex-col", "justify-center", "z-10",
    "items-start", "hover:shadow-xl", "duration-100", "ease-in-out", "cursor-pointer", "px-4", "border-1", "border-neutral-700/50");

  // The title of the tile
  let titleElement = document.createElement('p');
  titleElement.innerText = gameData["title"];
  titleElement.classList.add("text-text", "text-xs", "font-bold")
  tile.append(titleElement);

  // The details container
  let detailsContainer = document.createElement('div');
  detailsContainer.classList.add("flex", "items-center", "justify-between", "w-full");
  tile.append(detailsContainer);

  // Who played the game?
  let nameElement = document.createElement('p');
  nameElement.innerText = playerInfo["name"];
  nameElement.classList.add("text-text/75", "text-xs");
  detailsContainer.append(nameElement);

  // What was their result?
  let resultElement = document.createElement('p');
  resultElement.innerText = gameData['result'] ?? "TBD";
  resultElement.classList.add("text-text/75", "text-xs");
  detailsContainer.append(resultElement);

  return tile;
}
