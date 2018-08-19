window.onload = function() {
  //define all possible letters
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

  //create array of words to start the game, all lowercase, spaces with '-'
  var wordList = [
    "jacksparrow",
    "hansolo",
    "clarkkent",
    "jamesbond",
    "lukeskywalker",
    "martymcfly",
    "indianajones",
    "ferrisbueller",
    "johnmcclane",
    "rockybalboa",
    "forrestgump",
    "aragorn",
    "neo",
    "yoda",
    "obiwankenobi",
    "woody",
    "anakinskywalker",
    "aceventura",
    "kevinmccallister",
    "maximus",
    "jasonbourne",
    "terminator",
    "ethanhunt",
    "tonymontana",
    "donniedarko",
    "captainkirk",
    "peterparker",
    "tonystark",
    "shrek",
    "ellewoods",
    "brucewayne",
    "sweeneytodd",
    "benjaminbutton",
    "napoleondynamite",
    "dory",
    "harrypotter",
    "gandalf",
    "mclovin",
    "wolverine",
    "captainamerica",
    "mirandapriestly",
    "derekzoolander",
    "ronburgundy",
    "borat"
  ];

  //  var guess; //user guess defined
  var chosenWord = "";
  var correctLetter = []; //stores correctly guessed letters
  var incorrectLetters = []; //stores incorrectly guessed letters
  var blanksAndSuccesses = []; //stores right or wrong
  var blanks = 0; //counts spaces
  var lives = ""; //counts user lives
  var space = ""; //for number of spaces in word '-'NEEDS FIXING
  var wins = 0;
  var losses = 0;

  function startGame() {
    lives = 9;
    document.getElementById("readMe").innerHTML =
      "Press any key to get started!";
    blanksAndSuccesses = [];
    incorrectLetters = [];
    // pick a random word from the chosen array, name new var
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    correctLetter = chosenWord.split("");

    blanks = correctLetter.length;
    console.log(blanks);
    console.log(chosenWord);

    for (var u = 0; u < blanks; u++) {
      blanksAndSuccesses.push("_");
      chosenWord = chosenWord.replace(/\s+/g, "-").toLowerCase();
      console.log(chosenWord); //
    }
    console.log(blanksAndSuccesses);
    document.getElementById("answer").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById(
      "incorrectLetters"
    ).innerHTML = incorrectLetters.join(" ");
  }
  //get input from user

  function checkLetters(letter) {
    var letterInWord = false;
    //Compare the letter the user picks matches any of the letters in the word
    //I want a conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else.
    for (var i = 0; i < blanks; i++) {
      if (chosenWord[i] === letter) {
        letterInWord = true;
      }
    }
    //will only run if above for loop is true
    if (letterInWord) {
      for (i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
          blanksAndSuccesses[i] = letter;
        }
        console.log("correct: " + blanksAndSuccesses);
      }
      // If the user is wrong we want to decrease the lives variables by one
    } else {
      //if letter is wrong
      lives--;
      incorrectLetters.push(letter);
    }
    console.log("wrong guesses: " + incorrectLetters);
  }
  /* to check if a letter is already in the wrong guesses array. set up an if/else conditional that will run a for loop that will iterate ocer all teh letters and then use the if/else to check if it already exists. */

  function reset() {
    document.getElementById("reset").on("click", myReset);
    function myReset() {}
  }

  function roundComplete() {
    /*
update the HTML with the letters that are in the word
update the HTML with guesses we have left
update the HTML to show the wrong guesses
determine whether the user won the game or not
    */
    document.getElementById("answer").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lives").innerHTML = "Lives: " + lives;
    document.getElementById(
      "incorrectLetters"
    ).innerHTML = incorrectLetters.join(" ");

    console.log(correctLetter);
    console.log(blanksAndSuccesses);
    if (correctLetter.join(" ") === blanksAndSuccesses.join(" ")) {
      wins++;
      alert("You correctly guessed: " + chosenWord);
      document.getElementById("wins").innerHTML = "Wins: " + wins;
      startGame();
    } else if (lives === 0) {
      losses++;
      document.getElementById("losses").innerHTML = "Losses: " + losses;
      document.getElementById("incorrectLetters").innerHTML =
        "Letters already guessed: ";
      alert("You lose :(");
      startGame();
    }
  }

  document.onkeyup = function() {
    /*
        take in the letter that we type in
        pass it through the CheckLetters function
        */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // console.log("this is the letter we type", letterGuessed);
    document.getElementById("readMe").innerHTML = "";
    checkLetters(letterGuessed);
    roundComplete();

    for (var x = 0; x < alphabet.length; x++) {
      if (letterGuessed !== alphabet[x]) {
        // alert("Choose a different letter");
      }
    }
  };
};