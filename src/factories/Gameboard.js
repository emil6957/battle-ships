/* eslint-disable no-lonely-if */
function Gameboard() {
    const board = [
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ];

    const ships = [];

    const place = (ship, position, isVertical = false) => {
        for (let i = 0; ship.length > i; i++) {
            if (isVertical) {
                board[position + i * 10] = "o";
            } else {
                board[position + i] = "o";
            }
        }
        ships.push({ ship, position, isVertical });
    };

    const shipSunk = (ship) => {
        for (let i = 0; i < ship.ship.length; i++) {
            if (ship.isVertical) {
                board[ship.position + (i * 10)] = "X";
            } else {
                board[ship.position + i] = "X";
            }
        }
    };

    const recieveAttack = (position) => {
        if (board[position] === "x" || board[position] === "M" || board[position] === "X") return;
        if (board[position] === "o") {
            board[position] = "x";
            ships.forEach((ship) => {
                for (let i = 0; i < ship.ship.length; i++) {
                    if (ship.isVertical) {
                        if (position === ship.position + (i * 10)) {
                            ship.ship.hit(i);
                            if (ship.ship.isSunk()) shipSunk(ship);
                        }
                    } else {
                        if (position === ship.position + i) {
                            ship.ship.hit(i);
                            if (ship.ship.isSunk()) shipSunk(ship);
                        }
                    }
                }
            });
        } else {
            board[position] = "M";
        }
    };

    const allSunk = () => ships.every((ship) => ship.ship.isSunk());

    return {
        board,
        ships,
        place,
        recieveAttack,
        allSunk,
    };
}

module.exports = Gameboard;
