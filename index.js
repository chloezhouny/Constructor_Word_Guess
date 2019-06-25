var inquirer = require("inquirer");
var data = require("./word.js");
const chalk = require('chalk');

var Word = data.Word;
var Letter = data.Letter;





var spells = ["Crucio", "Expecto Patronum", "Imperio", "Expelliarmus", "Lumos", "Avada Kedavra", "Wingardium Leviosa", "Stupefy",
"Incendio", "Protego Totalum", "Obliviate", "Finite Incantatem", "Reparo", "Alohomora"];

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
 var divider = "\nnunununununununununununununununununununununununununununununun\n\n";
console.log(divider.length);
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

	correct = false;
    guessLeft = 10;
    preCount = 0;
    space = 0;
    guessedLetter = [];

    if (spells[index].includes(" "))
    {
        space++;
    }

    var newWordHolder = newWord.wordPrint();
    var spaceLine = "";
    for (var i = 0; i < (64-newWordHolder.length - 2)/2; i++)
    {
        spaceLine = spaceLine + " "
    }

    console.log(" ");
    console.log(divider);
    console.log("                     Harry Potter Hangman")
    console.log(" ");
    console.log(" ");
    console.log(" ");
    console.log(spaceLine + newWord.wordPrint());
    console.log(" ");
	play();
}


function play()
{


        inquirer
        .prompt([
          {
            name: "letter",
            message: "                     Guess a letter! "
          },
          
        ])
        .then(function(answer) {

            var userGuess = answer.letter;
            var count = 0;

            if (!alphabet.includes(userGuess))
            {
                console.log(" ");
                console.log(" ");
                console.log(" ");
                play();
            }

            else if (guessedLetter.includes(userGuess))
            {
                console.log(" ");
                console.log(" ");
                console.log(" ");
                console.log("                    Letter already guessed!!");
                console.log(" ");
                play();
            }

            else
            {
                


                guessedLetter.push(userGuess);
                newWord.wordCheck(userGuess);

                var newWordHolder = newWord.wordPrint();
                var spaceLine = "";
                for (var i = 0; i < (64-newWordHolder.length - 2)/2; i++)
                {
                    spaceLine = spaceLine + " "
                }               
                console.log(" ");
                console.log(spaceLine + newWord.wordPrint());


                for ( var i = 0; i < newWord.word.length; i ++)
                {
                	if (newWord.word[i].guessed)
                	{
                		count ++;
                	}      
                }

                if (preCount < count)
                {
                    console.log(" ");
                    console.log(" ");
                	console.log(chalk.magenta(`                           Correct!`));
                    console.log(" ");
                }
                else
                {
                    console.log(" ");
                    console.log(" ");
                	console.log(chalk.green(`                          Incorrect!`));
                    guessLeft --;
                    console.log(" ");
                    console.log("                     " + guessLeft + " guesses remaining!!")
                    console.log(" ");
                }

                preCount = count;

                if (count < (newWord.word.length - space) && guessLeft > 0)
                {
                    play();
            	}

            	else if ((count === newWord.word.length - space) && guessLeft > 0)
            	{
            		console.log(("                ") + chalk.yellowBright(`You got it right! Next Word!`));

                    console.log(" ");
                    inquirer.prompt([
                      {
                        name: "exit",
                        message: "       Enter E to exit game, or press any key to continue."
                      },
          
                    ])
                    .then(function(answer) {

                        if (answer.exit === "E")
                        {
                            process.exit(1);
                        }
                        else
                        {
                            newGame();
                        }
                    })
            		
            	}

                else if (guessLeft <= 0)
                {
                    console.log("                    " + chalk.yellowBright(`Chance over! Next Word!`));
                    console.log(" ");

                    inquirer.prompt([
                      {
                        name: "exit",
                        message: "       Enter E to exit game, or press any key to continue."
                      },
          
                    ])
                    .then(function(answer) {

                        if (answer.exit === "E")
                        {
                            process.exit(1);
                        }
                        else
                             {
                            newGame();
                        }
                    })

                }
           }


        });
    }


newGame();

