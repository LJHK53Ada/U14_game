function playerCollision(){
    if (player.collide(blocks)) { //Allowing the player to jump when colliding with a block
        jump = false;
        playerSpeed = 0;
      }
      else {//player is not colliding with the ground
        playerSpeed ++;//gravity accelerates the movement speed
      }  
      if (player2.collide(blocks)) { //Allowing the player to jump when colliding with a block
        jump2 = false;
        player2Speed = 0;
      }
      else {//player is not colliding with the ground
        player2Speed ++;//gravity accelerates the movement speed
      } 
    
    
    
    
    if(player.collide(pwHeart)){
      pwHeart.position.y=699
      score=score+10
    }
    if(player.collide(pwDagger)){
      pwDagger.position.y=699
      score=score-10
    }
    if(player2.collide(pwDagger)){
      pwDagger.position.y=699
      score2=score2-10
    }
    if(player2.collide(pwHeart)){
      pwHeart.position.y=699
      score2=score2+10
    
    
    
  }
}