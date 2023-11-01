import Gameboard from "../src/modules/gameboard";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  test("board rows and columns are 10", () => {
    expect(gameboard.board.length).toBe(10);
    expect(gameboard.board[0].length).toBe(10);
  });

  test("places new ship horizontally", () => {
    gameboard.placeShip("destroyer", 4, [1, 1], true);
    expect(gameboard.board[1][1].shipName).toBe("destroyer");
    expect(gameboard.placedShips[0].shipName).toBe("destroyer");
  });

  test("places new ship vertically", () => {
    gameboard.placeShip("destroyer", 4, [1, 1], false);
    expect(gameboard.board[1][4].shipName).toBe("destroyer");
    expect(gameboard.placedShips[0].shipName).toBe("destroyer");
  });

  test("does not place ship if coordinate is occupied", () => {
    gameboard.board[2][1].shipName = "destroyer";
    gameboard.placeShip("cargo", 4, [1, 1], true);
    expect(gameboard.board[1][1].shipName).toBe(null);
    expect(gameboard.placedShips[0]).toBe(undefined);
  });

  test("ship object updates with a hit", () => {
    gameboard.placeShip("cargo", 4, [1, 1], true);
    gameboard.receiveAttack([1, 1]);
    expect(gameboard.placedShips[0].hits).toBe(1);
  });

  test("board array updates with a ship hit", () => {
    gameboard.placeShip("cargo", 4, [1, 1], true);
    gameboard.receiveAttack([1, 1]);
    expect(gameboard.board[1][1].hit).toBe(true);
  });

  test("board array updates with a blank hit", () => {
    gameboard.receiveAttack([1, 1]);
    expect(gameboard.board[1][1].hit).toBe(true);
  });

  test("returns true when all ships sunk", () => {
    gameboard.placeShip("cargo", 4, [1, 1], true);
    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([2, 1]);
    gameboard.receiveAttack([3, 1]);
    gameboard.receiveAttack([4, 1]);
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("returns false when all ships not sunk", () => {
    gameboard.placeShip("destroyer", 2, [5, 5], true);
    gameboard.placeShip("cargo", 4, [1, 1], true);
    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([2, 1]);
    gameboard.receiveAttack([3, 1]);
    gameboard.receiveAttack([4, 1]);
    expect(gameboard.allShipsSunk()).toBe(false);
  });
});

// describe("Gameboard Private Functions", () => {
//   let gameboard;

//   beforeEach(() => {
//     gameboard = new Gameboard();
//   });

//   test("checks valid placement", () => {
//     expect(gameboard.isValidPlacement(4, 1, 1, true)).toBe(true);
//   });

//   test("checks placement out of bounds", () => {
//     expect(gameboard.isValidPlacement(4, 7, 7, true)).toBe(false);
//   });

//   test("checks placement where ship already exists", () => {
//     gameboard.board[2][1].shipName = "destroyer";
//     expect(gameboard.isValidPlacement(4, 1, 1, true)).toBe(false);
//   });

//   test("checks placement where horizontal would be valid but not vertical", () => {
//     expect(gameboard.isValidPlacement(4, 1, 8, false)).toBe(false);
//   });
// });
