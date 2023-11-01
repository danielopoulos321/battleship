import Gameboard from "./gameboard";

export default class Player {
  constructor() {
    this.gameboard = new Gameboard();
    this.turn = false;
  }

  takeTurn() {
    this.turn = true;
  }

  endTurn(player) {
    this.turn = false;
    player.takeTurn();
  }

  attack(player, coords) {
    player.gameboard.receiveAttack(coords);
    this.endTurn();
  }
}

//  When attacking it targets the other player's gameboard
// Function for AI to attack random valid spot
// Function for AI to place its ships randomly
