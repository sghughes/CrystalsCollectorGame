
//Variables
var crystal1; //value per game should be randomly generated between 1-12
var crystal2;
var crystal3;
var crystal4;
var wins; //increase by 1 when totalScore = gameNumber
var losses; //increase by 1 when totalScore > gameNumber
var gameNumber; //value per game should be randomly generated between 19-120
var totalScore; //increases by value of crystal when that crystal is clicked

//functions
function start(){
    gameNumber = Math.floor(Math.random()*120)+19;
    console.log('current game number is: ' + gameNumber);
    crystal1 = Math.floor(Math.random()*12)+1;
    crystal2 = Math.floor(Math.random()*12)+1;
    crystal3 = Math.floor(Math.random()*12)+1;
    crystal4 = Math.floor(Math.random()*12)+1;
    console.log('crystal 1 number: ' + crystal1)
    console.log('crystal 1 number: ' + crystal2)
    console.log('crystal 1 number: ' + crystal3)
    console.log('crystal 1 number: ' + crystal4)
}
start();
//start function: gameNumber and crystal numbers randomly generated. Total score is 0. display game number and total score.
//play function: when crystal clicked, add crystal value to total score. Check if total score = or > gameNumber. Display total score.

//Randomly generated number at start of game
//Randomly generated number when you win or lose
//Reset function for crystal numbers, total score, and number to guess
//on click event for each crystal
//store value when crystal is clicked and add to total score. 
// alert if total score matches, you win displays, win count goes up by 1, everything else resets. If over, you lose.