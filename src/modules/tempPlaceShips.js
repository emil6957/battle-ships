/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
const updateBoard = require("./updateBoard");
// const updateEnemyBoard = require("./updateEnemyBoard");

function randomPos(p, ship) {
    const random = Math.floor(Math.random() * 100);
    const isVertical = Math.floor(Math.random() * 2);
    if (isVertical) {
        for (let i = 0; i < ship.length; i++) {
            if (random >= 100 - i * 10 || p.game.board[random + i * 10] === "o") {
                randomPos(p, ship);
                return;
            }
        }
    } else {
        for (let i = 1; i < ship.length; i++) {
            if ((random + i) % 10 === 0 || p.game.board[random + i - 1] === "o") {
                randomPos(p, ship);
                return;
            }
        }
    }
    p.game.place(ship, random, isVertical);
}

function placeRandom(p) {
    randomPos(p, p.carrier);
    randomPos(p, p.battleship);
    randomPos(p, p.cruiser);
    randomPos(p, p.submarine);
    randomPos(p, p.destroyer);
}

function pickPos(p, board, ship) {
    let x;
    let y;
    let vertical;

        while (isNaN(vertical) || vertical > 1 || vertical < 0) {
            vertical = prompt("Do you want your ship placed vertically 1 for yes 0 for no");
            vertical = parseInt(vertical, 10);
            if (isNaN(vertical) || vertical > 1 || vertical < 0) alert("INVALID INPUT");
        }

        while (isNaN(x) || x < 1 || x > 10) {
            x = prompt("Where do you want to place your ship on the X axis 1-10");
            x = parseInt(x, 10);
            if (isNaN(x) || x < 1 || x > 10) alert("INVALID INPUT");
        }

        while (isNaN(y) || y < 1 || y > 10) {
            y = prompt("Where do you want to place your ship on the Y axis 1-10");
            y = parseInt(y, 10);
            if (isNaN(y) || y < 1 || y > 10) alert("INVALID INPUT");
        }

    const position = (x - 1) + ((y - 1) * 10);
    if (vertical) {
        for (let i = 0; i < ship.length; i++) {
            if (position >= 100 - i * 10 || p.game.board[position + i * 10] === "o") {
                alert("INVALID POSITION");
                pickPos(p, board, ship);
                return;
            }
        }
    } else {
        for (let i = 1; i < ship.length; i++) {
            if ((position + i) % 10 === 0 || p.game.board[position + i - 1] === "o") {
                alert("INVALID POSITION");
                pickPos(p, board, ship);
                return;
            }
        }
    }
    p.game.place(ship, position, vertical);
    updateBoard(p, board);
}

function tempPlaceShips(p1, p1Board, p2, p2Board) {
    setTimeout(() => {
        pickPos(p1, p1Board, p1.carrier);
    }, 100);
    setTimeout(() => {
        pickPos(p1, p1Board, p1.battleship);
    }, 100);
    setTimeout(() => {
        pickPos(p1, p1Board, p1.cruiser);
    }, 100);
    setTimeout(() => {
        pickPos(p1, p1Board, p1.submarine);
    }, 100);
    setTimeout(() => {
        pickPos(p1, p1Board, p1.destroyer);
    }, 100);

    setTimeout(() => {
        placeRandom(p2);
        updateBoard(p2, p2Board);
    }, 100);
}

module.exports = tempPlaceShips;
