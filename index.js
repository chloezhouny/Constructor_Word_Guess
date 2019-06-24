var inquirer = require("inquirer");
var data = require("./word.js");

var Word = data.Word;
var Letter = data.Letter;





var spells = ["Crucio", "Expecto Patronum", "Imperio", "Expelliarmus", "Lumos", "Avada Kedavra", "Wingardium Leviosa", "Stupefy",
"Incendio", "Protego Totalum", "Obliviate", "Finite Incantatem", "Reparo", "Alohomora"];

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 


var newWord;
var correct;
var guessLeft;
var preCount;
var space;
var guessedLetter;

function newGame()
{
	var index = Math.floor(Math.random() * 14);

	var spell = [];
	for (var i = 0; i < spells[index].length; i ++)
	{
		spell.push(new Letter(spells[index][i]));
	}

	newWord = new Word(spell);
	console.log(newWord);
	correct = false;
    guessLeft = 10;
    preCount = 0;
    space = 0;
    guessedLetter = [];

    if (spells[index].includes(" "))
    {
        space++;
    }
    console.log(newWord.wordPrint());
	play();
}


function play()
{


inquirer
    .prompt([
      {
        name: "letter",
        message: "Guess a letter! "
      },
      
    ])
    .then(function(answer) {

        var userGuess = answer.letter;
        var count = 0;

        if (!alphabet.includes(userGuess))
        {
            play();
        }

        else if (guessedLetter.includes(userGuess))
        {
            console.log("Letter already guessed!!");
            play();
        }

        else
        {
            guessedLetter.push(userGuess);
            newWord.wordCheck(userGuess);
            console.log(newWord.wordPrint());
            for ( var i = 0; i < newWord.word.length; i ++)
            {
            	if (newWord.word[i].guessed)
            	{
            		count ++;
            	}      
            }

            if (preCount < count)
            {
            	console.log("Correct!");
            }
            else
            {
            	console.log("Incorrect!")
                guessLeft --;
                console.log(guessLeft + " guesses remaining!!")
            }

            preCount = count;

            if (count < (newWord.word.length - space) && guessLeft > 0)
            {
                play();
        	}

        	else if ((count === newWord.word.length - space) && guessLeft > 0)
        	{
        		console.log("You got it right! Next Word!")
        		newGame();
        	}

            else if (guessLeft <= 0)
            {
                console.log("Chance over! Next Word!")
                newGame();

            }
       }


    });
}


newGame();

