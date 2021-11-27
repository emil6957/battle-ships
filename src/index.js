import "./style.css";

const Player = require("./factories/Player");
const newGame = require("./modules/newGame");
const displayBoard = require("./modules/displayBoard");
const updateBoard = require("./modules/updateBoard");
const updateEnemyBoard = require("./modules/updateEnemyBoard");

newGame();

function test2(p) {
    p.game.place(p.battleship, 0);
}

function test(p) {
    console.log(p);
    displayBoard(p.game.board);
    test2(p);
    updateEnemyBoard(p);
}

function ableToAttack(p, board) {
    const squares = board.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("click", (e) => {
            console.log(square);
            const { index } = e.target.dataset;
            p.game.recieveAttack(index);
            updateEnemyBoard(p, board);
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
        player2.game.place(player2.battleship, 0);
        updateEnemyBoard(player2, p2Board);
        ableToAttack(player2, p2Board);
        newGameScreen.remove();
    }
});
