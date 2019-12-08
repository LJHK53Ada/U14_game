function setup(){ 
    mode = 0;

    createCanvas(1500, 700); //Canvas Creation
    textSize(21);
    //Player 1 creation and assigning an image
    player=createSprite(775,450,50,50);
    player.addImage(playerImg);
    player.scale = 0.05

    //Player 2 creation and assigning an image
    player2=createSprite(725,450,50,50);
    player2.addImage(playerImg);
    player2.scale = 0.05
    player2.mirrorX(-1)

    //Creating the blocks group and the block sprites themselves
    blocks = new Group();
    block = createSprite(750,500,500,40); // ground block
    block2 = createSprite(30,400,300,40);
    block3 = createSprite(800,250,400,40);
    block4 = createSprite(1300,350,200,40);
    block5 = createSprite(1200,150,100,40);
    block6 = createSprite(300,200,300,40);
    block7 = createSprite(600,50,200,40);
    block8 = createSprite(1200,0,300,40);
    block9 = createSprite(200,-150,150,40);
    block10 = createSprite(1400,-200,200,40);
    block11 = createSprite(750,-250,400,40) 
    //Adding all the blocks to the group
    blocks.add(block);
    blocks.add(block2);
    blocks.add(block3);
    blocks.add(block4);
    blocks.add(block5);
    blocks.add(block6);
    blocks.add(block7);
    blocks.add(block8);
    blocks.add(block9);
    blocks.add(block10);
    blocks.add(block11);

    //Creating a group for the acid and the sprites
    acidGrp = new Group();
    acid = createSprite(40,670);
    acid2 = createSprite(200,670);
    acid3 = createSprite(360,670);
    acid4 = createSprite(520,670);
    acid5 = createSprite(680,670);
    acid6 = createSprite(840,670);
    acid7 = createSprite(1000,670);
    acid8 = createSprite(1160,670);
    acid9 = createSprite(1320,670);
    acid10 = createSprite(1480,670);
    acid11 = createSprite(120,670);
    acid12 = createSprite(280,670);
    acid13 = createSprite(440,670);
    acid14 = createSprite(600,670);
    acid15 = createSprite(760,670);
    acid16 = createSprite(920,670);
    acid17 = createSprite(1080,670);
    acid18 = createSprite(1240,670);
    acid19 = createSprite(1400,670);

    //assigning the sprites, images    
    acid.addImage(acidImg);
    acid2.addImage(acidImg);
    acid3.addImage(acidImg);
    acid4.addImage(acidImg);
    acid5.addImage(acidImg);
    acid6.addImage(acidImg);
    acid7.addImage(acidImg);
    acid8.addImage(acidImg);
    acid9.addImage(acidImg);
    acid10.addImage(acidImg);
    acid11.addImage(acidImg);
    acid12.addImage(acidImg);
    acid13.addImage(acidImg);
    acid14.addImage(acidImg);
    acid15.addImage(acidImg);
    acid16.addImage(acidImg);
    acid17.addImage(acidImg);
    acid18.addImage(acidImg);
    acid19.addImage(acidImg);
    
    //Assigning a scale value to the sprites
    acid.scale = 0.1
    acid2.scale = 0.1
    acid3.scale = 0.1
    acid4.scale = 0.1
    acid5.scale = 0.1
    acid6.scale = 0.1
    acid7.scale = 0.1
    acid8.scale = 0.1
    acid9.scale = 0.1
    acid10.scale = 0.1
    acid11.scale = 0.1
    acid12.scale = 0.1
    acid13.scale = 0.1
    acid14.scale = 0.1
    acid15.scale = 0.1
    acid16.scale = 0.1
    acid17.scale = 0.1
    acid18.scale = 0.1
    acid19.scale = 0.1
    
    //--------------------------- Powerups ---------------------------\\
    pwUps = new Group();
    //--------- Heart ---------\\
    pwHeart = createSprite(650,1000);
    pwHeart.addImage(heartImg);
    pwHeart.scale = 0.075
    //--------- Dagger ---------\\
    pwDagger = createSprite(200,200);
    pwDagger.addImage(daggerImg);
    pwDagger.scale = 0.075
    //--------- Adding to group ---------\\
    pwUps.add(pwHeart);
    pwUps.add(pwDagger);

    //--------------------------- Sound Volume ---------------------------\\
    menuBg.setVolume(0.2);
    gameBg.setVolume(0.2);
    endBg.setVolume(0.5);
    deathSnd.setVolume(1.5);
}   