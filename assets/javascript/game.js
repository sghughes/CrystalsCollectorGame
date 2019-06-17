
//Variables:
var crystal1; //value per game should be randomly generated between 1-12
var crystal2;
var crystal3;
var crystal4;
var wins = 0; //increase by 1 when totalScore = gameNumber
var losses = 0; //increase by 1 when totalScore > gameNumber
var gameNumber = 0; //value per game should be randomly generated between 19-120
var totalScore = 0; //increases by value of crystal when that crystal is clicked

//functions:

//start function: gameNumber and crystal numbers randomly generated. Total score is 0. display game number and total score.
function start(){
    gameNumber = Math.floor(Math.random()*120)+19;
    console.log('current game number is: ' + gameNumber);
    $('.randomGameNumber').html('Random Number: ' + gameNumber);
    crystal1 = Math.floor(Math.random()*12)+1;
    crystal2 = Math.floor(Math.random()*12)+1;
    crystal3 = Math.floor(Math.random()*12)+1;
    crystal4 = Math.floor(Math.random()*12)+1;
    console.log('crystal 1 number: ' + crystal1)
    console.log('crystal 2 number: ' + crystal2)
    console.log('crystal 3 number: ' + crystal3)
    console.log('crystal 4 number: ' + crystal4)
    $('.currentScore').html(totalScore);
    $('.winsHTML').html('Wins: '+ wins);
    $('.lossesHTML').html('Losses: ' + losses);
}

function play(){
    
    $('.crystalImage1').on('click',function()
    {
        totalScore+= crystal1;
        console.log('total score: ' + totalScore);
        console.log('game num: ' + gameNumber);


        if(totalScore<gameNumber){
            $('.currentScore').html(totalScore);
        }
        else if(totalScore>gameNumber){
            console.log('you lost');
            losses++;
            $('.lossesHTML').html('Losses: ' + losses);
            $('.gameResultAlert').html('You lose!');
            totalScore = 0;
            start();
        }
        else{
            wins++;
            $('.winsHTML').html('Wins: ' + wins);
            $('.gameResultAlert').html('You win!');
            totalScore = 0;
            start();
        }
        

       
    })

    $('.crystalImage2').on('click',function()
    {
        totalScore+= crystal2;
        console.log(totalScore);
        if(totalScore<gameNumber){
            $('.currentScore').html(totalScore);
        }
        else if(totalScore>gameNumber){
            console.log('you lost');
            losses++;
            $('.lossesHTML').html('Losses: ' + losses);
            $('.gameResultAlert').html('You lose!');
            totalScore = 0;
            start();
        }
        else{
            wins++;
            $('.winsHTML').html('Wins: ' + wins);
            $('.gameResultAlert').html('You win!');
            totalScore = 0;
            start();
        }
    })

    $('.crystalImage3').on('click',function()
    {
        totalScore+= crystal3;
        console.log(totalScore);
        if(totalScore<gameNumber){
            $('.currentScore').html(totalScore);
        }
        else if(totalScore>gameNumber){
            console.log('you lost');
            losses++;
            $('.lossesHTML').html('Losses: ' + losses);
            $('.gameResultAlert').html('You lose!');
            totalScore = 0;
            start();
        }
        else{
            wins++;
            $('.winsHTML').html('Wins: ' + wins);
            $('.gameResultAlert').html('You win!');
            totalScore = 0;
            start();
        }
    })

    $('.crystalImage4').on('click',function()
    {
        totalScore+= crystal4;
        console.log(totalScore);
        if(totalScore<gameNumber){
            $('.currentScore').html(totalScore);
        }
        else if(totalScore>gameNumber){
            console.log('you lost');
            losses++;
            $('.lossesHTML').html('Losses: ' + losses);
            $('.gameResultAlert').html('You lose!');
            totalScore = 0;
            start();
        }
        else{
            wins++;
            $('.winsHTML').html('Wins: ' + wins);
            $('.gameResultAlert').html('You win!');
            totalScore = 0;
            start();
        }
    })
    

    
   
    
}

//Process
start();
play();

//play function: when crystal clicked, add crystal value to total score. Check if total score = or > gameNumber. Display total score.


//Randomly generated number when you win or lose
//Reset function for crystal numbers, total score, and number to guess

//store value when crystal is clicked and add to total score. 
// alert if total score matches, you win displays, win count goes up by 1, everything else resets. If over, you lose.