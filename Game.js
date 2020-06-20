const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    ADVENTURE: Symbol("yes"),
    KNOCK: Symbol("knock"),
    NOBEL: Symbol("Nobel"),
    OK: Symbol("ok"),
    YES: Symbol("yes"),
    EASY: Symbol("easy"),
    MOREEASY: Symbol("moreeasy"),
    MATH: Symbol("math"),
    MOREMATH: Symbol("moremath"),
    HARD: Symbol("hard"),
    HARDER: Symbol("harder"),
    END: Symbol("yes")
});
const answers = ["2,3,4"];
const answers1 = ["1000,2000,4000"];

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
                    sReply = "No Bell.that's why I knocked . I'm done with this game .Let's try something else ,if yes press ok please? ";

                    this.stateCur = GameState.OK;
                } else {
                    sReply = "would you like something else?";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.OK:
                if (sInput.toLowerCase().match("ok")) {
                    sReply = "let us try this game , I'll ask you simple math questions and count the correct answers for you .At the end I'll tell you how many times you won let us get started! are you ready?if yes type yes please ";
                    this.stateCur = GameState.YES;
                } else {
                    sReply = "would you like something else?";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.YES:
                if (sInput.toLowerCase().match("yes")) {
                    sReply = "2+2= 2,3, or 4?";

                    this.stateCur = GameState.EASY;
                } else {
                    sReply = "would you like something else";
                    this.stateCur = GameState.ADVENTURE;

                }
                break;
            case GameState.EASY:
                for (var i = 0; i < answers.length; i++) {
                    if (sInput == "4") {
                        this.nPersonwins++;
                        sReply = "you got it right! ,I know it was easy, now How about this one, What is the half of quarter of 8000?2000,1000,or 4000? ";
                        this.stateCur = GameState.MOREEASY;
                    } else {
                        sReply = "wrong  ... the correct answer is 4.  now here is a tough one,  What is the half of quarter of 8000 ? 2000,1000,or 4000? ";
                        this.stateCur = GameState.MOREEASY;

                    }
                }

                break;
            case GameState.MOREEASY:
                let j = 0;
                while (j < answers1.length) {
                    if (sInput == "1000") {
                        this.nPersonwins++;
                        sReply = "you got it right! ,I know it was easy too, now here is a tough one, What is the math symbols missing in this problem:7  3  7  3= 24?";
                        this.stateCur = GameState.MATH;
                    } else {
                        sReply = "wrong  ... the correct answer is 1000.  now here is a tough one,  What is the math symbols missing in this problem:7  3  7  3= 24? ";
                        this.stateCur = GameState.MATH;

                    }
                    j++;
                }

                break;
            case GameState.MATH:
                if (sInput == "7*((3/7)+3)") {
                    this.nPersonwins++;
                    sReply = "you got it right! ,good job!, now here is a tough one, can you solve this: 7+7/7+7*7-7 ?";
                    this.stateCur = GameState.MOREMATH;
                } else {
                    sReply = "wrong  ... the correct answer is 7*((3/7)+3).  now here is a tough one, can you solve this:7+7/7+7*7-7 ";
                    this.stateCur = GameState.MOREMATH;

                }
                break;
            case GameState.MOREMATH:
                if (sInput == "50") {
                    this.nPersonwins++;
                    sReply = "you got it right! ,good job!, now here is a another one, can you make this math problen right with only one move,8+8=91 ?";
                    this.stateCur = GameState.HARD;
                } else {
                    sReply = "No  ... the correct answer is 50.  now here is a another one, can you make this math problen right with only one move,8+8=91 ";
                    this.stateCur = GameState.HARD;

                }
                break;
            case GameState.HARD:
                if (sInput == "16=8+8") {
                    this.nPersonwins++;
                    sReply = `WOW !you are so smart !you got the  correct answer,let's try something silly ,how about change one thing to make this problem right :5+5+5+5=555`;

                    this.stateCur = GameState.HARDER;
                } else {
                    sReply = "Wrong  ... the correct answer is 16=8+8. You lost! let's try something silly ,how about change one thing to make this problem right :5+5+5+5=555";
                    this.stateCur = GameState.HARDER;

                }
                break;
            case GameState.HARDER:
                if (sInput == "545+5+5") {
                    this.nPersonwins++;
                    sReply = `WOW !you are so smart !you got the  correct answer, you won:${this.nPersonwins} times,would you like to finish this game?,if yes please type yesplease`;

                    this.stateCur = GameState.END;
                } else {
                    sReply = `Wrong  ... you have to change +  to number 4, so the correct answer is 545+5+5.Hard luck!you won:${this.nPersonwins} times, would you like to finish this game?,if yes type yes please`;
                    this.stateCur = GameState.END;

                }
                break;
            case GameState.END:
                if (sInput.toLowerCase().match("yes")) {
                    sReply = "see you soon ,Bye!";
                } else {
                    sReply = "Welcome back!";
                    this.stateCur = GameState.WELCOMING;

                }
                break;




        }


        return ([sReply]);

    }
}