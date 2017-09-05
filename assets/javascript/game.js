//Hangman Javascript
//Words to use: Noose, Gallows, Airflow Constriction, Strangulation, Cut Me Some Slack
console.log("So you want to see what's underneath this? You should really take me for a drink first.")
//define correct answers
var words = [
    ["N", "O", "O", "S", "E"],
    ["G", "A", "L", "L", "O", "W", "S"],
    ["A", "S", "P", "H", "Y", "X", "I", "A", "T", "I", "O", "N"],
    ["S", "T", "R", "A", "N", "G", "U", "L", "A", "T", "I", "O", "N"],
    ["C", "U", "T", "M", "E", "S", "O", "M", "E", "S", "L", "A", "C", "K"]
];
//randomly choose answer
var random = Math.floor((Math.random() * (words.length - 1)));
var answer = words[random];


// set guess amount
var guessesLeft = 7;


//print out underscore blanks
var blanks = new Array(answer.length);
for (var i = 0; i < blanks.length; i++) {
    blanks[i] = "_ ";
}

window.onload = function createBlanks() {
    for (var i = 0; i < blanks.length; i++) {
        var answer_space = document.getElementById("answer_space");
        var letter = document.createTextNode(blanks[i]);
        answer_space.appendChild(letter);
    }

    //log user input
    document.onkeyup = function(press) {
        var userInput = press.key
        var compare = userInput.toUpperCase();
        for (var i = 0; i < answer.length; i++) {
            if (answer[i] === compare) {
                blanks[i] = compare + " ";
                var correct = true;
            }
        }
        //prints guess count
        document.getElementById("guesses_left").innerHTML = guessesLeft;

        //print incorrect or correct answers to respective spot
        var answer_space = document.getElementById("answer_space");
        answer_space.innerHTML = "";
        createBlanks();

        if (!correct) {
            var incorrect = document.getElementById("incorrect");
            var letter = document.createTextNode(" " + compare);
            incorrect.appendChild(letter);
            guessesLeft--;
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
        window.alert("You win!");
        location.reload();
    }

    // lose alert
    if (guessesLeft === 0) {
        window.alert("YOU DEAD");
        location.reload();
    }
}