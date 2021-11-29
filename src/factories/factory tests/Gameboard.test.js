/* eslint-disable no-undef */
const Gameboard = require("../Gameboard");
const Ship = require("../Ship");

test("Does the gameboard return a board", () => {
    expect(Gameboard().board).toEqual([
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
    ]);
});

test("Can you place ships", () => {
    const board = Gameboard();
    const ship = Ship(3);
    board.place(ship, 12);
    expect(board.board).toEqual([
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "o", "o", "o", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ]);
});

test("Gameboard can recieve attack", () => {
    const game = Gameboard();
    const { board } = game;
    game.recieveAttack(1);
    expect(board).toEqual([
        "#", "M", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ]);
});

test("Ships can be hit on the gamboard", () => {
    const game = Gameboard();
    const { board } = game;
    const ship = Ship(2);
    game.place(ship, 32);
    game.recieveAttack(32);
    expect(board).toEqual([
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "x", "o", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ]);
});

test("Gameboard stores ships position", () => {
    const game = Gameboard();
    const bigShip = Ship(4);
    game.place(bigShip, 11);
    expect(game.ships[0].position).toEqual(11);
});

test("Hitting a ship on the gameboard also registers the hit on the ship", () => {
    const game = Gameboard();
    const { board } = game;
    const ship = Ship(3);
    game.place(ship, 32);
    game.recieveAttack(33);
    expect(board).toEqual([
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "o", "x", "o", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ]);
    expect(game.ships[0].ship.hitPositions).toEqual(["o", "x", "o"]);
});

test("Can board see if all ships have been sunk", () => {
    const game = Gameboard();
    const ship = Ship(2);
    game.place(ship, 0);
    game.recieveAttack(0);
    game.recieveAttack(1);
    expect(game.allSunk()).toBe(true);
});

test("can board see multiple ships sunk", () => {
    const game = Gameboard();
    const ship = Ship(2);
    const ship2 = Ship(2);
    const ship3 = Ship(1);
    game.place(ship, 0);
    game.place(ship2, 10);
    game.place(ship3, 4);
    game.recieveAttack(0);
    game.recieveAttack(1);
    game.recieveAttack(10);
    game.recieveAttack(11);
    game.recieveAttack(4);
    expect(game.allSunk()).toBe(true);
});

test("Can you place ships vertically", () => {
    const game = Gameboard();
    const destoyer = Ship(2);
    game.place(destoyer, 0, true);
    expect(game.board).toEqual([
        "o", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "o", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
        "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
    ]);
});
