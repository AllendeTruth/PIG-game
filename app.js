/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//////////////////////////V.2.0c/////////////////////////////////////////
//Goal: Add another dice to the game, so that there are two die now. The player looses his current score when oe of them is one.

var scores, roundScore, activePlayer, gamePlaying;

start();






document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
         //1. Random Number
         var dice = Math.floor(Math.random()*6)+1;
         //2. Display the result
             document.getElementById('dice-1').style.display = "block";
             document.getElementById('dice-2').style.display = "block";
             document.getElementById('dice-1').src='dice-'+dice+'.png';
     
         //3. Update roundscore IF rolled number is not 1
             if(dice > 1){
                 //add score
                 roundScore+= dice;
                 document.querySelector('#current-'+activePlayer).textContent = roundScore;
             }else{
                 
                 nextPlayer();
             }
    }
   
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        //addcurrent score to players global score
        scores[activePlayer]+= roundScore;
    //update UI
        document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

        document.querySelector('.dice').style.display = 'none';


        var input = document.querySelector('.final-score').value;
        var winningScore;

        //undefined, 0, null or "" are coerced to false
        //anything else is coerced to true
        if(input){
        winningScore = input;
        }else{
            winningScore = 100;
        }
    //check if player won game
        if(scores[activePlayer]>=winningScore){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        }else{
            nextPlayer();
        }
    }
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer =1: activePlayer =0;
            roundScore = 0;

            document.getElementById(`current-0`).textContent = 0;
            document.getElementById(`current-1`).textContent = 0;

            document.querySelector(".player-0-panel").classList.toggle('active');
            document.querySelector(".player-1-panel").classList.toggle('active');

            document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', start);

function start(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = "none";

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0"; 
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};
// //////////////////////////V.2.0b/////////////////////////////////////////
// //Goal: Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JS)

// var scores, roundScore, activePlayer, gamePlaying;

// start();






// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(gamePlaying){
//          //1. Random Number
//          var dice = Math.floor(Math.random()*6)+1;
//          //2. Display the result
//              var diceDOM = document.querySelector('.dice')
//              diceDOM.style.display = 'block';
//              diceDOM.src='dice-'+dice+'.png';
     
//          //3. Update roundscore IF rolled number is not 1
//              if(dice > 1){
//                  //add score
//                  roundScore+= dice;
//                  document.querySelector('#current-'+activePlayer).textContent = roundScore;
//              }else{
                 
//                  nextPlayer();
//              }
//     }
   
// });

// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if(gamePlaying){
//         //addcurrent score to players global score
//         scores[activePlayer]+= roundScore;
//     //update UI
//         document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

//         document.querySelector('.dice').style.display = 'none';


//         var input = document.querySelector('.final-score').value;
//         var winningScore;

//         //undefined, 0, null or "" are coerced to false
//         //anything else is coerced to true
//         if(input){
//         winningScore = input;
//         }else{
//             winningScore = 100;
//         }
//     //check if player won game
//         if(scores[activePlayer]>=winningScore){
//             document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
            
//         }else{
//             nextPlayer();
//         }
//     }
// });

// function nextPlayer(){
//     activePlayer === 0 ? activePlayer =1: activePlayer =0;
//             roundScore = 0;

//             document.getElementById(`current-0`).textContent = 0;
//             document.getElementById(`current-1`).textContent = 0;

//             document.querySelector(".player-0-panel").classList.toggle('active');
//             document.querySelector(".player-1-panel").classList.toggle('active');

//             document.querySelector('.dice').style.display = 'none';
// };

// document.querySelector('.btn-new').addEventListener('click', start);

// function start(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;

//     document.querySelector(".dice").style.display = "none";

//     document.getElementById("score-0").textContent = "0";
//     document.getElementById("score-1").textContent = "0";
//     document.getElementById("current-0").textContent = "0";
//     document.getElementById("current-1").textContent = "0"; 
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// };





//////////////////////////V.2.0a/////////////////////////////////////////

//Goal: add feature that makes player loose entire score if they roll two 6's in a row.
// var scores, roundScore, activePlayer, gamePlaying, lastDice;

// start();

// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(gamePlaying){
//          //1. Random Number
//          var dice = Math.floor(Math.random()*6)+1;
//          //2. Display the result
//              var diceDOM = document.querySelector('.dice')
//              diceDOM.style.display = 'block';
//              diceDOM.src='dice-'+dice+'.png';
     
//          //3. Update roundscore IF rolled number is not 1
//             if(dice === 6 && lastDice ===6){
//                 //player looses score
//                 scores[activePlayer] = 0;
//                 document.getElementById('score-'+activePlayer).textContent = 0;
//                 nextPlayer();
//             } else if(dice > 1){
//                  //add score
//                  roundScore+= dice;
//                  document.querySelector('#current-'+activePlayer).textContent = roundScore;
//              }else{
                 
//                  nextPlayer();
//              }
//              lastDice = dice;
//     }
   
// });

// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if(gamePlaying){
//         //addcurrent score to players global score
//         scores[activePlayer]+= roundScore;
//     //update UI
//         document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

//         document.querySelector('.dice').style.display = 'none';

//     //check if player won game
//         if(scores[activePlayer]>=100){
//             document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
            
//         }else{
//             nextPlayer();
//         }
//     }
// });

// function nextPlayer(){
//     activePlayer === 0 ? activePlayer =1: activePlayer =0;
//             roundScore = 0;

//             document.getElementById(`current-0`).textContent = 0;
//             document.getElementById(`current-1`).textContent = 0;

//             document.querySelector(".player-0-panel").classList.toggle('active');
//             document.querySelector(".player-1-panel").classList.toggle('active');

//             document.querySelector('.dice').style.display = 'none';
// };

// document.querySelector('.btn-new').addEventListener('click', start);

// function start(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;

//     document.querySelector(".dice").style.display = "none";

//     document.getElementById("score-0").textContent = "0";
//     document.getElementById("score-1").textContent = "0";
//     document.getElementById("current-0").textContent = "0";
//     document.getElementById("current-1").textContent = "0"; 
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// };



//////////////////////////V.1.0/////////////////////////////////////////


// var scores, roundScore, activePlayer, gamePlaying;

// start();






// document.querySelector('.btn-roll').addEventListener('click', function(){
//     if(gamePlaying){
//          //1. Random Number
//          var dice = Math.floor(Math.random()*6)+1;
//          //2. Display the result
//              var diceDOM = document.querySelector('.dice')
//              diceDOM.style.display = 'block';
//              diceDOM.src='dice-'+dice+'.png';
     
//          //3. Update roundscore IF rolled number is not 1
//              if(dice > 1){
//                  //add score
//                  roundScore+= dice;
//                  document.querySelector('#current-'+activePlayer).textContent = roundScore;
//              }else{
                 
//                  nextPlayer();
//              }
//     }
   
// });

// document.querySelector('.btn-hold').addEventListener('click', function(){
//     if(gamePlaying){
//         //addcurrent score to players global score
//         scores[activePlayer]+= roundScore;
//     //update UI
//         document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];

//         document.querySelector('.dice').style.display = 'none';

//     //check if player won game
//         if(scores[activePlayer]>=100){
//             document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
            
//         }else{
//             nextPlayer();
//         }
//     }
// });

// function nextPlayer(){
//     activePlayer === 0 ? activePlayer =1: activePlayer =0;
//             roundScore = 0;

//             document.getElementById(`current-0`).textContent = 0;
//             document.getElementById(`current-1`).textContent = 0;

//             document.querySelector(".player-0-panel").classList.toggle('active');
//             document.querySelector(".player-1-panel").classList.toggle('active');

//             document.querySelector('.dice').style.display = 'none';
// };

// document.querySelector('.btn-new').addEventListener('click', start);

// function start(){
//     scores = [0,0];
//     roundScore = 0;
//     activePlayer = 0;
//     gamePlaying = true;

//     document.querySelector(".dice").style.display = "none";

//     document.getElementById("score-0").textContent = "0";
//     document.getElementById("score-1").textContent = "0";
//     document.getElementById("current-0").textContent = "0";
//     document.getElementById("current-1").textContent = "0"; 
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');
// };



