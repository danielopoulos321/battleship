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

function renderComputerAttack(player1, player2) {
  let switchTurn = 1;
  while (switchTurn === 1) {
    switchTurn = player2.pcAttack(player1);
    playerRender(player1);
  }
  player2.endTurn(player1);
}

function renderPlayerAttack(player1, player2, x, y) {
  const switchTurn = player1.attack(player2, [x, y]);
  enemyRender(player2);
  if (switchTurn === 0) {
    player1.endTurn(player2);
    renderComputerAttack(player1, player2);
  }
}

export default function boardRender(player1, player2) {
  //  give each div the appropriate x,y values
  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p1-row${i}`);
    document.getElementById("board1").appendChild(row);

    player1.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p1");
      cell.setAttribute("id", `p1-row${i}-cell${j}`);
      row.appendChild(cell);
    });
  }

  playerRender(player1);

  for (let i = 0; i < 10; i += 1) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `p2-row${i}`);
    document.getElementById("board2").appendChild(row);

    player2.gameboard.board[i].forEach((e, j) => {
      const cell = document.createElement("div");
      cell.classList.add("cell-p2");
      cell.setAttribute("id", `p2-row${i}-cell${j}`);
      row.appendChild(cell);
      cell.clicked = false;

      cell.addEventListener("click", () => {
        if (!player1.turn) return;
        if (!cell.clicked) {
          renderPlayerAttack(player1, player2, i, j);
          cell.clicked = true;
        }
      });
    });
  }
}
