import { p1 } from "./game";
import { boardRender, resetBoard, toggleBlur } from "./dom";

let clickedOffset;

function cellClickHandler(e) {
  clickedOffset = e.target.dataset.offset;
}

function handleDragStart(e) {
  this.style.opacity = "0.4";

  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/plain", this.id);
}

function handleDragEnd() {
  this.style.opacity = "1";
}

function handleDrop(e) {
  e.preventDefault();

  const shipId = e.dataTransfer.getData("text/plain");

  const shipInfo = shipId.split("-");
  const shipName = shipInfo[0];
  const shipLength = Number(shipInfo[1]);

  const container = document.getElementById(shipId);
  const coords = e.target.id.match(/row(\d+)-cell(\d+)/).slice(1);
  let direction = false;
  if (container.classList.contains("drag-container-vertical")) {
    direction = true;
    coords[0] = Number(coords[0]) - clickedOffset;
  } else {
    coords[1] = Number(coords[1]) - clickedOffset;
  }
  const success = p1.gameboard.placeShip(
    shipName,
    shipLength,
    coords,
    direction
  );
  if (success) {
    e.dataTransfer.dropEffect = "move";
    document.getElementById(shipId).remove();
    resetBoard();
    boardRender();
    toggleBlur();
    // eslint-disable-next-line no-use-before-define
    prepareTargetBoard();
    return true;
  }

  return false;
}

function prepareTargetBoard() {
  const cells = document.querySelectorAll(".cell-p1");
  cells.forEach((cell) => {
    cell.addEventListener("dragenter", (e) => {
      e.preventDefault();
      cell.classList.add("cell-p1--over");
    });

    cell.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    cell.addEventListener("dragleave", (e) => {
      e.preventDefault();
      cell.classList.remove("cell-p1--over");
    });

    cell.addEventListener("drop", (e) => {
      cell.classList.remove("cell-p1--over");
      handleDrop(e);
    });
  });
}

function flipShip(shipId) {
  const draggableContainer = document.getElementById(shipId);
  if (draggableContainer.classList.contains("drag-container-vertical")) {
    draggableContainer.classList.add("drag-container-horizontal");
    draggableContainer.classList.remove("drag-container-vertical");
  } else {
    draggableContainer.classList.remove("drag-container-horizontal");
    draggableContainer.classList.add("drag-container-vertical");
  }
}

function renderShip(shipName, length) {
  const shipDom = document.getElementById("ships");
  const newShip = document.createElement("div");
  newShip.classList.add("draggable-container");
  newShip.classList.add("drag-container-vertical");
  newShip.draggable = true;
  for (let i = 0; i < length; i += 1) {
    const cell = document.createElement("div");
    cell.classList.add("drag-ship");
    cell.dataset.offset = i;
    cell.addEventListener("mousedown", cellClickHandler);
    newShip.appendChild(cell);
  }
  newShip.id = `${shipName}-${length}`;
  newShip.addEventListener("dragstart", handleDragStart);
  newShip.addEventListener("dragend", handleDragEnd);
  newShip.addEventListener("click", () => {
    flipShip(newShip.id);
  });
  shipDom.appendChild(newShip);
  prepareTargetBoard();
}

export default function initPlayerShips() {
  p1.ships.forEach((ship) => {
    renderShip(ship.shipName, ship.length);
  });
}

document.addEventListener("restarted", () => {
  initPlayerShips();
});
