function displayBoard(player) {
    const boardsContainer = document.querySelector(".boards-container");
    const playerBoard = player.game.board;
    const content = document.querySelector(".content");
    const boardContainer = document.createElement("div");
    boardContainer.classList.add("board");
    let i = 0;
    playerBoard.forEach(() => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("data-index", i);
        boardContainer.appendChild(square);
        i++;
    });
    boardsContainer.appendChild(boardContainer);
    content.appendChild(boardsContainer);
    return boardContainer;
}

module.exports = displayBoard;
