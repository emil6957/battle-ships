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

    const place = (ship, position) => {
        for (let i = 0; ship.length > i; i++) {
            board[position + i] = "o";
        }
        ships.push({ ship, position });
    };

    const recieveAttack = (position) => {
        if (board[position] === "x" || board[position] === "M") return;
        if (board[position] === "o") {
            board[position] = "x";
            ships.forEach((ship) => {
                switch (ship.position) {
                    case position:
                        ship.ship.hit(0);
                        break;
                    case position - 1:
                        ship.ship.hit(1);
                        break;
                    case position - 2:
                        ship.ship.hit(2);
                        break;
                    case position - 3:
                        ship.ship.hit(3);
                        break;
                    case position - 4:
                        ship.ship.hit(4);
                        break;
                    default:
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
