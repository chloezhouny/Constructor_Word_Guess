var data = require("./letter.js");
var Letter = data.Letter;

var Word = function(word) 
{
  this.word = word,
  
  this.wordPrint = function()
  {
   var string = "";
   for (var i = 0; i < this.word.length; i++)
   {
    string = string + this.word[i].letterPrint();
   }
   return string;

  }, 

  this.wordCheck = function(char)
  {
    for (var i = 0; i < this.word.length; i++)
    {
      this.word[i].letterCheck(char);
    }
  } 
}



module.exports.Word = Word;
module.exports.Letter = Letter;