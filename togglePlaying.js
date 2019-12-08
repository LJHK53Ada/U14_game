function togglePlaying(){
    if (!menuBg.isPlaying() && gameStarted===false) {
        menuBg.play();
        endBg.stop();    
    }
}

function togglePlaying2(){
    if (!gameBg.isPlaying() && gameStarted===true) {
        menuBg.stop();
        gameBg.play();    
    }
}

function togglePlaying3(){
    if(!endBg.isPlaying()&&life==false&&life2==false){
        gameBg.stop();
        endBg.play();    
    }
}

function togglePlaying4(){
    if(!selectSnd.isPlaying()){
        selectSnd.play()
    }
}

