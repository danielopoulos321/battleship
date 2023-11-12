/* eslint-disable import/no-mutable-exports */
import Player from "./player";

let p1;
let p2;

function initGame() {
  p1 = new Player("You");
  p2 = new Player("Enemy");
  p2.pcGenerateFleet();
  p1.takeTurn();
}

export { initGame, p1, p2 };
