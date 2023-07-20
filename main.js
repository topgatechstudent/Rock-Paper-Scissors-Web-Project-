function gameHandler() {
    let rockButton = document.getElementById("rock");
    let paperButton = document.getElementById("paper");
    let scissorButton = document.getElementById("scissors");
    const computerOptions = ["rock", "paper", "scissors"];
    const playerOptions = [rockButton, paperButton, scissorButton];

    playerOptions.forEach(option => option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerNumber];
        winnerCalculator(option.innerText, computerChoice);
    }));

}

function winnerCalculator(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert("Tie");
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            alert("You Lose");
        } else {
            alert("You Win");
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            alert("You Lose");
        } else {
            alert("You Win");
        }
    } else {
        if (computerChoice == "rock") {
            alert("You Lose");
        } else {
            alert("You Win");
        }
    }
}

gameHandler();