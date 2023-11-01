import Player from "../src/modules/player";

describe("Player", () => {
  let player1;
  let player2;

  beforeEach(() => {
    player1 = new Player();
    player2 = new Player();

    player1.gameboard.placeShip("destroyer", 4, [1, 1], true);
  });

  test("switches turns", () => {
    player1.takeTurn();
    expect(player1.turn).toBe(true);
    player1.endTurn(player2);
    expect(player1.turn).toBe(false);
    expect(player2.turn).toBe(true);
  });

  test("attacks other player", () => {
    expect(player1.gameboard.board[1][1].hit).toBe(false);
    player2.attack(player1, [1, 1]);
    expect(player1.gameboard.board[1][1].hit).toBe(true);
  });
});
