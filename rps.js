function getComputerChoice(){
    list = ['Rock', 'Scissors', 'Papers']
    var randoNum = Math.floor(Math.random() * (2 - 0 + 1) + 0)
    return list[randoNum]
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == 'Rock'){
        switch (computerChoice) {
            case 'Scissors':
                console.log("Player Won")
                break;
            case 'Rock':
                console.log("It's a draw")
                break;
            case 'Papers':
                console.log("Computer Won")
                break;
            default:
                break;
        }
    }
    else if(playerChoice == 'Scissors'){
        switch (computerChoice) {
            case 'Scissors':
                console.log("It's a draw")
                break;
            case 'Rock':
                console.log("Computer Won")
                break;
            case 'Papers':
                console.log("Player Won")
                break;
            default:
                break;
        }
    }
    else if(playerChoice == 'Papers'){
        switch (computerChoice) {
            case 'Scissors':
                console.log("Computer Won")
                break;
            case 'Rock':
                console.log("Player Won")
                break;
            case 'Papers':
                console.log("It's a draw")
                break;
            default:
                break;
        }

    }
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice()



console.log("Player:" + playerSelection)
console.log("Computer:" + computerSelection)
playRound(playerSelection, computerSelection)