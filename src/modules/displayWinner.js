function displayWinner(p) {
    const name = p.name.toUpperCase();
    const content = document.querySelector(".content");
    const winnerText = document.createElement("h2");
    winnerText.classList.add("winner-text");
    winnerText.textContent = `${name} HAS WON!`;
    content.prepend(winnerText);
}

module.exports = displayWinner;
