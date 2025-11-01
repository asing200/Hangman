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
function guessLetter(){
    if (gameOver){
        alert("Game Over");
        return;
    }
    var input = document.getElementById("guess");
    var letter = input.value;
    if(guesses.indexOf(letter)>=0)
    {
        return;
    }
    if(word.indexOf(letter) < 0 ){
       
       //added this in class: console.log("Empty cluestring:" );
        guess_count--;
    }
    guesses+=letter;
    updatePage();
    input.value = "";
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