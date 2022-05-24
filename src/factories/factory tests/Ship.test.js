/* eslint-disable no-undef */
const Ship = require("../Ship");

test("does ship accept length", () => {
    expect(Ship(4).length).toBe(4);
});

test("Does ship make hit positions array", () => {
    expect(Ship(4).hitPositions).toEqual(["o", "o", "o", "o"]);
});

test("Can ship get hit", () => {
    const smallShip = Ship(2);
    smallShip.hit(1);
    expect(smallShip.hitPositions).toEqual(["o", "x"]);
});

test("After all of ships hit position have been hit it turns all to X", () => {
    const ship = Ship(3);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.hitPositions).toEqual(["X", "X", "X"]);
});

test("Ship is sunk after all positions hit", () => {
    const ship = Ship(1);
    ship.hit(0);
    expect(ship.isSunk()).toBe(true);
});

test("ship doesnt invalidally sink", () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
});
