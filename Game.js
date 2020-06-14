const GameState = Object.freeze({
    WELCOMING: Symbol("welcoming"),
    FLAT: Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast"),
    ADVENTURE: Symbol("yes"),
    KNOCK: Symbol("knock"),
    NOBEL: Symbol("Nobel"),
    OK: Symbol("ok"),
    MATH: Symbol("math")

});

module.exports = class Game {
    constructor() {
        this.stateCur = GameState.WELCOMING;
    }

    makeAMove(sInput) {
        let sReply = "";
        switch (this.stateCur) {
            case GameState.WELCOMING:
                sReply = "it's a dark and rainy night. Bang! You have a flat tire. Too bad you don't have a spare. Do you WAIT or GO to the spooky mansion for help?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if (sInput.toLowerCase().match("wait")) {
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                } else {
                    sReply = "On the door is a large knocker. Do you knock or run back to your car to wait?";
                    this.stateCur = GameState.MANSION;
                }
                break;
            case GameState.MANSION:
                if (sInput.toLowerCase().match("knock")) {
                    sReply = "The door opens and you are greeted by a hunch-back butler. He asks you to come in. Do you go in or run back to the car?"
                    this.stateCur = GameState.BUTLER;
                } else {
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.BUTLER:
                if (sInput.toLowerCase().match("run")) {
                    sReply = "The road is deserted. After 1 hour there is still no help. Do you keep Waiting or do you go to the house?";
                    this.stateCur = GameState.FLAT;

                } else {
                    sReply = "You seem to have walked in to a party. The host offers you some toast. Do you take the toast or ask to call a tow truck?";
                    this.stateCur = GameState.TOAST;

                }
                break;
            case GameState.TOAST:
                if (sInput.toLowerCase().match("toast")) {
                    sReply = "you enter a new world of adventure .would you like to play a knock knock game ! ";
                    this.stateCur = GameState.ADVENTURE;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
                break;
            case GameState.ADVENTURE:
                if (sInput.toLowerCase().match("yes")) {
                    sReply = "knock knock";
                    this.stateCur = GameState.KNOCK;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
                break;
            case GameState.KNOCK:
                if (sInput.toLowerCase().match("who's there?")) {
                    sReply = "Nobel";
                    this.stateCur = GameState.NOBEL;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                }
                break;
            case GameState.NOBEL:
                if (sInput.toLowerCase().match("nobel who?")) {
                    sReply = "No Bell.that's why I knocked . I'm done with this game .Let's try something else ,ok? ";

                    this.stateCur = GameState.OK;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.OK:
                if (sInput.toLowerCase().match("ok")) {
                    sReply = "I have a math question for you.2+2? ";

                    this.stateCur = GameState.MATH;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                    this.stateCur = GameState.FLAT;

                }
                break;
            case GameState.MATH:
                if (sInput=="4") {
                    sReply = "you have correct answer ,see you soon !";

                    this.stateCur = GameState.WELCOMING;
                } else {
                    sReply = "the phone lines are down ... Would you like some toast perhaps?";
                    this.stateCur = GameState.FLAT;

                }
                break;




        }
        return ([sReply]);
    }
}