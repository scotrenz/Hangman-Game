// no reload, intiate fucntion for starting game, wins/losses,
//pick new word, reset guesses, reprint blanks,
//Hangman Javascript
console.log("So you want to see what's underneath this? You should really buy me a drink first.")
//possible correct answers
var words = [
    ["N", "O", "O", "S", "E"],
    ["G", "A", "L", "L", "O", "W", "S"],
    ["A", "S", "P", "H", "Y", "X", "I", "A", "T", "I", "O", "N"],
    ["S", "T", "R", "A", "N", "G", "U", "L", "A", "T", "I", "O", "N"],
    ["C", "U", "T", "M", "E", "S", "O", "M", "E", "S", "L", "A", "C", "K"]
];

var random;
var answer;
var blanks;
var losses = 0;
var wins = 0;
var guessesLeft = 7;

//create underscore blanks
function createBlanks() {
    blanks = new Array(answer.length);
    for (var i = 0; i < blanks.length; i++) {
        blanks[i] = "_ ";
    }

    var answer_space = document.getElementById("answer_space");
    answer_space.innerHTML = ""
    for (var i = 0; i < blanks.length; i++) {
        var letter = document.createTextNode(blanks[i]);
        answer_space.appendChild(letter);
    }
}

//assign word and guess count
function setup() {

    //randomly choose answer
    random = Math.floor((Math.random() * (words.length)));
    answer = words[random];

    createBlanks()
    document.getElementById("incorrect").innerHTML = "";
    guessesLeft = 7
}

window.onload = function startGame() {
    setup();


    //log user input
    document.onkeyup = function(press) {
        var userInput = press.key.toUpperCase();
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === userInput) {
                blanks[i] = userInput + " ";
                console.log(blanks)
                document.getElementById("answer_space").innerHTML = blanks.join("");
                var correct = true;
            }
        }

        //create win variable
        var win = true;
        for (var i = 0; i < blanks.length; i++) {
            if (blanks[i] === "_ ") {
                win = false;
            }
        }
        // win alert
        if (win) {
        	wins++
        	document.getElementById("wins").innerHTML = wins
            window.alert("You win!");
            setup();
        }


        if (!correct) {
            var incorrect = document.getElementById("incorrect");
            var letter = document.createTextNode(" " + userInput);
            incorrect.appendChild(letter);
            guessesLeft--;

            // lose alert
            if (guessesLeft < 1) {
                losses++
                document.getElementById("losses").innerHTML = losses
                window.alert("YOU DEAD");
                setup();

            }
        }

        //prints guess count
        document.getElementById("guesses_left").innerHTML = guessesLeft;
    }




}