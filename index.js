const inquirer = require("inquirer");
const word = require("./Word");
var possibleWords = [
    "sleep",
    "deprived"
];
let randomIndex = (Math.floor(Math.random() * possibleWords.length));
let currentWord = possibleWords[randomIndex];

let w = new word(currentWord);
w.buildWordArray();
var userGuess = function () {
        // runs inquirer for a guess
        // stored within the variable answers inside of the .then statement
        inquirer.prompt([
            {
                name: "guess",
                message: "What is your number guess?"
            }
        ]).then(function (answers) {
            w.guess(answers.guess);
            console.log("guesses left = " + (10 - w.incorrectLetters));
            console.log("correct guesses = " + w.correctLetters)
            if (w.correctLetters === currentWord.length) {
                console.log("You won!");
                return;
            }
            else if (w.incorrectLetters === 10){
                console.log("You lose!");
                return;
            }
            userGuess();
        });
}

userGuess();

