var letter = function(letter, isGuessed){
    this.letter = letter;
    this.isGuessed = isGuessed;

    this.testGuessed = function(){
        if (this.isGuessed) {
            return this.letter;
        }
        return "_";
    }
    this.guessTester = function(guess){
        if (guess === this.letter || this.isGuessed){
            this.isGuessed = true
        }
        else{
            this.isGuessed = false;
        }
        return this.testGuessed();
    }
}



module.exports = letter