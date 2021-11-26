function newGame() {
    const content = document.querySelector(".content");
    const newGameScreen = document.createElement("div");
    const inputDiv = document.createElement("div");
    const name = document.createElement("input");
    const label = document.createElement("label");

    newGameScreen.classList.add("new-game");
    name.type = "text";
    name.classList.add("p-name-input");
    inputDiv.classList.add("p-name-container");
    label.classList.add("p-name-label");

    label.textContent = "Player Name";

    inputDiv.appendChild(name);
    inputDiv.appendChild(label);
    newGameScreen.appendChild(inputDiv);
    content.appendChild(newGameScreen);
}

module.exports = newGame;
