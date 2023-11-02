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
    let success = false;
    while (!success) {
      success = player.gameboard.receiveAttack(coords);
    }
    this.endTurn(player);
  }

  pcAttack(player) {
    const coords = this.randomPos();
    this.attack(player, coords);
  }

  // eslint-disable-next-line class-methods-use-this
  randomPos() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
  }
}
