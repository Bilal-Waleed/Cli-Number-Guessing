#! /usr/bin/env node 
import inquirer from "inquirer";
// 1) user input for guessing number
// 2) computer will generate the random number 
// 3) compare user input number and computer generated number
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: `userGuessedNumber`,
        type: `number`,
        message: `Guess a number between 1-6:`,
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log(`Congratulation! You guessed the correct number.`);
}
else {
    console.log(`Opps! You guess the wrong number try again , idha hi lgy rao`);
}
