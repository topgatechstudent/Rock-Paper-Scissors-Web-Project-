let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissors");
function gameHandler() {
    const computerOptions = ["rock", "paper", "scissors"];
    const playerOptions = [rockButton, paperButton, scissorButton];

    playerOptions.forEach(option => option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerNumber];
        winnerCalculator(option.value, computerChoice);
    }));
}

function animationHandler(winner, loser) {
    winner.classList.add("bounce");
    loser.classList.add("bounce");
    setTimeout(function () {
        winner.classList.remove("bounce");
        loser.classList.remove("bounce");
        loser.classList.add("lose");
        setTimeout(function () {
            loser.classList.remove("lose");
        }, 1000);
    }, 3000);
}

function winnerCalculator(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        alert("Tie");
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            alert("You Lose");
            animationHandler(paperButton, rockButton);
        } else {
            alert("You Win");
            animationHandler(rockButton, scissorButton);
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            alert("You Lose");
            animationHandler(scissorButton, paperButton);
        } else {
            alert("You Win");
            animationHandler(paperButton, rockButton);
        }
    } else {
        if (computerChoice == "rock") {
            alert("You Lose");
            animationHandler(rockButton, scissorButton);
        } else {
            alert("You Win");
            animationHandler(scissorButton, paperButton);
        }
    }
}

gameHandler();