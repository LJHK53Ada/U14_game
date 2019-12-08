function powerUp(){
    if(gameStarted==true){
        for(var i = 0; i<pwUps.length; i++) {
            var j = pwUps[i];
                j.position.y += platSpeed;
            if (j.position.y > height) {
                j.position.y = -100;
                j.position.x = random(-100,width+100);
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