export default class Ship {
  constructor(length, shipName) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.shipName = shipName;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
