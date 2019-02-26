var letter = require("./Letter");

let word = function (string) {
    this.correctWord = string;
    this.currentGuess = []
    this.correctWordArray = []
    this.correctLetters = 0;
    this.incorrectLetters = 0;
    this.buildWordArray = function(){
        for (i in this.correctWord) {
            this.correctWordArray.push(new letter(this.correctWord[i], false));
            this.currentGuess.push("_ ");
        }
    }
    this.guess = function(guess){
        let tempCountCorrect = 0;
        for (i in this.correctWordArray){
            this.currentGuess[i] = this.correctWordArray[i].guessTester(guess) + " ";
            if(this.correctWordArray[i].isGuessed){
                tempCountCorrect++;
            }
        }
        if(this.correctLetters != tempCountCorrect){
            this.incorrectLetters++;
        }
        this.correctLetters = tempCountCorrect;
        console.log(this.currentGuess);
    }
}
// let test = new word("poop");
// test.buildWordArray();
// test.guess("o");

module.exports = word;