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


let playerSelection;
let computerSelection;
let roundStatus;

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

divs.forEach((div) =>
    div.addEventListener("click", (e) => {
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

        // Delay the status update to ensure DOM has been updated
        requestAnimationFrame(() => {
            if (+userPoints.textContent == 5) {
                alert("You Won");
                reset();
                statusDisplay.textContent = ""; // Reset status display
            } else if (+compPoints.textContent == 5) {
                alert("Computer Won");
                reset();
                statusDisplay.textContent = ""; // Reset status display
            }})
    })
);

// observerUser.observe(userPoints, {
//     childList: true
// })

// observerComputer.observe(compPoints, {
//     childList: true
// })

function reset() {
    statusDisplay.textContent = "";
    userPoints.textContent = 0;
    compPoints.textContent = 0;
}
// const rockDiv = document.querySelector(".rock");
// const paperDiv = document.querySelector(".paper");
// const scissorDiv = document.querySelector(".scissor");
