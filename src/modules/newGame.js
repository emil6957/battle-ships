function newGame() {
    const content = document.querySelector(".content");
    // clear the previous board if there is one
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    const boardsContainer = document.createElement("div");
    const newGameScreen = document.createElement("div");
    const inputDiv = document.createElement("div");
    const name = document.createElement("input");
    const label = document.createElement("label");

    boardsContainer.classList.add("boards-container");
    newGameScreen.classList.add("new-game");
    name.type = "text";
    name.classList.add("p-name-input");
    inputDiv.classList.add("p-name-container");
    label.classList.add("p-name-label");

    name.placeholder = " ";
    label.textContent = "Player Name";

    inputDiv.appendChild(name);
    inputDiv.appendChild(label);
    newGameScreen.appendChild(inputDiv);
    content.appendChild(boardsContainer);
    content.appendChild(newGameScreen);
}

module.exports = newGame;
