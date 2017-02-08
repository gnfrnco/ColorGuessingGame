var r,g,b;
newGame();

var answer = "rgb(" + r + "," + g + "," + b + ")";
var rgbSign = document.querySelector('h1');

rgbSign.textContent = answer;

var randomizer = '.choice' + assignBoxNum();

document.querySelector(randomizer).style.backgroundColor = answer;

function getRandom(){ return Math.round(Math.random() * 255); }

function newGame(){
red = getRandom();
green = getRandom();
blue = getRandom();  
}

function assignBoxNum(){
  let min = 1, max = 6;
  let random = Math.round(Math.random()*(max-min) + min);
  console.log(random);
  return random;
}