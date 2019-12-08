var player;
var player2;
var platform;
var playerImg;
var jump = false;
var jump2 = false;
var block;
var playerSpeed = 0;
var player2Speed = 0;
var acidImg;
var gameStarted = false;
var score = 0;
var score2 = 0;
var life = true;
var life2 = true;
var winner;
var death = 0;
var death2 = 0;
var platSpeed = 1;
var mode=0;
var menuBg;

function draw(){ 
  loadingScreen();
  mainMenu();
  keyboardCode();
  //-------- Game Functions -------\\
  if(gameStarted == true){
    background(gameBgi);
    drawSprites(); 
    powerUp();
    playerCollision();
    blockMovement();
    scoreText();
    endScreen();
  }
}
