function computerAttack(p, board) {
    const position = Math.floor(Math.random() * 100);
    if (p.game.board[position] === "o" || p.game.board[position] === "#") {
        p.game.recieveAttack(position);
        return position;
    }
    computerAttack(p, board);
    return position;
}

module.exports = computerAttack;
