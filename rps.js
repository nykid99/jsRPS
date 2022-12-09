var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var ScissorsBtn = document.getElementById("scissors");
const playerScore = document.getElementById("playerScore");
const ComputerScore = document.getElementById("computerScore");
const displayScreen = document.getElementById("screen");
var retryScreen = document.getElementById("retry");

let player;
let computer;
let result;
retryScreen.style.display = 'none';
const choiceBtns = document.querySelectorAll(".boxes");
const retryBtns = document.querySelectorAll(".retry")

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;

    }
}
function disableButtons(){
    disable(rockBtn);
    disable(ScissorsBtn);
    disable(paperBtn);
}
function enableButtons(){
    enable(rockBtn);
    enable(ScissorsBtn);
    enable(paperBtn);
}

function disable(x){
    x.disabled = true;
    
}

function enable(x){
    x.disabled = false;
}



function checkWinner(){
    if(player == computer){
        return 2;
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? 1 : 0

    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? 1 : 0
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? 1 : 0
    }
}

let x = true;
choiceBtns.forEach(button => button.addEventListener("click", () =>{
    player = button.textContent;
    retryScreen.style.display = 'none';
    
    computerTurn();
    if(button.textContent == "Retry?"){
        ComputerScore.textContent =0;
        playerScore.textContent = 0;
        displayScreen.textContent = "";
        
        enable(rockBtn);
        enable(paperBtn);
        enable(ScissorsBtn);

    }

    else if(checkWinner() == 0){
        displayScreen.textContent = "Computer Won";
        let currentScore = parseInt(ComputerScore.textContent);
        ComputerScore.textContent = currentScore + 1;
        if(currentScore + 1  == 5){
            displayScreen.textContent = "SKYNET WINS";
            
            retryScreen.style.display = null;
            disable(rockBtn);
            disable(ScissorsBtn);
            disable(paperBtn);


            // ComputerScore.textContent = currentScore + 1;
        }
    
    }

    
    else if(checkWinner() == 1){
        displayScreen.textContent = "Player Won";
        let currentScore = parseInt(playerScore.textContent);
        playerScore.textContent = currentScore + 1;
        if(currentScore + 1  == 5){
            displayScreen.textContent = "Dodge This";
            retryScreen.style.display = null;
            disable(rockBtn);
            disable(ScissorsBtn);
            disable(paperBtn);


        }
    }
    else if(checkWinner() == 2){
        displayScreen.textContent = "It's a draw!";
        
    }


}))


