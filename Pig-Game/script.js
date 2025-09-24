'use strict';
const dice = document.querySelector('.dice');
const scorePlayer0 = document.getElementById('score--0'); 
const scorePlayer1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const again = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const el0 = document.querySelector('.player--0');
const el1 = document.querySelector('.player--1');

dice.classList.add('hidden');
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

let done = false;
let scorCurent0 = 0;
let scorCurent1 = 0;
let scor0 = 0;
let scor1 = 0;

const change = function (obj0,obj1){
    if(obj0.classList.contains('player--active') && !obj1.classList.contains('player--active'))
    {
        obj0.classList.remove('player--active');
        obj1.classList.add('player--active');
        scorCurent0 = 0;
        current0.textContent = 0;
    }else{
        obj0.classList.add('player--active');
        obj1.classList.remove('player--active');
        scorCurent1 = 0;
        current1.textContent = 0;
    }
    dice.src = 'dice-1.png';
};

const update = function (obj0,obj1,value){
    if(obj0.classList.contains('player--active'))
    {
        scorCurent0 += value;
        current0.textContent = scorCurent0;
    }else{
        scorCurent1 += value;
        current1.textContent = scorCurent1;
    }
    dice.src = `dice-${value}.png`;
};

again.addEventListener('click',function (){
    scorePlayer0.textContent = 0;
    scorePlayer1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    if(el0.classList.contains('player--winner')) el0.classList.remove('player--winner');
    if(el1.classList.contains('player--winner')) el1.classList.remove('player--winner');
    el0.classList.add('player--active');
    el1.classList.remove('player--active');
    dice.classList.add('hidden');
    done = false;
});

roll.addEventListener('click',function (){
    if(done) return ;
    const rN = Math.trunc(Math.random() * 6) + 1;
    
    if(rN === 1)
        change(el0,el1);
    else
        update(el0,el1,rN);

    if(dice.classList.contains('hidden'))
        dice.classList.remove('hidden');
});

hold.addEventListener('click',function (){
    if(done) return;
    if(el0.classList.contains('player--active') && !el1.classList.contains('player--active'))
    {
        if(scorCurent0 + scor0 >= 100){
            el0.classList.add('player--winner');
            scorePlayer0.textContent = scor0 + scorCurent0;
            done = true;
            return ;
        }
        scor0 += scorCurent0;
        scorePlayer0.textContent = scor0;
        el0.classList.remove('player--active');
        el1.classList.add('player--active');
        scorCurent0 = 0;
        current0.textContent = 0;
    }else{
        if(scorCurent1 + scor1 >= 100){
            el1.classList.add('player--winner');
            scorePlayer1.textContent = scor1 + scorCurent1;
            done = true;
            return ;
        }
        scor1 += scorCurent1;
        scorePlayer1.textContent = scor1;
        el0.classList.add('player--active');
        el1.classList.remove('player--active');
        scorCurent1 = 0;
        current1.textContent = 0;
    }
});