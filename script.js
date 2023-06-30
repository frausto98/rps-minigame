// As a user, I want to play Rock, Paper, Scissors against an automated opponent.


// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.


// As a user, I expect the computer to choose R, P, or S in return.


// As a user, I want the option to play again whether I win or lose.


// As a user, I want to see my total wins, ties, and losses after each round.

console.log("meow");

//what do we need to do
    //start game
    //prompt the user to enter an r, p, or s
    //generate computer choice
    //compare user and computer input
    //display outcome
    //show stats
    //prompt replay
//what values do we need to track
    //user input
        //defined where: locally in prompt
    //an array of: r, p, and s

    //or variable of r, p, and s
    //stats
        //wins, losses, and ties

var winsLossTies =
function startGame() {
    console.log("hello");
    var userInput = prompt("Enter R, P, or S")
    generateChoice();
}

function generateChoice() {
    var choiceArr = ["R","P","S"]
    var randomIndex = Math.floor(Math.random()*3);
    var computerChoice = choiceArr[randomIndex];
    console.log(computerChoice);

}

function compareInputs(userInput, computerChoice) {
    if (userInput === computerChoice){

    }

}


startGame();

