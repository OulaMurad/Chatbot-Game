const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ADVENTURE: Symbol("yes"),
    KNOCK: Symbol("knock"),
    NOBEL: Symbol("Nobel"),
    OK: Symbol("ok"),
    YES: Symbol("yes"),
    MATH: Symbol("math"),
    HARD: Symbol("hard"),
    HARDER:Symbol("harder")
});

module.exports = class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
        this.nCurrent = 0;
        this.nPersonwins = 0;
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
                    this.stateCur = GameState.ADVENTURE;
                }
                break;
            case GameState.KNOCK:
                if (sInput.toLowerCase().match("who's there?")) {
                    sReply = "Nobel";
                    this.stateCur = GameState.NOBEL;
                } else {
                    sReply = " would you like something else?";
                    this.stateCur = GameState.ADVENTURE;
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
                    this.nPersonwins++;
                    sReply = "you got it right! ,I know it was easy, now here is a tough one, can you make this math problen right with only one move,8+8=91 ?";
                    this.stateCur = GameState.HARD;
                } else {
                    sReply = "wrong  ... the correct answer is 4.  now here is a tough one, can you make this math problen right with only one move,8+8=91 ";
                    this.stateCur = GameState.HARD;

                }
                break;
            case GameState.HARD:
                if (sInput == "16=8+8") {
                    this.nPersonwins++;
                    sReply = `WOW !you are so smart !you got the  correct answer,let's try something silly ,how about change on thing to make this problem right :5+5+5+5=555`;

                    this.stateCur = GameState.HARDER;
                } else {
                    sReply = "Wrong  ... the correct answer is 16=8+8. You lost! let's try something silly ,how about change on thing to make this problem right :5+5+5+5=555";
                    this.stateCur = GameState.HARDER;

                }
                break;
            case GameState.HARDER:
                if (sInput == "545+5+5") {
                    this.nPersonwins++;
                    sReply = `WOW !you are so smart !you got the  correct answer, you won:${this.nPersonwins} times`;

                    this.stateCur = GameState.WELCOMING;
                } else {
                    sReply = `Wrong  ... you have to change +  to number 4, so the correct answer is 545+5+5.Hard luck!you won:${this.nPersonwins} times`;
                    this.stateCur = GameState.ADVENTURE;

                }
                break;

        }


        return ([sReply]);

    }
}