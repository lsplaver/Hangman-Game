// variable containing the array of letter for the game to choose from
const LETTER_ARRAY = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variable holding the randomly chosen number in range 0 - 25
var randNumber = Math.floor(Math.random() * 26);

// variable holding the game's chosen winning letter
var winningLetter = LETTER_ARRAY[randNumber];

// variable holding remaining player guesses
var defaultRemainingGuesses = 10;
var remainingGuesses = 10;

// variable holding current number of player wins
var playerTotalWins = 0;

// variable holding current number of player losses
var playerTotalLosses = 0;

// variable containing the aaray of letters the player has guessed
var playerGuesses = [];

// sets the playerGuesses to length of 10
// playerGuesses.length = 10;

console.log("LETTER_ARRAY values (index: 0 - 25): " + LETTER_ARRAY.toString());

console.log("randNumber value: " + randNumber);

console.log("winningLetter value: " + winningLetter);

console.log("defaultRemainingGuesses value : " + defaultRemainingGuesses);

console.log("remainingGuesses value: " + remainingGuesses);

console.log("playerTotalWins value: " + playerTotalWins);

console.log("playerTotalLosses value: " + playerTotalLosses);

console.log("playerGuesses.length value: " + playerGuesses.length.toString());

console.log("playerGuesses array value: " + playerGuesses.toString());

var main = document.getElementById("gameBody");

main.onload = initLayout();

// function newDivFunction(var elemID, variable 

function initLayout() {
    main.setAttribute("onKeyUp", "guess()");
    var idLosses = document.getElementById("playerLosses");
    
    var idRemainingPlayerGuesses = document.getElementById("remainingPlayerGuesses");
    
    var idCurrentGuesses = document.getElementById("playerCurrentGameGuesses");

    // var newDiv = document.createElement("div")

    // main.appendChild(newDiv);

    // newDiv = document.createElement("div")
    // var x = "";
    // x = newDiv.getAttribute("id");
    // console.log("the current id value of newDiv is: " + x);
    // newDiv.setAttribute("id", "playerWins");

    // var igTies;
    // igTies = document.getElementById("playerWins");
    var idWins = document.getElementById("playerWins");
    var idPlayWin2 = document.getElementById("playerWins2");
    idPlayWin2.textContent = "Wins: " + 0;
    // idWins.textContent = "Wins: "; // + playerTotalWins.toString();

    idLosses.textContent = "Losses: " + 0; // + playerTotalLosses.toString();

    idRemainingPlayerGuesses.textContent = "Guesses Left: " + 10; // + remainingGuesses.toString();

    idCurrentGuesses.textContent = "Your Guesses So Far: "; // + playerGuesses.toString();


var x = "";
key = new KeyboardEvent("key");

// x = main.onkeyup().key();
document.addEventListener("keyup",(event) => {
    const keyName = event.key;

    // LETTER_ARRAY.forEach(keyName, LETTER_ARRAY.length, LETTER_ARRAY[]) {
    for (var x = 0; x < LETTER_ARRAY.length; x++)
        if ((keyName === LETTER_ARRAY[x].charAt()) && (keyName === winningLetter)) {
            if (remainingGuesses >= 0) {
                alert("You correctly guessed the letter, you win this round");
                playerTotalWins ++;
                idPlayWin2.textContent = "Wins: " + playerTotalWins;
                idLosses.textContent = "Losses: " + playerTotalLosses;
                remainingGuesses = 10;
                idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
                // playerGuesses.forEach(playerGuesses.length, playerGuesses[]) {
                for (var y = 0; y < playerGuesses; y++) {
                    console.log("Remaining entries in playerGuesses before shift: " + playerGuesses.toString());
                    playerGuesses.shift();
                    console.log("Remaining entries in playerGuesses after shift: " + playerGuesses.toString());
                }
                idCurrentGuesses.textContent = "Your Guesses So Far: " + playerGuesses.toString();
                return; // break;
            }
            else if ((keyName === LETTER_ARRAY[x]) && (!(keyName === winningLetter))) {
                if (remainingGuesses >= 0) {
                    idPlayWin2.textContent = "Wins: " + playerTotalWins;
                    idLosses.textContent = "Losses: " + playerTotalLosses;
                    idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
                    idCurrentGuesses.textContent = "Your Guesses So Far: " + playerGuesses.toString();
                    return; // break;
                }
                else {
                    alert("You are out of guesse, syou lost this round");
                    playerTotalLosses ++;
                    idPlayWin2.textContent = "Wins: " + playerTotalWins;
                    idLosses.textContent = "Losses: " + playerTotalLosses;
                    remainingGuesses = 10;
                    idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
                    // playerGuesses.forEach(playerGuesses.length, playerGuesses[]) {
                    for (var z = 0; 0 < playerGuesses.length; z++) {
                        console.log("Remaining entries in playerGuesses before shift: " + playerGuesses.toString());
                        playerGuesses.shift();
                        console.log("Remaining entries in playerGuesses after shift: " + playerGuesses.toString());
                    }
                    idCurrentGuesses.textContent = "Your Guesses So Far: " + playerGuesses.toString();
                    return; // break;
                }
            }
            else {
                alert("You pressed an invalid key.  Please press one of the letter keys");
                return; // break;
            }
        remainingGuesses --;
        }
    }, false);

// main.onkeyup.KeyboardEvent(key)

// main.addEventListener("keyup", function (event)) {
//     LETTER_ARRAY.forEach()
// }

// if (!(main.onkeyup == null)) {
    x = main.onclick; // .addEventListener("keyup", guess());
    guess();
// }

function guess() {
    console.log("A key was pressed!!! \nThe key pressed was: " + x);
    x = "";
}

}