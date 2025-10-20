var POSSIBLE_WORDS =["obduraate", "verismilitude", "defenestrate",
    "obsequious", "dissonant", "today", "idempotent"]
    var word ="";
    var guesses = "";

function newGame(){
    var randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    var word = POSSIBLE_WORDS[randomIndex];


    function guessLetter(){
        var input = document.getElementById("guess")
        var letter = input.value;
        guesses += letter;
        updatePage();

    }
    function updatePage(){
        var clueString = "";
        for(var i = 0; i< word.length; i++){
            var currentLetter = word.chartAt(i);
            if(guesses.indexOf(currentLetter) >=0 ){ //You guess it
                clueString += currentLetter + " ";
            }
            else
                clueString+= "_";
    }   
        var clue = document.getElementById("clue");
        clue.innerHTML = clueString;

        var guessArea = document.getElementById("guesses");
        guessArea
    
    
    }
}