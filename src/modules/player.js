import Gameboard from "./gameboard";

export default class Player {
  constructor(name) {
    this.gameboard = new Gameboard();
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
    while (success < 0) {
      const coords = this.randomPos();
      success = player.gameboard.receiveAttack(coords);
    }
    return success;
  }

  pcGenerateFleet() {
    this.generateShip("destroyer", 4);
    this.generateShip("cargo", 3);
    this.generateShip("cruiser", 2);
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
