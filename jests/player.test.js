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

  test("pc attacks other player", () => {
    player2.pcAttack(player1);
    let hit = false;
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (player1.gameboard.board[i][j].hit) {
          hit = true;
        }
      }
    }
    expect(hit).toBe(true);
  });

  test("generates random pc fleet", () => {
    player2.pcGenerateFleet();
    expect(player2.gameboard.placedShips.length).toBe(5);
  });
});
