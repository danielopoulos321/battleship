import BotAI from "../src/modules/botAI";
import Player from "../src/modules/player";

describe("BotAI", () => {
  let userPlayer;
  let computerPlayer;
  let AI;
  beforeEach(() => {
    userPlayer = new Player();
    computerPlayer = new Player();
    userPlayer.gameboard.placeShip("destroyer", 4, [3, 3], true);
    AI = new BotAI();
  });

  test("when 3,3 success, returns 4,3 as next coord", () => {
    AI.setSuccessfulHit([3, 3]);
    expect(AI.aiMove(userPlayer.gameboard.board)).toEqual([4, 3]);
  });

  test("when 6,3 success & 7,3 already hit, returns 4,6 as next coord", () => {
    computerPlayer.attack(userPlayer, [7, 3]);
    AI.setSuccessfulHit([6, 3]);
    expect(AI.aiMove(userPlayer.gameboard.board)).toEqual([6, 4]);
  });
});
