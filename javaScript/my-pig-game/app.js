/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, activePlayer, roundScore, gamePlaying;

function init() {
  score = [0, 0];
  gamePlaying = true;
  activePlayer = 0;
  roundScore = 0;
  document.querySelector("#current-0").innerHTML = 0;
  document.querySelector("#current-1").innerHTML = 0;
  document.querySelector(".dice").style.display = "none";
  document.querySelector("#score-0").innerHTML = 0;
  document.querySelector("#score-1").innerHTML = 0;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
}

function nextPlayer() {
  roundScore = 0;
  document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
}

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
      document.querySelector(".dice").style.display = "block";
      document.querySelector(".dice").src = "dice-" + dice + ".png";
    } else {
      nextPlayer();
    }
    console.log(roundScore, dice, activePlayer);
  }
});
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    score[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).innerHTML =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      gamePlaying = false;
      document.querySelector("#name-" + activePlayer).textContent =
        "Congrats You Won!";
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", init);
