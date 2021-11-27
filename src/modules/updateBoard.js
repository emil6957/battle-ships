function updateBoard(p, board) {
    const squares = board.querySelectorAll(".square");
    for (let i = 0; p.game.board.length > i; i++) {
        if (p.game.board[i] === "o") {
            squares[i].classList.add("ship-square");
        }
        if (p.game.board[i] === "M") {
            squares[i].classList.add("hit-square");
        }
        if (p.game.board[i] === "x") {
            squares[i].classList.add("hit-ship-square");
        }
    }
}

module.exports = updateBoard;
