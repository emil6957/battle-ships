/* eslint-disable no-undef */
const Ship = require("../Ship");

test("Does Ship accept a length", () => {
    expect(Ship(4).length).toBe(4);
});

test("Does ship make hit positions array", () => {
    expect(Ship(4).hitPositions).toEqual(["o", "o", "o", "o"]);
});

test("Can ship get hit", () => {
    const smallShip = Ship(2);
    smallShip.hit(2);
    expect(smallShip.hitPositions).toEqual(["o", "x"]);
});

test("Ship can sink", () => {
    const ship = Ship(1);
    ship.hit(1);
    expect(ship.isSunk()).toBe(true);
});

test("ship doesnt invalidally sink", () => {
    const ship = Ship(1);
    expect(ship.isSunk()).toBe(false);
});
