function reset(){
        player2.setVelocity(0,0);
        player.setVelocity(0,0);
        //--------------------------- Player 1 ---------------------------\\
        player.position.x=775;
        player.position.y=450;
        
        //--------------------------- Player 2 ---------------------------\\
        player2.position.x=725;
        player2.position.y=450;
        
        //--------------------------- Blocks ---------------------------\\
        block.position.x=750;
        block.position.y=500;
        block2.position.x=30;
        block2.position.y=400;
        block3.position.x=800;
        block3.position.y=2500;
        block4.position.x=1300;
        block4.position.y=350;
        block5.position.x=1200;
        block5.position.y=150;
        block6.position.x=300;
        block6.position.y=5200;
        block7.position.x=600;
        block7.position.y=50;
        block8.position.x=1200;
        block8.position.y=0;
        block9.position.x=200;
        block9.position.y=-150;
        block10.position.x=1400;
        block10.position.y=-200;
        block11.position.x=750;
        block11.position.y=-250;
        
        //--------------------------- Other ---------------------------\\
        gameStarted=false;
        mode=1;
        score=0;
        score2=0;
        life=true;
        life2=true;
        death=0;        
        death2=0;
        jump=false;
        jump2=false;
        platSpeed=1;
        playerSpeed=0;
        player2Speed=0;
}