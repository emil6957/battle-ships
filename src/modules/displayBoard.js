function displayBoard(player) {
    const boardsContainer = document.querySelector(".boards-container");
    const playerBoard = player.game.board;
    const content = document.querySelector(".content");
    const boardContainer = document.createElement("div");
    const boardBorderHorizontal = document.createElement("div");
    const boardBorderVertical = document.createElement("div");
    const boardWrapper = document.createElement("div");
    const edgeSquare = document.createElement("div");
    edgeSquare.classList.add("border-square");
    edgeSquare.classList.add("edge");
    boardContainer.classList.add("board");
    boardWrapper.classList.add("board-wrapper");
    boardBorderHorizontal.classList.add("board-border-horizontal");
    boardBorderVertical.classList.add("board-border-vertical");
    let i = 0;
    for (let j = 1; j <= 10; j++) {
        const borderSquare = document.createElement("div");
        const borderSquare2 = document.createElement("div");
        borderSquare.classList.add("border-square");
        borderSquare2.classList.add("border-square");
        borderSquare.textContent = j;
        borderSquare2.textContent = j;
        boardBorderHorizontal.appendChild(borderSquare);
        boardBorderVertical.appendChild(borderSquare2);
    }
    playerBoard.forEach(() => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("data-index", i);
        boardContainer.appendChild(square);
        i++;
    });
    boardsContainer.appendChild(boardWrapper);
    boardWrapper.appendChild(boardBorderHorizontal);
    boardWrapper.appendChild(edgeSquare);
    boardWrapper.appendChild(boardBorderVertical);
    boardWrapper.appendChild(boardContainer);
    content.appendChild(boardsContainer);
    return boardContainer;
}

module.exports = displayBoard;
