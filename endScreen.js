function endScreen(){
    if(life==false&&life2==false){
        fill(0,0,0);
        togglePlaying3();
        background(255,200,255)
        textSize(100);
        text('Game Over!',450,250);
        //--------------End Scores--------------\\
        textSize(30);
        text('End Scores:',500,350)
        text('Player 1 score: '+Math.floor(score),500,400);
        text('Player 2 score: '+Math.floor(score2),500,450);
        //--------------Other--------------\\
        text('Press "Y" to go back\nto the main menu',800,400);
        if(key==='y'){
            mode=1;
            mainMenu();
            reset();
            togglePlaying();
          }
        //------------Detecting who won--------------\\
        textSize(50);
        if(Math.floor(score)>Math.floor(score2)){
            text('Player 1 wins!',600,600);    
        }
        if(Math.floor(score)<Math.floor(score2)){
            text('Player 2 wins!',600,600);    
        }
        if(Math.floor(score)==Math.floor(score2)){
            text('Tie!',650,600);    
        }
    }
}
