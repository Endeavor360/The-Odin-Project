const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    return array[index];
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection != computerSelection) {
        if (
            (playerSelection == array[0] && computerSelection == array[1]) ||
            (playerSelection == array[2] && computerSelection == array[0]) ||
            (playerSelection == array[1] && computerSelection == array[2])
        ) {
            return "Computer";
        } else {
            return "Player";
        }
    } else {
        return "Draw";
    }
}

const userPoints = document.querySelector("#user-points");
const compPoints = document.querySelector("#comp-points");

const statusDisplay = document.querySelector(".status-display");

const divs = document.querySelectorAll(".object");

let shouldProceed = true; //used to make the .objct divs irresponisve when the game is over

let playerSelection;
let computerSelection;
let roundStatus;

divs.forEach((div) => {
    div.addEventListener("click", handleClick);
});

function handleClick(e) {
    if (shouldProceed == true) {
        playerSelection = e.currentTarget.firstElementChild.textContent;
        computerSelection = getComputerChoice();
        roundStatus = oneRound(playerSelection, computerSelection);

        if (roundStatus == "Draw") {
            statusDisplay.textContent = `Oh no! Both selected "${playerSelection}"! So it's Draw...`;
        } else if (roundStatus == "Player") {
            statusDisplay.textContent = `You Won! Your "${playerSelection}" beats computer's "${computerSelection}"`;
            userPoints.textContent = +userPoints.textContent + 1;
        } else {
            statusDisplay.textContent = `You lost! Computer's "${computerSelection}" beats your "${playerSelection}"`;
            compPoints.textContent = +compPoints.textContent + 1;
        }

        if (+userPoints.textContent == 5) {
            finalMessageDisplayer("user");
        } else if (+compPoints.textContent == 5) {
            finalMessageDisplayer("computer");
        }
    }
}

const winMessage = document.querySelector(".winMsg");
const replayBtn = document.querySelector(".replayBtn");

function finalMessageDisplayer(winner) {
    winMessage.style.display = "flex";
    winMessage.firstElementChild.textContent = winner == "user" ? "You won!" : "You lost";
    shouldProceed = false;
}

replayBtn.addEventListener("click", (e) => {
    reset();
    winMessage.style.display = "none";
});

function reset() {
    statusDisplay.textContent = "";
    userPoints.textContent = 0;
    compPoints.textContent = 0;
    shouldProceed = true;
}

//Use the below code to understand MutatioonObserver again

// const observerUser = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.target.textContent == 5){
//             alert("You Won")
//             reset()
//         }
//     });
// });

// const observerComputer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         if (mutation.target.textContent == 5){
//             alert("Computer Won")
//             reset()
//         }
//     });
// });

// observerUser.observe(userPoints, {
//     childList: true
// })

// observerComputer.observe(compPoints, {
//     childList: true
// })
