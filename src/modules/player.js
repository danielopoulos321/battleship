import Gameboard from "./gameboard";
import BotAI from "./botAI";

export default class Player {
  constructor(name) {
    this.gameboard = new Gameboard();
    this.ai = new BotAI();
    this.turn = false;
    this.name = name;
  }

  takeTurn() {
    this.turn = true;
  }

  endTurn(player) {
    this.turn = false;
    player.takeTurn();
  }

  // eslint-disable-next-line class-methods-use-this
  attack(player, coords) {
    let success = -1;
    while (success < 0) {
      success = player.gameboard.receiveAttack(coords);
    }
    return success;
  }

  pcAttack(player) {
    let success = -1;
    let coords;
    while (success < 0) {
      if (typeof this.ai.lastSuccessfulHit === "undefined") {
        coords = this.randomPos();
        success = player.gameboard.receiveAttack(coords);
      } else {
        coords = this.ai.aiMove(this.gameboard.board);
        if (coords === false) {
          coords = this.randomPos();
        }
        success = player.gameboard.receiveAttack(coords);
      }

      if (success > 0) {
        this.ai.setSuccessfulHit(coords);
      }
    }
    return success;
  }

  pcGenerateFleet() {
    this.generateShip("carrier", 5);
    this.generateShip("cargo", 4);
    this.generateShip("cruiser", 3);
    this.generateShip("patrol", 3);
    this.generateShip("tugboat", 2);
  }

  generateShip(shipName, length) {
    let success = false;
    while (!success) {
      const direction = Math.random() < 0.5;
      const coords = this.randomPos();
      success = this.gameboard.placeShip(shipName, length, coords, direction);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  randomPos() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
}
