import Ship from "./ship";

export default class Gameboard {
  board = new Array(10)
    .fill()
    .map(() => new Array(10).fill({ shipName: null, hit: false }));

  placedShips = [];

  receiveAttack(coords) {}
  //  If location has name of ship, hit status is true and ship.hit()

  placeShip(shipName, length, coords, horizontal) {
    const x = coords[0];
    const y = coords[1];
    if (this.isValidPlacement(length, x, y, horizontal)) {
      const ship = new Ship(length, shipName);
      this.placedShips.push(ship);
      if (horizontal) {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x + i][y] = {
            ...this.board[x + i][y],
            shipName: ship.shipName,
          };
        }
      } else {
        for (let i = 0; i < ship.length; i += 1) {
          this.board[x][y + i] = {
            ...this.board[x][y + i],
            shipName: ship.shipName,
          };
        }
      }

      return true;
    }
    return false;
  }

  isValidPlacement(length, x, y, horizontal) {
    if (horizontal) {
      if (x + length > 9) return false;
      for (let i = 0; i < length; i += 1) {
        if (this.board[x + i][y].shipName !== null) {
          return false;
        }
      }
    } else {
      if (y + length > 9) return false;
      for (let i = 0; i < length; i += 1) {
        if (this.board[x][y + i].shipName !== null) {
          return false;
        }
      }
    }

    return true;
  }
}
