const updateBoard = require("./updateBoard");
// const updateEnemyBoard = require("./updateEnemyBoard");

function randomPos(p, ship) {
    const random = Math.floor(Math.random() * 100);
    const isVertical = Math.floor(Math.random() * 2);
    for (let i = 1; i < ship.length; i++) {
        if ((random + i) % 10 === 0 || p.game.board[random + i - 1] === "o") {
            randomPos(p, ship);
            return;
        }
    }
    p.game.place(ship, random);
}

function placeVertical(p, ship) {
    const random = Math.floor(Math.random() * 100);
    console.log(ship);
    console.log(random);
    // const isVertical = 1;
    for (let i = 0; i < ship.length; i++) {
        if (random >= 100 - i * 10 || p.game.board[random + i * 10] === "o") {
            placeVertical(p, ship);
            return;
        }
    }
    p.game.place(ship, random, true);
}

function placeRandom(p) {
    randomPos(p, p.carrier);
    randomPos(p, p.battleship);
    randomPos(p, p.cruiser);
    placeVertical(p, p.submarine);
    placeVertical(p, p.destroyer);
    console.log(p);
}

function tempPlaceShips(p1, p1Board, p2, p2Board) {
    p1.game.place(p1.carrier, 0, true);
    p1.game.place(p1.battleship, 23);
    p1.game.place(p1.cruiser, 57);
    p1.game.place(p1.submarine, 85);
    p1.game.place(p1.destroyer, 61, true);
    updateBoard(p1, p1Board);

    placeRandom(p2);
    updateBoard(p2, p2Board);
}

module.exports = tempPlaceShips;
