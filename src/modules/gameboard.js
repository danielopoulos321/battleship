export default class Gameboard {
  board = new Array(10)
    .fill()
    .map(() => new Array(10).fill({ shipName: null, hit: false }));

  placedShips = [];

  receiveAttack(coords) {}
  //  If location has name of ship, hit status is true and ship.hit()

  placeShip(shipName, length, coords, horizontal) {}
  //  If placement is valid
  //  Iterate through coords + ship.length
  //  Create new ship object
  //  Change each spot object to contain ship name
  //  Push ship object to placedShips

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
