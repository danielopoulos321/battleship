import Player from "./player";

export default function initGame() {
  const player = new Player();
  const computer = new Player();
  player.pcGenerateFleet();
  computer.pcGenerateFleet();
  player.takeTurn();
  return { player, computer };
}
