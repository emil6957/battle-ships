function displayBoard(player) {
    const boardsContainer = document.querySelector(".boards-container");
    const playerBoard = player.game.board;
    const content = document.querySelector(".content");
    const boardContainer = document.createElement("div");
    const boardBorder = document.createElement("div");
    boardContainer.classList.add("board");
    let i = 0;
    for (let j = 0; j < 10; j++) {
        const borderSquare = document.createElement("div");
        borderSquare.classList.add("border-square");
        boardBorder.appendChild(borderSquare);
        boardBorder.classList.add("board-border");
    }
    playerBoard.forEach(() => {
        const square = document.createElement("div");
        square.textContent = i;
        square.classList.add("square");
        square.setAttribute("data-index", i);
        boardContainer.appendChild(square);
        i++;
    });
    boardsContainer.appendChild(boardBorder);
    boardBorder.appendChild(boardContainer);
    content.appendChild(boardsContainer);
    return boardContainer;
}

module.exports = displayBoard;
