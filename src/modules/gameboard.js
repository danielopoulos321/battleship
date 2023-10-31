export default class Gameboard {
  board = new Array(10).fill().map(() => new Array(10).fill(0));
}

//  Check if ship placement is higher than 0 and less than 10 in both directions
//  Board spots can be objects containing name of ship and hit status
