function blockMovement(){
    if(gameStarted==true){
        for(var i = 0; i<blocks.length; i++) {
            var h = blocks[i];
                h.position.y += platSpeed;
            if (h.position.y > height) {
                h.position.y = -100;
                h.position.x = random(-100,width+100);
            } 
        }
    }

    if(score<10||score2<10){
        platSpeed = 0.5;
    }
    if(score>10||score2>10){
        platSpeed = 1;
    }
    if(score>25||score2>25){
        platSpeed = 2;
    }
    if(score>50||score2>50){
        platSpeed = 3;
    }
    if(score>75||score2>75){
        platSpeed = 5;
    }
}