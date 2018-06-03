// variable containing the array of letter for the game to choose from
const LETTER_ARRAY = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variable holding the current game's winning letter
var winningLetter;

//moved into a function
function newWinningLetterFun() {
    // variable holding the randomly chosen number in range 0 - 25
    var randNumber = Math.floor(Math.random() * 26);

    // variable holding the game's chosen winning letter
    return winningLetter = LETTER_ARRAY[randNumber];
};
// variable holding remaining player guesses
var defaultRemainingGuesses = 10;
var remainingGuesses = 10;

// variable holding current number of player wins
var playerTotalWins = 0;

// variable holding current number of player losses
var playerTotalLosses = 0;

// variable containing the aaray of letters the player has guessed
var playerGuesses = [];

var main = document.getElementById("gameBody");

main.onload = initLayout();

// function initializing the game
function initLayout() {
    main.setAttribute("onKeyUp", "guess()");
    var idLosses = document.getElementById("playerLosses");

    var idRemainingPlayerGuesses = document.getElementById("remainingPlayerGuesses");

    var idCurrentGuesses = document.getElementById("playerCurrentGameGuesses");

    var idWins = document.getElementById("playerWins");
    var idPlayWin2 = document.getElementById("playerWins2");
    idPlayWin2.textContent = "Wins: " + 0;

    idLosses.textContent = "Losses: " + 0;

    idRemainingPlayerGuesses.textContent = "Guesses Left: " + 10;

    idCurrentGuesses.textContent = "Your Guesses So Far: ";

    newWinningLetterFun();


    var x = "";
    key = new KeyboardEvent("key");

    // event listener for key presses
    document.addEventListener("keyup", (event) => {
        const keyName = event.key;

        function correctGuessFun() {
            alert("You correctly guessed the letter, you win this round");
            playerTotalWins++;
            idPlayWin2.textContent = "Wins: " + playerTotalWins;
            idLosses.textContent = "Losses: " + playerTotalLosses;
            remainingGuesses = 10;
            idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
            playerGuesses.length = 0;
            idCurrentGuesses.textContent = "Your Guesses So Far: ";
            newWinningLetterFun();
            return;
        }

        function outOfGuessesFun() {
            alert("You are out of guesse, syou lost this round");
            playerTotalLosses++;
            idPlayWin2.textContent = "Wins: " + playerTotalWins;
            idLosses.textContent = "Losses: " + playerTotalLosses;
            remainingGuesses = 10;
            idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
            playerGuesses.length = 0;
            idCurrentGuesses.textContent = "Your Guesses So Far: ";
            newWinningLetterFun();
            return;
        }
        function incorrectGuessFun() {
            idPlayWin2.textContent = "Wins: " + playerTotalWins;
            idLosses.textContent = "Losses: " + playerTotalLosses;
            idRemainingPlayerGuesses.textContent = "Guesses Left: " + remainingGuesses;
            playerGuesses.push(keyName.toString());
            idCurrentGuesses.textContent = "Your Guesses So Far: " + playerGuesses.toString();
            return;
        }
        var correctGuess = false;
        var tempIncorrectGuessFunRan = false;

        if (keyName == winningLetter) {
            correctGuess = true;
            routeFun();
        }
        else {
            switch (keyName) {
                case "a":
                case "b":
                case "c":
                case "d":
                case "e":
                case "f":
                case "g":
                case "h":
                case "i":
                case "j":
                case "k":
                case "l":
                case "m":
                case "n":
                case "o":
                case "p":
                case "q":
                case "r":
                case "s":
                case "t":
                case "u":
                case "v":
                case "w":
                case "x":
                case "y":
                case "z":
                    remainingGuesses = remainingGuesses - 1;
                    if (tempIncorrectGuessFunRan == false) {
                        incorrectGuessFun();
                        tempIncorrectGuessFunRan = true;
                    }
                    routeFun();
                    break;
                default:
                    alert("You pressed an invalid key.  Please press one of the letter keys");
                    break;
            }
        }

        function routeFun() {
            if (remainingGuesses > 0) {
                if (correctGuess == true) {
                    correctGuessFun();
                }
                else {
                    if (tempIncorrectGuessFunRan == false) {
                        incorrectGuessFun();
                        tempIncorrectGuessFunRan = true;
                    }
                }
            }
            else {
                if (correctGuess == true) {
                    correctGuessFun();
                }
                else {
                    outOfGuessesFun();
                }
            }
        };
        tempIncorrectGuessFunRan = false;
    }, false);
}