function scoreText(){
    //Creating the two scores
    fill(255,255,255);
    textSize(25);
    text('Player 2 Score: ' + Math.floor(score2),25,30);
    text('Player 1 Score: ' + Math.floor(score),1270,30);
    
    if(player.position.x>-20&&player.position.x<1520&&player.position.y<700){
        score+=1/30;  
    }
    if(player2.position.x>-20&&player2.position.x<1520&&player2.position.y<700){
        score2+=1/30;
    }
    
    if(player.position.x<-20||player.position.x>1520||player.position.y>700){
        life=false;  
    }
    if(player2.position.x<-20||player2.position.x>1520||player2.position.y>700){
        life2=false;  
    }

    if(life2==false){
        text('Knocked out!',25,70,);
        if(death2<1){
            deathSnd.play();
            death2=death2+1
        }        
    }
    if(life==false){
        text('Knocked out!',1270,70);
        if(death<1){
            deathSnd.play();
            death=death+1
        }
    }
}   

