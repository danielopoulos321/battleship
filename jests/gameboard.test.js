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

  test("places new ship", () => {});

  test("does not place ship if coordinate is occupied", () => {});
});
