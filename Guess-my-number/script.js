'use strict';
let theAnswer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
let stateOfTheGame = true;

document.querySelector('.again').addEventListener('click',function (){
    score = 20;
    document.querySelector('.score').textContent = 20;
    theAnswer = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    stateOfTheGame = true;
});

const f = function (text){
    document.querySelector('.message').textContent = text;
    document.querySelector('.score').textContent = --score;
};

document.querySelector('.check').addEventListener('click',function (){
    const theGuess = Number(document.querySelector('.guess').value);
    
    if(!stateOfTheGame) return ;

    if(theAnswer === theGuess)
    {
        document.querySelector('.message').textContent = '🎉 You won!!!!!!!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = theAnswer;
        if(score > highestScore)
        {
            highestScore = score;
            document.querySelector('.highscore').textContent = highestScore;
        }
        return ;
    }

    if(score === 1)
    {
        f('You lost sorry');
        stateOfTheGame = false;
        return ;
    }

    if(!theGuess)
    {
        f('🛑 There must be a value!!!!');
        return ;
    }

    if(theAnswer > theGuess)
        f('📉 The value is to low :(');
    else
        f('📈 The value is to big :(');
});
