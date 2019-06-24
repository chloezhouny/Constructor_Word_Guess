
var Letter = function(letter) 
{
  this.letter = letter,
  this.guessed,
  this.letterPrint = function()
  {
    if(this.guessed)
    {
      return this.letter;
    }
  	else
    {
      if (this.letter === " ")
      {
        return " ";
      }
      else
      {
        return "_";
      }      
    }
  },

  this.letterCheck = function(char)
  {
    if ((char === this.letter) || (char.toUpperCase() === this.letter) )
    {
      this.guessed = true;
    }
  }

 } 


module.exports.Letter = Letter;
