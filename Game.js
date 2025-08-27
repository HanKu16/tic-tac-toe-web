export default class Game {

  isGameOn;
  players;
  board;
  gameNumber;
  roundNumber;
  currentPlayer;

  constructor(players, board) {
    this.isGameOn = true;
    this.gameNumber = 1;
    this.players = players;
    this.board = board;
    this.roundNumber = 1;
    this.currentPlayer = players[0];
  }

  nextRound() {
    this.changePlayer();
    this.roundNumber++;
  }

  isWinner() {
    return this.board.isWinner(this.currentPlayer.sign);
  }

  isDraw() {
    return this.roundNumber === 9 && !this.isWinner();
  }

  changePlayer() {
    if (this.currentPlayer.number == 1) {
      this.currentPlayer = this.players[1];
    } else if (this.currentPlayer.number == 2) {
      this.currentPlayer = this.players[0];
    }
  }

  newGame() {
    this.gameNumber++;
    this.roundNumber = 1;
    this.isGameOn = true;
    this.changePlayer();
    this.board.reset();
  }

  stop() {
    this.isGameOn = false;
  }

}