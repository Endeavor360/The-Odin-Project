const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
    const index = Math.floor(Math.random()*3);
    return array[index];
}

function oneRound(playerSelection , computerSelection){
    if (playerSelection != computerSelection){
        if ( (playerSelection==array[0] && computerSelection==array[1]) || (playerSelection==array[2] && computerSelection==array[0]) || (playerSelection==array[1] && computerSelection==array[2])){
            return "Computer";
        }
        else{
            return "Player";
        }
    }
    else{
        return "Draw";
    }
}

function selections(){
    let selectionsArr = [prompt("Enter: "), getComputerChoice()];
    return selectionsArr;
}

function game(){
    let playerWins =0;
    let compWins = 0;
    let status;

    let i = 0;
    while (i < 5){
        status =oneRound(...selections());
        if (status== "Player"){
            playerWins++;
        }else if(status == "Computer"){
            compWins++;
        }else{
            i--;
        }
        i++;
    };

    return playerWins>compWins? "Player" : "Computer";
}