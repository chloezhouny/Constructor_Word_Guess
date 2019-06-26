# Constructor_Word_Guess

This project creates a Word Guess command-line game using constructor functions. The game receives user input using the inquirer npm packages, and use two constructors to check and print out the words.

<br>

#### Demo 

![](demo.gif)

<br>

#### Installation
```
$ npm i
$ npm install inquirer
$ npm install chalk
$ npm install chalk-animation
```

<br>

#### Usage
Enter the commend line below to start game
```
$ node index.js
```

<br>

#### Code Snippet
Here is how I create animation on terminal using chalk-animation NPM. If the animation is defined inside of a function, then we are able to start it at any point we want.
```JAVASCRIPT
const chalkAnimation = require('chalk-animation');
var harry;
function createAnimationHarry()
{
    harry = chalkAnimation.karaoke(`                       
                _   ,    
                 |_|       '_|_)
                 | |_)arry   | otter  Hangman`);
}

createAnimationHarry();
```

<br>

#### Technology Used


* Command Line
* Node.js
* Inquirer NPM
* Chalk NPM
* Chalk Animation NPM

<br>

#### Author
Chloe Zhou