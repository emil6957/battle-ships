# battle-ships

This is a recreation of the [battleships game](https://en.wikipedia.org/wiki/Battleship_(game))

## Overview 

### The challenge

Users should be able to:

- Place their own ships on their board
- Place their ships either facing the X or Y axis
- Shoot at the computer opponent
- Recieve multiple turns if they hit a ship
- Win the game once they've sunk all the opponents ships
- Lose if all their ships have been sunk

### Screenshots

![Battle-Ships](https://user-images.githubusercontent.com/91159544/177338782-1504596b-94ba-438b-b992-ae356c15e560.png)

### Links

- Code URL: [https://github.com/emil6957/battle-ships](https://github.com/emil6957/battle-ships)
- Live site URL: [https://emil6957.github.io/battle-ships/](https://emil6957.github.io/battle-ships/)

## My process

### Built with

- HTML5
- CSS
- Flexbox
- CSS Grid
- Javascript
- Test driven development (using Jest)

### What I learned

With this project I learnt a lot about TTD (test driven development), such as why it is used and how it's implemented.
For example below is the first tests I wrote for my Ship factory function which I wrote before writing the code which passes them.

```js
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
```

This project taught me about using factory functions to be able to create several objects with similar properties such as the `hitPositions` array and functions below
but some differences such as the `hitPositions` being changed on the `length` parameter given.

```js
function Ship(length) {
    const hitPositions = [];
    for (let i = 0; length > i; i++) {
        hitPositions.push("o");
    }

    const sink = () => {
        for (let i = 0; i < hitPositions.length; i++) {
            hitPositions[i] = "X";
        }
    };

    const hit = (position) => {
        hitPositions[position] = "x";
        if (hitPositions.every((pos) => pos === "x")) {
            sink();
        }
    };

    const isSunk = () => hitPositions.every((position) => position === "X");

    return {
        length,
        hitPositions,
        hit,
        isSunk,
    };
}

module.exports = Ship;
```

I also learned about keeping functions seperate by creating different files in a modules folder which all only do one thing,
which then get imported into the main Index file.

![Capture](https://user-images.githubusercontent.com/91159544/177337080-df5d3ab8-fcf0-4c34-bd9c-163eed1a83b0.PNG)

### Useful resources

- [https://web.archive.org/web/20211123190134/http://godswillokwara.com/index.php/2016/09/09/the-importance-of-test-driven-development/](https://web.archive.org/web/20211123190134/http://godswillokwara.com/index.php/2016/09/09/the-importance-of-test-driven-development/) - This article helped me learn about what TTD is, why it's used and how it's implemented.

- [https://www.youtube.com/watch?v=pdx2HjFRaJY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr&index=3&ab_channel=FunFunFunction](https://www.youtube.com/watch?v=pdx2HjFRaJY&list=PL0zVEGEvSaeF_zoW9o66wa_UCNE3a7BEr&index=3&ab_channel=FunFunFunction) + [https://jestjs.io/docs/getting-started](https://jestjs.io/docs/getting-started) - This video and documentation showed me how to write tests in jest and how to run them.
