/***************************************************************************************
 * Name: Stephanie Bernades                                                            *
 * Code purpose: Generate a random number from 0 to the entered number as a limit.     *
 *              Then it is going to ask the user for a number higher or lower to the   * 
 *              random number until it is guessed.                                     *
 *              Guess can quit any time.                                               *
 *              When guessed or quitting it will say the number of attempts made.      *
 *Date: September 5, 2021                                                              */



//parseInt converts whatever is entered into an integer or NAN
//promt generates the user for the numbers 


//Asks for the maximun number to limit to generate a random number in that range
let maximum = parseInt(prompt("Enter the maximum number!"));


//Validate the number entered all the times 
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}


//Math.floor is going to return the largest integer less than or equal to a given number 
//this case the number is maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess"));
let attempts = 1;

//Checks if enetered number is equals to generated number
while (parseInt(guess) != targetNum) {

    //loop to check if the enter value is not q that quits the program 
    if (guess === 'q')
        break;
    attempts++;

    //if the guessed number is greater than the generated random number 
    if (guess > targetNum) {
        guess = (prompt("Too high! Enter a new guess:"));
    }
    //if the guessed number is lower than the generated random number 
    if (guess < targetNum) {
        guess = (prompt("Too low! Enter a new guess:"));
    }
}

//option for when user decides to quit
if (guess === 'q') {
    console.log("ok, you quit")
} else {
    //message to display when the number is guessed
    console.log(`YOU GOT IT! It took you ${attempts} guesses`)
}