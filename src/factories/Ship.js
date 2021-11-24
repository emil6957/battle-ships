function Ship(length) {
    const hitPositions = [];
    for (let i = 0; length > i; i++) {
        hitPositions.push("o");
    }
    const hit = (position) => { hitPositions[position] = "x"; };

    const isSunk = () => hitPositions.every((position) => position === "x");

    return {
        length,
        hitPositions,
        hit,
        isSunk,
    };
}

module.exports = Ship;
