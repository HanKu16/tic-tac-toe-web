export default class GameBoard {

  rows;
  columns;
  cells;

  constructor() {
    this.rows = 3;
    this.columns = 3;
    this.reset();
  }

  reset() {
    this.cells = [];
    for (let i = 0; i < this.rows; ++i) {
      this.cells.push([]);
      for (let j = 0; j < this.columns; ++j) {
        this.cells[i][j] = null;
      }
    }
  }

  markCell(sign, row, col) {
    this.cells[row][col] = sign;
    console.log(this.cells);
  }

  isWinner(sign) {
    return this.isWinnerInRows(sign) || this.isWinnerInCols(sign) || 
      this.isWinnerInDiagonals(sign);
  }

  isWinnerInRows(sign) {
    for (let row = 0; row < this.rows; row++) {
      if ((this.cells[row][0] == sign) && (this.cells[row][1] == sign) && 
        (this.cells[row][2] == sign)) {
        return true;
      }
    }
    return false;
  }

  isWinnerInCols(sign) {
    for (let col = 0; col < this.columns; col++) {
      if ((this.cells[0][col] == sign) && (this.cells[1][col] == sign) &&
        (this.cells[2][col] == sign)) {
          return true;
        }
    }
    return false;
  }

  isWinnerInDiagonals(sign) {
    if ((this.cells[0][0] == sign) && (this.cells[1][1] == sign) && 
      (this.cells[2][2] == sign)) {
        return true;
    }
    if ((this.cells[0][2] == sign) && (this.cells[1][1] == sign) && 
      (this.cells[2][0] == sign)) {
        return true;
    }
    return false;
  }

  isCellAvailable(row, column) {
    return this.cells[row][column] == null;
  }

}