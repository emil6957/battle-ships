import "./style.css";

const Player = require("./factories/Player");
const newGame = require("./modules/newGame");
const displayBoard = require("./modules/displayBoard");
const updateBoard = require("./modules/updateBoard");
const updateEnemyBoard = require("./modules/updateEnemyBoard");
const computerAttack = require("./modules/computerAttack");
const tempPlaceShips = require("./modules/tempPlaceShips");
const displayWinner = require("./modules/displayWinner");

newGame();

function ableToAttack(p, board, x, y) {
    const squares = board.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            if (p.game.allSunk() || x.game.allSunk()) return;
            const { index } = e.target.dataset;
            const position = parseInt(index, 10);
            if (p.game.board[position] === "M" || p.game.board[position] === "x") return;
            p.game.recieveAttack(position);
            updateEnemyBoard(p, board);
            if (p.game.allSunk()) displayWinner(x);
            if (p.game.allSunk()) return;
            computerAttack(x, y);
            updateBoard(x, y);
            if (x.game.allSunk()) displayWinner(p);
        });
    });
}

const input = document.querySelector(".p-name-input");
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const newGameScreen = e.target.parentNode.parentNode;
        const playerName = e.target.value;
        const player1 = Player(playerName);
        const player2 = Player("computer");
        const p1Board = displayBoard(player1);
        const p2Board = displayBoard(player2);
        tempPlaceShips(player1, p1Board, player2, p2Board);
        ableToAttack(player2, p2Board, player1, p1Board);
        newGameScreen.remove();
    }
});
