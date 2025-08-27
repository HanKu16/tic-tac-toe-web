import Player from './Player.js';
import GameBoard from './GameBoard.js';
import Game from './Game.js';

const crossPlayer = new Player(1, 'X');
const circlePlayer = new Player(2, 'O');
const gameBoard = new GameBoard();
const players = [crossPlayer, circlePlayer];
const game = new Game(players, gameBoard);

addEventListenersToButtons(gameBoard);
addEventListenResetButton();

function addEventListenersToButtons() {
  const buttons = document.querySelectorAll('.game-button');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if (!game.isGameOn) { 
        return;
      }
      const row = event.target.dataset.row;
      const col = event.target.dataset.col;
      if (!gameBoard.isCellAvailable(row, col)) {
        return;
      }
      const currentPlayer = game.currentPlayer;
      gameBoard.markCell(currentPlayer.sign, row, col);
      button.innerHTML = currentPlayer.sign;
      const message = document.querySelector(".game-message");
      if (game.isWinner()) {
        game.stop();
        message.textContent = "Player " + currentPlayer.number + " wins!";
        currentPlayer.addWin();
        const gameScore = document.querySelector(".game-score");
        gameScore.textContent = "X " + crossPlayer.wins + " : " + circlePlayer.wins + " O"; 
      } else if (game.isDraw()) {
        game.stop();
        message.textContent = "Draw!";
      } else {
        game.nextRound();
        const nextPlayer = game.currentPlayer;
        message.textContent = "Player " + nextPlayer.number + " moves";
      }
    });
  })
}

function addEventListenResetButton() {
  const resetButton = document.querySelector('.game-reset-button');
  resetButton.addEventListener('click', () => {
    game.newGame();
    const buttons = document.querySelectorAll(".game-button");
    buttons.forEach(button => {
      button.innerHTML = "";
    });
    const message = document.querySelector(".game-message");
    message.textContent = "Player " + game.currentPlayer.number + " moves";
  });
}
