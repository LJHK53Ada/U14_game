function keyboardCode()  {
      //--------------------------- Player 1 ---------------------------\\
      if (keyIsDown(UP_ARROW) && jump === false && life===true) {
       jump = true;
       player.position.y -= 5;
       playerSpeed = -17.5;
       jumpSnd.play();
     }

     if (keyIsDown(RIGHT_ARROW)&& keyIsPressed===true && life===true) {
       player.setspeed += 11
       player.position.x += 8
     
     }
     if(keyIsDown(LEFT_ARROW)&& keyIsPressed===true && life===true){
       player.setspeed -= 11
       player.position.x -= 8;
     }  
    
      //--------------------------- Player 2 ---------------------------\\
      if (keyIsDown(87) && jump2 === false && life2===true) {
      jump2 = true;
      player2.position.y -= 5;
      player2Speed = -17.5;
      jumpSnd.play();
     }
      if(keyIsDown(68)&& keyIsPressed===true&& life2===true){
        player2.setspeed += 11
        player2.position.x += 8
     }
      if(keyIsDown(65)&& keyIsPressed===true&& life2===true){
        player2.setspeed -= 11
        player2.position.x -= 8;
    }   
      //--------------------------- Menu ---------------------------\\
      if(gameStarted===false){
        if(key === ' '){
          startGame();
          togglePlaying2();
        }
        if(key==='f'){
          htp()
        }
        if(key==='h'||key==='p'){
          mode=1;
          togglePlaying();
          mainMenu();
          
        }
        if(key==='c'){
          mode=3;
          credit();
          
        }
        if(key==='b'){
          mode=4;
          bstory();
          
        }

      }
      //--------------------------- Player Gravity ---------------------------\\
      player.position.y += playerSpeed;
      player2.position.y += player2Speed;
}