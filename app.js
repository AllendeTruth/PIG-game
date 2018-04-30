/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/





///////////////////////////Variables- Global Scope/////////////
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


///////////////////////////////////////////////////////


////hides dice image initially
document.querySelector(".dice").style.display = "none";
///player scores set to 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

//////////////////anonomous function example//////
document.querySelector('.btn-roll').addEventListener('click', function(){
    //1. Random Number
        var dice = Math.floor(Math.random()*6)+1;
    //2. Display the result
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src='dice-'+dice+'.png';

    //3. Update roundscore IF rolled number is not 1
        if(dice > 1){
            //add score
            roundScore+= dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else{
            //ternary
            activePlayer === 0 ? activePlayer =1: activePlayer =0;
            roundScore = 0;

            document.getElementById(`current-0`).textContent = 0;
            document.getElementById(`current-1`).textContent = 0;

            document.querySelector(".player-0-panel").classList.toggle('active');
            document.querySelector(".player-1-panel").classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';

        }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    //addcurrent score to players global score
        scores[activePlayer]+= roundScore;
    //update UI
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

    //check if player won game

    activePlayer === 0 ? activePlayer =1: activePlayer =0;
            roundScore = 0;

            document.getElementById(`current-0`).textContent = 0;
            document.getElementById(`current-1`).textContent = 0;

            document.querySelector(".player-0-panel").classList.toggle('active');
            document.querySelector(".player-1-panel").classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
});

////////////////////////////////






/////////////callback function example//////
// function btn(){
//     //do something
// };
// btn();

// document.querySelector('btn-roll')addEventListener('click', btn);

////////////////////////////////////////////////

// document.querySelector("#current-"+ activePlayer).textContent= dice;
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";



//Example: qSel for reading html
// var x = document.querySelector("#score-0").textContent;
// console.log(x);

//Example qSel for changing CSS


