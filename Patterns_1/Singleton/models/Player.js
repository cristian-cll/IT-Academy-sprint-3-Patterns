class Player  {

    constructor(name) {
        this.name = name
        this.scores = 0
        console.log(`${this.name} player has been created!`);
    }

    getName(){
        return this.name;
    }

    win(scores) {
        this.scores += scores;
        console.log(`${this.name} player has won ${scores} of score.`);
    }

    lose(scores) {
        this.scores -= scores;
        console.log(`${this.name} player has lost ${scores} of score.`);
    }
}



module.exports = Player;
