import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.turn = false;
  }
}

//  Each player generates a gameboard
//  When attacking it targets the other player's gameboard
// Function to switch turns
// Function for AI to attack random valid spot
// Function for AI to place its ships randomly
