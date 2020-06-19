const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ADVENTURE: Symbol("yes"),
    KNOCK: Symbol("knock"),
    NOBEL: Symbol("Nobel"),
    OK: Symbol("ok"),
    YES: Symbol("yes"),
    MATH: Symbol("math"),
    HARD: Symbol("hard")
});

module.exports = class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
        this.nCurrent = 0;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {

            case GameState.WELCOMING:

                sReply = "Hi, Would you like to play a game?";
                this.stateCur = GameState.ADVENTURE;
                break;

            case GameState.ADVENTURE:
                if (sInput.toLowerCase().match("yes")) {
                    sReply = "knock knock";
                    this.stateCur = GameState.KNOCK;
                } else {
                    sReply = "would you like something else?";
                }
                break;
            case GameState.KNOCK:
                if (sInput.toLowerCase().match("who's there?")) {
                    sReply = "Nobel";
                    this.stateCur = GameState.NOBEL;
                } else {
                    sReply = " would you like something else?";
                }
                break;
            case GameState.NOBEL:
                if (sInput.toLowerCase().match("nobel who?")) {
                    sReply = "No Bell.that's why I knocked . I'm done with this game .Let's try something else ,ok? ";

                    this.stateCur = GameState.OK;
                } else {
                    sReply = "would you like something else?";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.OK:
                if (sInput.toLowerCase().match("ok")) {
                    sReply = "let us try this game , I'll ask you simple math questions and count the correct answers for you .At the end I'll tell you how many times you won let us get started! are you ready? ";
                    this.stateCur = GameState.YES;
                } else {
                    sReply = "would you like something else?";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.YES:
                if (sInput.toLowerCase().match("yes")) {
                    sReply = "2+2?";

                    this.stateCur = GameState.MATH;
                } else {
                    sReply = "would you like something else";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.MATH:
                if (sInput == "4") {
                    sReply = "you have correct answer ,now this is the hard one can you make this math problen right ,8+8=91 ?";

                    this.stateCur = GameState.HARD;
                } else {
                    sReply = "wrong  ... the correct answer is 4. whoohoo ! I win";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.HARD:
                if (sInput == "16=8+8") {
                    sReply = "WOW !you are so smart !you have correct answer ,now this is the hard one can you make this math problen right ,8+8=91 ?";

                    this.stateCur = GameState.WELCOMING;
                } else {
                    sReply = "wrong  ... the correct answer is 16=8+8. whoohoo ! I win";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;

        }


        return ([sReply]);
    }
}