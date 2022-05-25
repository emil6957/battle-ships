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

function sleep(delay) {
    // eslint-disable-next-line no-promise-executor-return
    return new Promise((resolve) => setTimeout(resolve, delay));
}

function ableToAttack(p1, p1Board, p2, p2Board) {
    let p2Turn = false;
    const squares = p2Board.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", async (e) => {
            if (p2.game.allSunk() || p1.game.allSunk()) return;
            if (p2Turn) return;
            const { index } = e.target.dataset;
            const position = parseInt(index, 10);
            if (p2.game.board[position] === "M" || p2.game.board[position] === "x" || p2.game.board[position] === "X") return;
            p2.game.recieveAttack(position);
            updateEnemyBoard(p2, p2Board);
            if (p2.game.allSunk()) displayWinner(p1);
            if (p2.game.allSunk()) return;
            if (p2.game.board[position] === "x" || p2.game.board[position] === "X") return;
            p2Turn = true;
            await sleep(500);
            let compPos = computerAttack(p1, p1Board);
            updateBoard(p1, p1Board);
            while (p1.game.board[compPos] === "x" || p1.game.board[compPos] === "X") {
                // eslint-disable-next-line no-await-in-loop
                await sleep(500);
                compPos = computerAttack(p1, p1Board);
                updateBoard(p1, p1Board);
            }
            if (p1.game.board[compPos] === "M") p2Turn = false;
            if (p1.game.allSunk()) displayWinner(p2);
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
        newGameScreen.remove();
        tempPlaceShips(player1, p1Board, player2, p2Board);
        ableToAttack(player1, p1Board, player2, p2Board);
    }
});
