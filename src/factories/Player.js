const Gameboard = require("./Gameboard");
const Ship = require("./Ship");

function Player(name) {
    const carrier = Ship(5);
    const battleship = Ship(4);
    const cruiser = Ship(3);
    const submarine = Ship(3);
    const destroyer = Ship(2);

    const game = Gameboard();
    const { board } = game;

    return {
        name,
        game,
        carrier,
        battleship,
        cruiser,
        submarine,
        destroyer,
        board,
    };
}

module.exports = Player;
