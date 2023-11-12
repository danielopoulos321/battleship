import { initGame, p1, p2 } from "./game";

initGame();

const randomPlacementButton = document.getElementById("randomPlacement");
function playerRender(player1) {
  document.querySelectorAll(".cell-p1").forEach((e, j) => {
    let x;
    let y;
    const pos = `${j}`;
    if (j < 10) {
      x = 0;
      y = j;
    } else {
      [x, y] = pos.split("");
    }
    if (
      !player1.gameboard.board[x][y].shipName &&
      player1.gameboard.board[x][y].hit
    ) {
      e.classList.add("miss");
    }
    if (
      player1.gameboard.board[x][y].shipName &&
      player1.gameboard.board[x][y].hit
    ) {
      e.classList.add("ship-hit");
    } else if (player1.gameboard.board[x][y].shipName) {
      e.classList.add("ship");
    }
  });
}

function enemyRender(player2) {
  document.querySelectorAll(".cell-p2").forEach((e, j) => {
    let x;
    let y;
    const pos = `${j}`;
    if (j < 10) {
      x = 0;
      y = j;
    } else {
      [x, y] = pos.split("");
    }
    if (
      player2.gameboard.board[x][y].shipName &&
      player2.gameboard.board[x][y].hit
    ) {
      e.classList.add("ship-hit");
    } else if (
      !player2.gameboard.board[x][y].shipName &&
      player2.gameboard.board[x][y].hit
    ) {
      e.classList.add("miss");
    }
  });
}

function resetBoard() {
  const board1 = document.getElementById("board1");
  const board2 = document.getElementById("board2");
  board1.innerHTML = "";
  board2.innerHTML = "";
}

function renderWinner(player) {
  const modal = document.querySelector("[data-modal");
  const restart = document.getElementById("restart");
  const winner = document.getElementById("winner");
  winner.innerHTML = `${player.name} Won!`;
  restart.addEventListener("click", () => {
    modal.close();
    resetBoard();
    initGame();
    // eslint-disable-next-line no-use-before-define
    boardRender();
    const restartEvent = new CustomEvent("restarted");
    document.dispatchEvent(restartEvent);
    randomPlacementButton.style.display = "block";
  });
  modal.showModal();
}

function checkWin(opponent, player) {
  if (opponent.gameboard.placedShips.every((ship) => ship.isSunk())) {
    renderWinner(player);
  }
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, ms);
  });
}

async function renderComputerAttack(player1, player2) {
  await delay(500);
  let switchTurn = 1;
  while (switchTurn === 1) {
    switchTurn = player2.pcAttack(player1);
    playerRender(player1);
    checkWin(player1, player2);
  }
  player2.endTurn(player1);
}

function renderPlayerAttack(player1, player2, x, y) {
  const switchTurn = player1.attack(player2, [x, y]);
  enemyRender(player2);
  checkWin(player2, player1);
  if (switchTurn === 0) {
    player1.endTurn(player2);
    renderComputerAttack(player1, player2);
  }
}

function toggleBlur() {
  const enemyBoard = document.getElementById("board2");
  const shipDiv = document.getElementById("ships");
  if (shipDiv.innerHTML === "") {
    enemyBoard.classList.remove("blurry");
  } else {
    enemyBoard.classList.add("blurry");
  }
}

function boardRender() {
  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    p1.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }

  playerRender(p1);

  const enemyBoard = document.getElementById("board2");
  enemyBoard.classList.add("blurry");
  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p2-row${i}`);
    enemyBoard.appendChild(row);

    p2.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
      cell.clicked = false;

      cell.addEventListener("click", () => {
        if (!p1.turn) return;
        if (!cell.clicked) {
          renderPlayerAttack(p1, p2, i, j);
          cell.clicked = true;
        }
      });
    });
  }
}

randomPlacementButton.addEventListener("click", () => {
  p1.pcGenerateFleet();
  playerRender(p1);
  document.getElementById("ships").innerHTML = "";
  toggleBlur();
  randomPlacementButton.style.display = "none";
});

export { boardRender, resetBoard, toggleBlur };
