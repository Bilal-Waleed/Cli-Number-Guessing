#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// 1) user input for guessing number
// 2) computer will generate the random number 
// 3) compare user input number and computer generated number
//------------------------------------ASKING USER NAME -----------------------------
const askUserName = async () => {
    const userName_ans = await inquirer.prompt({
        name: "user_name",
        type: "input",
        message: chalk.magentaBright(`\nWhat is Your Good Name: `),
        validate: (input) => {
            const trimmedInput = input.trim();
            if (trimmedInput === "") {
                return chalk.redBright("Please enter your name.");
            }
            else if (!/^[a-zA-Z]+$/.test(trimmedInput)) {
                return chalk.redBright("Please enter a valid name without numbers.");
            }
            return true;
        },
    });
    return userName_ans.user_name;
};
const userName = await askUserName();
async function guessNumberGame() {
    // Asking user name   
    //------------------------------------GAME NAME ----------------------------------
    let appName = chalk.yellow.underline(`Welcome! "${userName}" in  Number Guessing Game:`);
    console.log(`\n\t`, `\t`, `${appName} \n`);
    //----------------------------------- MAIN FUNCTION ---------------------------------
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    let guessCorrectly = false;
    for (let attempt = 1; attempt <= 5; attempt++) {
        const answer = await inquirer.prompt([
            {
                name: `userGuessedNumber`,
                type: `input`,
                message: chalk.yellowBright `Guess a number between 1-6:`,
                validate: (input) => {
                    if (input.trim() === "") {
                        return chalk.redBright("Please enter a number.");
                    }
                    if (isNaN(Number(input))) {
                        return chalk.redBright("Please enter a valid number.");
                    }
                    return true;
                },
            },
        ]);
        const userGuess = Number(answer.userGuessedNumber);
        if (userGuess === randomNumber) {
            guessCorrectly = true;
            console.log(chalk.yellow(`\n\t Congratulation! You guessed the correct number.`));
            break;
        }
        else {
            console.log(chalk.redBright(`\n\t  Opps! You guess the wrong number Try Again.....`));
        }
    }
    if (guessCorrectly) {
        console.log(chalk.yellow.underline(`\n\t Thanks for Playing a Game. Have a Nice Day!`));
    }
    else {
        // If the loop completes without the correct guess
        console.log(chalk.redBright.underline(`\n\t Sorry, you ran out of chances. The correct number was ${randomNumber}.`));
    }
    ;
    let develporName = chalk.magenta.underline ` BILAL WALEED `;
    console.log(chalk.magenta(`\n\t`, `\t`, `Developer Name: ${develporName}`));
}
guessNumberGame();
