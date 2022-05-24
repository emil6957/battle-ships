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
