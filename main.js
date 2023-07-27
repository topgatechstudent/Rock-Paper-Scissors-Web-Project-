let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissors");
function gameHandler() {
    const computerOptions = ["rock", "paper", "scissors"];
    const playerOptions = [rockButton, paperButton, scissorButton];

    playerOptions.forEach(option => option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerNumber];
        winnerCalculator(option.value, computerChoice, option);
        disableAllButtons();
    }));
}
//function that disables all buttons after one is clicked
function disableAllButtons() {
    document.getElementById("rock").disabled = 'true';
    document.getElementById("paper").disabled = 'true';
    document.getElementById("scissors").disabled = 'true';
}

function animationHandlerTie(button) {
    const decisionDiv = document.createElement("div");
    const resetButton = document.createElement("button");
    decisionDiv.textContent = "You Tied!";
    resetButton.textContent = "Play Again.";
    resetButton.id = "resetButton";
    decisionDiv.appendChild(resetButton);
    button.classList.remove("hover");
    button.classList.add("tie");
    setTimeout(function () {
        button.replaceWith(decisionDiv);
    }, 600);
    resetButton.addEventListener("click", function () {
        window.location.reload();
    })
}

function animationHandler(winner, loser, decision) {
    const decisionDiv = document.createElement("div");
    const resetButton = document.createElement("button");
    decisionDiv.textContent = decision;
    resetButton.textContent = "Play Again.";
    resetButton.id = "resetButton";
    decisionDiv.appendChild(resetButton);
    winner.classList.remove("hover");
    loser.classList.remove("hover");
    winner.classList.add("bounce");
    loser.classList.add("bounce");
    setTimeout(function () {
        winner.classList.remove("bounce");
        loser.classList.remove("bounce");
        loser.classList.add("lose");
        setTimeout(function () {
            winner.classList.add("hover");
            loser.replaceWith(decisionDiv);
        }, 600);
    }, 1800);
    resetButton.addEventListener("click", function () {
        window.location.reload();
    })
}

function winnerCalculator(playerChoice, computerChoice, buttonClicked) {
    if (playerChoice == computerChoice) {
        animationHandlerTie(buttonClicked);
    } else if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            animationHandler(paperButton, rockButton, "You Lose!");
        } else {
            animationHandler(rockButton, scissorButton, "You Win!");
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            animationHandler(scissorButton, paperButton, "You Lose!");
        } else {
            animationHandler(paperButton, rockButton, "You Win!");
        }
    } else {
        if (computerChoice == "rock") {
            animationHandler(rockButton, scissorButton, "You Lose!");
        } else {
            animationHandler(scissorButton, paperButton, "You Win!");
        }
    }
}

gameHandler();