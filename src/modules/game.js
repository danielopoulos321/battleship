import Player from "./player";

export default function initGame() {
  const player = new Player("You");
  const computer = new Player("Enemy");
  player.pcGenerateFleet();
  computer.pcGenerateFleet();
  player.takeTurn();
  return { player, computer };
}
