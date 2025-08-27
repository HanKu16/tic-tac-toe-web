export default class Player {

  constructor(number, sign) {
    this.number = number;
    this.sign = sign;
    this.wins = 0;
  }

  addWin() {
    this.wins++;
  }

}