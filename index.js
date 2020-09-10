
var playButton = document.querySelector("button");
document.querySelector("button").addEventListener("click",function(){

  rollIt();
  buttonAnimation(playButton);
});

// function to start the game
function rollIt(){

  var randomNumber1 = Math.floor(Math.random()*6 + 1);
  var randomDiceImage1 = "images/dice"+randomNumber1+".png";
  var dice1 =  document.getElementsByClassName("img1")[0];

  var randomNumber2 = Math.floor(Math.random()*6 + 1);
  var randomDiceImage2 = "images/dice"+randomNumber2+".png";
  var dice2 =  document.getElementsByClassName("img2")[0];

  dice1.setAttribute("src",randomDiceImage1);
  dice2.setAttribute("src",randomDiceImage2);


  var judgement = document.querySelector("h1");
  if(randomNumber1 == randomNumber2)
  judgement.innerText = "It's a Draw";

  else if(randomNumber1 > randomNumber2)
  judgement.innerText = "🚩Player 1 Wins !!";

  else
  judgement.innerText = "Player 2 Wins !!🚩";
}
// function for animation
function buttonAnimation(activeButton){

activeButton.classList.add("pressed");
setTimeout(function(){
  activeButton.classList.remove("pressed");
} , 100);
}

