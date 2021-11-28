import "./style.css";

const Player = require("./factories/Player");
const newGame = require("./modules/newGame");
const displayBoard = require("./modules/displayBoard");
const updateBoard = require("./modules/updateBoard");
const updateEnemyBoard = require("./modules/updateEnemyBoard");

newGame();

function computerAttack(p, board) {
    const position = Math.floor(Math.random() * 100);
    if (p.game.board[position] === "o" || p.game.board[position] === "#") {
        p.game.recieveAttack(position);
        return position;
    }
    computerAttack(p, board);
    return position;
}

function ableToAttack(p, board, x, y) {
    const squares = board.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            const { index } = e.target.dataset;
            if (p.game.board[index] === "M" || p.game.board[index] === "x") return;
            p.game.recieveAttack(index);
            updateEnemyBoard(p, board);
            computerAttack(x, y);
            updateEnemyBoard(x, y);
            console.log(p);
        });
    });
}

function tempPlaceShips(p1, p1Board, p2, p2Board) {
    p1.game.place(p1.carrier, 0);
    p1.game.place(p1.battleship, 23);
    p1.game.place(p1.cruiser, 57);
    p1.game.place(p1.submarine, 85);
    p1.game.place(p1.destroyer, 61);
    updateBoard(p1, p1Board);

    p2.game.place(p2.carrier, 0);
    p2.game.place(p2.battleship, 22);
    p2.game.place(p2.cruiser, 27);
    p2.game.place(p2.submarine, 45);
    p2.game.place(p2.destroyer, 70);
    updateBoard(p2, p2Board);
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
