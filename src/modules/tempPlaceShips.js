const updateBoard = require("./updateBoard");
// const updateEnemyBoard = require("./updateEnemyBoard");

function randomPos(p, ship) {
    const random = Math.floor(Math.random() * 100);
    console.log(`${random} ${ship.length} ${p.game.board[random]}`);
    for (let i = 1; i < ship.length; i++) {
        if ((random + i) % 10 === 0 || p.game.board[random] === "o") {
            randomPos(p, ship);
            return;
        }
    }
    p.game.place(ship, random);
}

function placeRandom(p) {
    randomPos(p, p.carrier);
    randomPos(p, p.battleship);
    randomPos(p, p.cruiser);
    randomPos(p, p.submarine);
    randomPos(p, p.destroyer);
}

function tempPlaceShips(p1, p1Board, p2, p2Board) {
    p1.game.place(p1.carrier, 0);
    p1.game.place(p1.battleship, 23);
    p1.game.place(p1.cruiser, 57);
    p1.game.place(p1.submarine, 85);
    p1.game.place(p1.destroyer, 61);
    updateBoard(p1, p1Board);

    placeRandom(p2);
    updateBoard(p2, p2Board);
}

module.exports = tempPlaceShips;
