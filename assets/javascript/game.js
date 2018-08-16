window.onload = function() {
  var alphabet = [
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
  // Pick a random word
  //an array of words to start the game, lowercase
  var wordList = [
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
    "borat"
  ];
  var guess; //user guess defined
  var correctLetter = []; //stores correctly guessed letters
  var guesses = []; //stores guessed letters
  var counter; //counts correct letters
  var lives = 9; //counts user lives
  console.log(lives + " lives");
  document.getElementById("lives").innerHTML = "Lives: " + lives;
  var space; //for number of spaces in word '-'
  // pick a random word from the chosen array, name new var
  var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(randomWord);

  // MAIN PROCESS
  // ==============================================================================

  // Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
  // document.onkeyup = function(event) {
  //   var letter = event.key.toLowerCase();
  //   // Determines which key was pressed.
  //   for (var n = 0; n < alphabet.length; n++) {
  //     // console.log("You have used " + lives);
  //     // Captures the key press, converts it to lowercase, and saves it to a variable.

  //     // If the letter is h, run the following functions/methods.
  //     if (letter === alphabet[n]) {
  //       console.log(letter);
  //     }

  var userText = document.getElementById("guess");

  // Next, we give JavaScript a function to execute when onkeyup event fires.
  document.onkeyup = function(event) {
    userText.textContent = event.key;
  };
  // car.print();

  // For Loop for alphabet
  for (var i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
  }
  console.log("---------");
  
// For Loop for wordList
for (var n = 0; n < wordList.length; n++) {
  console.log(wordList[n]);
}
console.log("---------");


  for (var s = 0; s < randomWord.length; s++) {
    correctLetter[s] = "_";
  }
  var answer = [];
     for (var i = 0; i < randomWord.length; i++) {
         answer[i] = "_";
     }

  document.getElementById("answer").innerHTML = correctLetter.join(" ");
  console.log(randomWord);
};





// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {
//   if (guess === alphabet[n]) var guess = event.key;
//   // };
// };

//keeps track of how many letters are left to guess, need to reduce by one when a player guesses correct
//  var remaining = randomWord.length;
// for (remaining())

// Get elements
// var showLives = document.getElementById("lives");
//  // Create geusses ul
//  result = function () {
//   wordHolder = document.getElementById('hold');
//   correct = document.createElement('ul');

//   for (var i = 0; i < word.length; i++) {
//     correct.setAttribute('id', 'my-word');
//     guess = document.createElement('li');
//     guess.setAttribute('class', 'guess');
//     if (word[i] === " ") {
//       guess.innerHTML = " ";
//       space = 1;
//     } else {
//       guess.innerHTML = "_";
//     }

//     guesses.push(guess);
//     // wordHolder.appendChild(correct);
//     // correct.appendChild(guess);
//   }
// }
//  // Show lives
//  comments = function () {
//   showLives.innerHTML = "You have " + lives + " lives";
//   if (lives < 1) {
//     console.log("Show Lives: " + lives)
//     showLives.innerHTML = "Game Over";
//   }
//   for (var i = 0; i < geusses.length; i++) {

//     if (counter + space === geusses.length) {
//       showLives.innerHTML = "You Win!";
//     }
//   }
// }

  //chosen word is replaced with
  //for loop variable i starts at 0 and goes up to but does not include word.length, and each time we add a new element to answer
  //when the loop is finished the answer will be the same length as the word
  
//   //
//   //function checkLetter() {
//   //  document.onkeyup = function(event) {
//   //    guess = event.key.toLowerCase();
//   //    var found = false; //lets use bool to check if a letter was found
//   //    for (i = 0; i < randomWord.length; i++) {
//   //      if (guess === randomWord[i]) {
//   //        correctLetter[i] = guess;
//   //        document.getElementById("answer").innerHTML = correctLetter.join("");
//   //        found = true;
//   //      }
//   //    }
//   //    //now all letters have been checked, was any found
//   //    if (found) return; //if yes return
//   //
//   //    //wrong, lets also see if
//   //    //it's not already logged, if not add it
//   //    //you could also then use  wrongLetters.length
//   //    //for working out if gueses area all used up.
//   //    if (wrongLetters.indexOf(guess) < 0) {
//   //      wrongLetters.push(guess);
//   //      document.getElementById("guess").innerHTML = wrongLetters.join("");
//   //    }
//   //  }
//   //}
//   //
//   //start();
//   //checkLetter();
//   //

//   // // While the word has not been guessed {
//   // //while loop continues loop as long as remaining variable is greater than 0
//   // //needs to update for every correct guess, loop ends when it equals 0
//   // while (remaining > 0) {
//   // // Game code goes here
//   // // Show the player their current progress
//   // // Take input from the player
//   // // Update answer and remaining for every correct guess
//   //    var guess = function();
//   // // Get a guess from the player
//   //        if (guess === null) {// If the player wants to quit the game {
//   //            break;//immediately stops loop, even while condition is true
//        } else if (randomWord.length !== 1) {// Else If the guess is not a single letter {
//            alert("Please enter a single letter.");
// // Tell the player to pick a single letter
//        } else {
// // If the guess is in the word {
// 			if (guess === randomWord[i]){

// 			}
// }// Update the player's progress with the guess
// }

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
//var wins = 0;
//var guessAmt = 0;
//var lettersUsed = 0;
//

//
//    if (guess = userGuess) {
//            var guess = prompt("What's your guess?");
//    console.log(guess);
//
//}};

// This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
//   if (guess === alphabet[i]) {
//     if (guess === "r" && computerGuess === "s") {
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
// var html = html(
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
//   //   "</p>");

//   // Set the inner HTML contents of the #game div to our html string
//   //     document.querySelector("#game").innerHTML = html;
//   //   }
// };
