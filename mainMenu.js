function mainMenu(){
    if(mode==1){
        fill(0,0,0)
        background(255,120,132);
        textSize(100);
        text('Acid Bunny',500,200);
        textSize(50);
        text('Press space to start!',500,600);
        textSize(30);
        text('How to Play (F)',460,375);
        text('Credits (C)',460,425);
        text('Backstory (B)',460,475)
        image(playerImg, 750, 300, 200, 200);
    }
}

function htp(){
    mode=2;
    background(167,109,232);
    textSize(50);
    text('Player 2 Movement:',50,100)
    text('Player 1 Movement:',1000,100)
    text('Objective - Survive the longest.',350,400)
    textSize(35);
    text('W - Jump\nA - Move Left\nD - Move Right',50,180)
    text('Up Arrow - Jump\nLeft Arrow - Move Left\nRight Arrow - Move Right',1000,180)
    text('Hearts will give you 10 points!\nDaggers will take away 10 points!',450,500)
    textSize(25);
    text('Press (P) to go back to main menu',500,650);
    text('This is you!',1175,420);
    image(playerImg, 1150, 450, 200, 200);
    text('Avoid the acid!',120,420);
    image(acidImg, 100, 450, 200, 200);
}

function loadingScreen(){
    if(mode==0){
        background(139,114,143);
        textSize(75);
        text('Acid Bunny',510,150);
        textSize(50);
        text('Loading complete!',500,300);
        textSize(40);
        text('Press (H) to start',540,400);
        fill(0,0,0);
        rect(350,500,700,75)
        fill(52,232,49);
        rect(355,505,690,65)
    }
}

function credit(){
    if(mode==3){
        background(0,0,0);
        textSize(40);
        fill(255,255,255)
        text('Director: Leon Htin-Kyaw',450,200)
        text('Lead Programmer: Leon Htin-Kyaw',450,250)
        text('Level Designer: Leon Htin-Kyaw',450,300)
        text('Testers: You!',450,350)
        text('For Chris P.',450,500)
        textSize(25);
        text('Press (P) to go back to main menu',500,650)
    }
}

function bstory(){
    if(mode==4){
        background(gameBgi);
        textSize(40);
        fill(255,255,255)
        text('Set in the slight future, within an abandoned factory. This industrial park in Asia\nproduces an extremely high amount of sulphur dioxide and nitrogen oxides,\nwhich have been discarded into the air.\n\nThe result? The rain turning so acidic that it can corrode old buildings... such as\nthe one that the our bunnies have made shelter at and have been living here\npeacefully for several years.\n\nUnfortunately the old factory has already taken quite a beating and now it has\nfinally given in, and has started to collapse. All the windows and exits are\nblocked, as metal beams start falling down, there is a clear way for the bunnies\nto go if they are to survive this - Up.',50,75)
        textSize(25);
        text('Press (P) to go back to main menu',500,670)
    }
}