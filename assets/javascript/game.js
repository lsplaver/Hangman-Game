// variable containing the array of letter for the game to choose from
const LETTER_ARRAY = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variable holding the randomly chosen number in range 0 - 25
var randNumber = Math.floor(Math.random() * 26);

// variable holding the game's chosen winning letter
var winningLetter = letterArray[randNumber];

// variable holding remaining player guesses
var remainingGuesses = 10;

// variable holding current number of player wins
var playerTotalWins = 0;

// variable holding current number of player losses
var playerTotalLosses = 0;

// variable containing the aaray of letters the player has guessed
var playerGuesses = [];

// sets the playerGuesses to length of 10
playerGuesses.length(10);

