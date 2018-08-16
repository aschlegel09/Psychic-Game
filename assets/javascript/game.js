window.onload = function()  {
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
    "jack-sparrow",
    "han-solo",
    "clark-kent",
    "james-bond",
    "luke-skywalker",
    "marty-mcfly",
    "indiana-jones",
    "ferris-bueller",
    "john-mcclane",
    "rocky-balboa",
    "forrest-gump",
    "aragorn",
    "neo",
    "yoda",
    "obi-wan-kenobi",
    "woody",
    "anakin-skywalker",
    "ace-ventura",
    "kevin-mccallister",
    "maximus",
    "jason-bourne",
    "terminator",
    "ethan-hunt",
    "tony-montana",
    "donnie-darko",
    "captain-kirk",
    "peter-parker",
    "tony-stark",
    "shrek",
    "elle-woods",
    "bruce-wayne",
    "sweeney-todd",
    "benjamin-button",
    "napoleon-dynamite",
    "dory",
    "harry-potter",
    "gandalf",
    "mclovin",
    "wolverine",
    "captain-america",
    "miranda-priestly",
    "derek-zoolander",
    "ron-burgundy",
    "borat"
  ];
//  var guess; //user guess defined
  var chosenWord = "";
  var correctLetter = []; //stores correctly guessed letters
  var incorrectLetters = []; //stores incorrectly guessed letters
  var blanksAndSuccesses = [];//stores right or wrong
  var blanks = 0; //counts correct letters
  var lives = 9; //counts user lives
  var space = "-"; //for number of spaces in word '-'
  var wins = 0;
  var losses = 0;

function startGame (){
	lives = 9;
	blanksAndSuccesses = [];
	incorrectLetters = [];
	// pick a random word from the chosen array, name new var
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
  correctLetter = chosenWord.split("");
  blanks = correctLetter.length;
  console.log(blanks);
  console.log(chosenWord);

  for (var u = 0; u < blanks; u++){
	  blanksAndSuccesses.push("_");
  }
	console.log(blanksAndSuccesses);
	document.getElementById("answer").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("lives").innerHTML = ("Lives: " + lives);
	document.getElementById("incorrectLetters").innerHTML = incorrectLetters.join(" ");
}		 
//get input from user
 
function checkLetters(letter){
    var letterInWord = false;
//1. Compare the letter the user picks matches any of the letters in the word
//2. I want a conditional statement to determine if the letter the user picked is in the word. If so, do something, if not, do something else.
    for(var i = 0; i < blanks; i++){
        if (chosenWord[i] === letter){
            letterInWord = true;
        }}
//will only run if above for loop is true
    if(letterInWord){
        for (i = 0; i < blanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            } console.log("correct: " + blanksAndSuccesses);
        }
//3. If the user is wrong we want to decrease the lives variables by one
    }  else{ //if letter is wrong
        lives--;
        incorrectLetters.push(letter);
    }
    console.log("wrong guesses: " + incorrectLetters);
}
/* to check if a letter is already in teh wrong guesses array. set up an if/else conditional that will run a for loop that will iterate ocer all teh letters and then use the if/else to check if it already exists. */

function roundComplete() {
    /*
    1. Its going to update the HTML with the letters that are in the word
    2. Its going to update the HTML with guesses we have left
    3. Its going to update the HTML to show the wrong guesses
    4. Its going to determine whether the user won the game or not
    */
    document.getElementById('answer').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('lives').innerHTML = ("Lives: " + lives);
    document.getElementById('incorrectLetters').innerHTML = incorrectLetters.join(" ");

        console.log(correctLetter);
        console.log(blanksAndSuccesses);
    	if(correctLetter.join(" ") === blanksAndSuccesses.join(" ")){
    		wins++;
    		alert("You correctly guessed: " + chosenWord);
    		document.getElementById("wins").innerHTML = ("Wins: " + wins);
    		startGame();
    	}else if(lives === 0){
			losses++;
    		document.getElementById("losses").innerHTML = ("Losses: " + losses);
    		document.getElementById("incorrectLetters").innerHTML = "Letters already guessed: ";
    		alert("You lose :(");
			startGame();
    	}}			 
startGame();

 document.onkeyup = function(){
            //alert("press any key to start");
            //console.log("starting game", startGame);
            /*var anyLetter = String.fromCharCode(event.keyCode).toLowerCase();
            alert ("Press any key to start");*/
        /*
        1. its going to take in the letter that we type in
        2. its going to pass it through the CheckLetters function
        */
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();
};				
							 
 (function reloadPage(){
    document.getElementById("reset").addEventListener("click", getText, true);
	 
	 function getText(){
		 var txt = document.getElementById("reset").value;
		 console.log(txt);
	 }			 
})};
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
							 
//  var userText = document.getElementById("incorrectLetters");
//  document.getElementById("incorrectLetters").innerHTML = "Letters already guessed: " + incorrectLetters;
//
//							 
//  document.getElementById("lives").innerHTML = "Lives: " + lives;
//	console.log(lives + " lives");
//// Next, we give JavaScript a function to execute when onkeypress event fires.
//  document.onkeypress = function() {
//	  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//        console.log("this is the letter we type", letterGuessed);
//       
//	  					 
// 	};		
//				
//document.addEventListener("keypress", guesses, true);
//	  function guesses(){
//	  }
//  // car.print();
//					
//							 
//  // displays letter to document
//	   // For Loop for alphabet
//  for (var i = 0; i < alphabet.length; i++) {
//    console.log(alphabet[i]);
//	
//  }
//							 	console.log("---------");
//  
//	  							 
//// For Loop for wordList
//for (var n = 0; n < wordList.length; n++) {
//  console.log(wordList[n]);
//}
//
//							 	console.log("---------");
//
//
//	   // displays increments of correct letters					 
//  for (var s = 0; s < chosenWord.length; s++) {
//    correctLetter[s] = "_";
//	  
//	  console.log(correctLetter);
//  }
//							 	console.log("---------");
//							 		 
//// displays increments of answer(same thing as above)							 
//  var answer = [];
//     for (var x = 0; x < chosenWord.length; x++) {
//         answer[x] = "_";
//		 
//		 						console.log(answer);
//     }
//							 	
//							 	console.log("---------");
//								 
//	//answer line
//  document.getElementById("answer").innerHTML = correctLetter.join(" ");
//  for (var y = 0; y < chosenWord.length; y++) {  
//	  correctLetter[y] ="_";
//  	}
//  blanks = chosenWord.length;
//	
//							 //displays amount of letters in answer
//							 	console.log(blanks);
//							 console.log("---------");
//	   		
