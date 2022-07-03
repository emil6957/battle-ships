const newGame = require("./newGame");

function displayWinner(p) {
    const name = p.name.toUpperCase();
    const topText = document.createElement("div");
    topText.classList.add("top-text");
    const content = document.querySelector(".content");
    const winnerText = document.createElement("h2");
    winnerText.classList.add("winner-text");
    winnerText.textContent = `${name} HAS WON!`;
    const restartButton = document.createElement("button");
    restartButton.classList.add("restart-btn");
    restartButton.textContent = "Restart";
    content.prepend(topText);
    topText.append(winnerText);
    topText.append(restartButton);
    restartButton.addEventListener("click", newGame);
}

module.exports = displayWinner;
