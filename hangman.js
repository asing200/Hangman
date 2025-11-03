var POSSIBLE_WORDS =["obduraate", "verismilitude", "defenestrate",
    "obsequious", "dissonant", "today", "idempotent"]
    var MAX_GUESSES = 6; 
    var word ="";
    var guesses = "";
    var guess_count = MAX_GUESSES;
    var gameOver = false;

function newGame(){
     var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
     word = POSSIBLE_WORDS[randomIndex];
    guesses = " ";
    guess_count = MAX_GUESSES;
    gameOver = false;
    updatePage();
}

//gives an update when you try to guess after the game is over
function guessLetter(){
    if (gameOver){
        alert("Game Over");
        return;
    }
    var input = document.getElementById("guess");
    var letter = input.value;

    //guess the same letter
    if(guesses.indexOf(letter)>=0)
    {
        alert("You already guessed that letter, try again.");
        return;
    }

    if(word.indexOf(letter) < 0 ){
       //added this in class: console.log("Empty cluestring:" );
        guess_count--;
    }

    guesses+=letter;
    input.value = ""; //clear the input field
    updatePage();
    
} 

function updatePage(){
     var clueString = "";
     for(var i = 0; i <word.length; i++){
        var currentLetter = word.charAt(i);
        
        if(guesses.indexOf(currentLetter) >= 0){
            clueString += currentLetter + " ";
        }
        else
            clueString+= "_ ";
        }   
      //win or lose: gives an alert 
      if (guess_count <= 0) {
        gameOver = true;
        alert("You lost! The word was: " + word);
    } else if (clueString.indexOf("_") < 0) {
        gameOver = true;
        alert("Congratulations! You've guessed the word: " + word);
    }
    
    //update the string 
    var clue = document.getElementById("clue");
    clue.innerHTML = clueString;

    //update the guesses from the user 
    var guessArea = document.getElementById("guesses");
    guessArea.innerHTML = "Guessed Letters: " + guesses;

    //update the image
    var image = document.getElementById("hangmanImage");
    image.src="images/hangman" + guess_count + ".gif";

    
}    