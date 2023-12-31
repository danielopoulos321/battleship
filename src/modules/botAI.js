export default class BotAI {
  constructor() {
    this.lastSuccessfulHit = undefined;
  }

  aiMove(gameboard) {
    const x = this.lastSuccessfulHit[0];
    const y = this.lastSuccessfulHit[1];
    if (x + 1 < 10 && gameboard[x + 1][y].hit === false) {
      this.clearSuccessfulHit();
      return [x + 1, y];
    }

    if (y + 1 < 10 && gameboard[x][y + 1].hit === false) {
      this.clearSuccessfulHit();
      return [x, y + 1];
    }

    if (x - 1 >= 0 && gameboard[x - 1][y].hit === false) {
      this.clearSuccessfulHit();
      return [x - 1, y];
    }

    if (y - 1 >= 0 && gameboard[x][y - 1].hit === false) {
      this.clearSuccessfulHit();
      return [x, y - 1];
    }

    this.clearSuccessfulHit();
    return false;
  }

  setSuccessfulHit(coords) {
    this.lastSuccessfulHit = coords;
  }

  clearSuccessfulHit() {
    this.lastSuccessfulHit = undefined;
  }
}
