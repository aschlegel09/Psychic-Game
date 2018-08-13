// Pick a random word
// 
// While the word has not been guessed {
// Show the player their current progress
// Get a guess from the player
// If the player wants to quit the game {
// Quit the game
// }
// Else If the guess is not a single letter {
// Tell the player to pick a single letter
// }
// Else {
// If the guess is in the word {
// Update the player's progress with the guess
// }
// }
// }
// Congratulate the player on guessing the word

var words = [
    "jack sparrow",
    "han solo",
    "clark kent",
    "james bond",
    "luke skywalker",
    "marty mcfly",
    "indiana jones",
    "ferris bueller",
    "john mcclane",
    "rocky balboa",
    "forrest gump",
    "aragorn",
    "neo",
    "yoda",
    "obi-wan kenobi",
    "woody",
    "anakin skywalker",
    "ace ventura",
    "kevin mccallister",
    "maximus",
    "jason bourne",
    "terminator",
    "ethan hunt",
    "tony montana",
    "donnie darko",
    "captain kirk",
    "peter parker",
    "tony stark",
    "shrek",
    "elle woods",
    "bruce wayne",
    "sweeney todd",
    "benjamin button",
    "napoleon dynamite",
    "dory",
    "harry potter",
    "gandalf",
    "mclovin",
    "wolverine",
    "captain america",
    "miranda priestly",
    "derek zoolander",
    "ron burgundy",
    "borat",
]

var word = words[Math.floor(Math.random() * words.length)];


var userGuess = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];


var moviePros = {
  //keys are strings; need quotes with spaces
  "real name": "Gandalf",
  "age (est)": 11000,
  race: "Maia",
  haveRetirementPlan: true,
  aliases: [
    "Greyhame",
    "Stormcrow",
    "Mithrandir",
    "Gandalf the Grey",
    "Gandalf the White"
  ]
};

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var guessAmt = 0;
var lettersUsed = 0;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

    if (guess = userGuess) {
            var guess = prompt("What's your guess?");
    console.log(guess);

}}


  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//   if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
//     if (userGuess === "r" && computerGuess === "s") {
//       wins++;
//     } else if (userGuess === "r" && computerGuess === "p") {
//       losses++;
//     } else if (userGuess === "s" && computerGuess === "r") {
//       losses++;
//     } else if (userGuess === "s" && computerGuess === "p") {
//       wins++;
//     } else if (userGuess === "p" && computerGuess === "r") {
//       wins++;
//     } else if (userGuess === "p" && computerGuess === "s") {
//       losses++;
//     } else if (userGuess === computerGuess) {
//       ties++;
//     }

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
    // var html =
    //   "<p>You chose: " +
    //   userGuess +
    //   "</p>" +
    //   "<p>wins: " +
    //   wins +
    //   "</p>" +
    //   "<p>losses: " +
    //   losses +
    //   "</p>" +
    //   "<p>ties: " +
    //   ties +
    //   "</p>";

    // Set the inner HTML contents of the #game div to our html string
//     document.querySelector("#game").innerHTML = html;
//   }

