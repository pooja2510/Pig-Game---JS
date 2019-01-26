//PIG GAME 
var scores, roundScore, activePlayer, isGamePlaying;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;

init();

 

//Rolled the dice button click Event
document.querySelector('.roll-btn').addEventListener('click',function(){   //anonymous function
if(isGamePlaying){
//generating random number
var dice = Math.floor( Math.random() * 6) + 1;

//displaying dice img as per the random number
var diceImgElement = document.querySelector('.dice');
diceImgElement.style.display = 'block'; 
diceImgElement.src =  "img/dice-" + dice + '.png';

//updating current score if it is not equal to 1
if(dice !== 1){
    roundScore += dice;
    document.getElementById('cs-' + activePlayer).textContent = roundScore;
}
else {
    // activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    // roundScore = 0;
    // document.getElementById('cs-0').textContent = roundScore;
    // document.getElementById('cs-1').textContent = roundScore;
    // document.querySelector('.dice').style.display = 'none';
    // document.querySelector('.player-block-0').classList.toggle('active');
    // document.querySelector('.player-block-1').classList.toggle('active');

    nextPlayer();
}
}
});


// Hold Button Click Event
document.querySelector('.hold-btn').addEventListener('click',function(){
    if(isGamePlaying){
 //add the current score to global score
 scores[activePlayer] = scores[activePlayer]+ roundScore;
 document.getElementById('gs-' + activePlayer).textContent = scores[activePlayer];

  //check if player won the game
   if (scores[activePlayer] >= 10){
     document.getElementById('player-' + activePlayer).textContent = "WINNER!!!!";
     document.querySelector('.player-block-' + activePlayer).classList.remove('active');
     document.querySelector('.player-block-' + activePlayer).classList.add('winner');
     document.querySelector('.dice').style.display = 'none';
     isGamePlaying = false;
   }
   else{
      //next player
       nextPlayer();
   }
    }
});

function nextPlayer(){
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('cs-0').textContent = roundScore;
    document.getElementById('cs-1').textContent = roundScore;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-block-0').classList.toggle('active');
    document.querySelector('.player-block-1').classList.toggle('active');
}


// NEW Game button click Event
document.querySelector('.new-btn').addEventListener('click',init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    isGamePlaying = true;

document.getElementById('gs-0').textContent = 0;
document.getElementById('gs-1').textContent = 0;
document.getElementById('cs-0').textContent = 0;
document.getElementById('cs-1').textContent = 0;
document.querySelector('.dice').style.display = 'none';

document.getElementById('player-0').textContent = 'Player 1';
document.getElementById('player-1').textContent = 'Player 2';
document.querySelector('.player-block-0').classList.remove('active');
document.querySelector('.player-block-1').classList.remove('active');
document.querySelector('.player-block-0').classList.remove('winner');
document.querySelector('.player-block-1').classList.remove('winner');

document.querySelector('.player-block-0').classList.add('active');
}