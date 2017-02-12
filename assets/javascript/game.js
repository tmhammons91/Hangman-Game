

/*variables for game*/
var wordPlaceholder=[]; 
var currentWord=""; 
var letterChoice=""; 
var wrongGuesses=0; 
var guessesLeft=6;
var wins = 0 ; 
var gameWon= false; 
var lettersAlreadyGuessed = []; 
var gamesPlayed = 0; 
var wordsUsed=[]; 
var gameInPlay = false; 
var composers = ["mozart", "beethoven", "vivaldi", "bach", "williams"]; 

var mozart = 
  {hint: "One of the most famous and prolific composers of all time, but died young",
  song: ""
  }; 

var beethoven =  
  {hint: "Was deaf toward the end of his life", 
  song: "",  // added this field as placeholder for the names in case I had time/figured out to add in audio files
  }; 

var vivaldi =
  {hint: "Famous for his violin concertos about the seasons", 
  song:  "", 
  }; 

var bach =  
  {hint: "Baroque period composer who wrote the Brandenburg Concertos", 
  song: "", 
  }; 

var williams = 
  {hint: "Wrote the music for Stars Wars, Raiders, Harry Potter...'nuff said", 
  song: "", 
  }; 


// function to Initialize game --- was setting this up to make game repeat but haven't finished it
/*function initializeGame () {
  wordPlaceholder= ""; 
  currentWord=""; 
  letterChoice=""; 
  wrongGuesses= 0; 
  guessesLeft=6;
  wins = 0 ; 
  gameWon= false; 
  lettersAlreadyGuessed = []; 
  gamesPlayed = 0; 
    //wordsUsed=[]; // set this up thinking it would be part of the solution for preventing same words being used
 } */
  

/* first function and step needed is to have a random selection of the word, and to put in the placeholder spots */

$("#start").on("click", function () {
    if (gameInPlay === true){
      return}; 
  
 currentWord=composers[Math.floor(Math.random() * composers.length)];

    console.log(currentWord); 

    for (i=0; i<currentWord.length; i++) { 
    wordPlaceholder.push("_ "); 
      gameInPlay = true; 
    }
   
    $("#word-placeholder").append(wordPlaceholder); 
    $(".guesses-left").html(guessesLeft); 
      
      if (currentWord === "mozart") {
        $("#hint").append(mozart.hint); }
      else if (currentWord === "beethoven") {
        $("#hint").append(beethoven.hint); }
      else if (currentWord === "vivaldi") {
        $("#hint").append(vivaldi.hint) }
      else if (currentWord === "bach") {
        $("#hint").append(bach.hint) }
      else if (currentWord === "williams") {
        $("#hint").append(williams.hint) }; 
      
});/* this is the end of the start button function*/  

/* next function will set up the guessing and testing conditions*/

document.onkeyup = function(event) {
      if (wrongGuesses >=6 || gameWon===true) {
      alert("game over"); 
      }
      else  {
      letterChoice = event.key;
      letterChoice = letterChoice.toLowerCase();    
      var letterIndex = currentWord.indexOf(letterChoice);       
      } /*this is the brace marking the end of the else statement */

       if (letterIndex=== -1) {
        lettersAlreadyGuessed.push(letterChoice);   
          $("#letters-guessed").append(letterChoice); 
          wrongGuesses++; 
          guessesLeft--; 
          $(".guesses-left").html(guessesLeft); 
        } 
     
      else {     
            for(var i=0; i<currentWord.length; i++) {
                  if (currentWord[i] === letterChoice) {
                      wordPlaceholder[i]=letterChoice;  
                      $("#word-placeholder").html(wordPlaceholder);
                  } 
            } 
            var wordString = "";  
            for (var i=0; i<currentWord.length; i++) {
              wordString = wordString + wordPlaceholder[i]; 
                if (wordString === currentWord) { 
                  wins++; 
                  gameWon=true; 
                  $("#wins-tally").html("You Win"); 
                  console.log(wins) 
                }; 
            };                 
      }; 

};  /* this is the bracket marking the end of the onkeyup function */



