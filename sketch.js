
var ninja, climbNinjaImageLeft, climbNinjaImageRight, fallNinjaImage;

var bird, birdImageLeft, birdImageRight, birdGroup;

var blue, blueImageLeft, blueImageRight, blueGroup;

var squirrel, squirrelImageLeft, squirrelImageRight, squirrelGroup;

var laundry, laundryImage;
var wallLeft, wallRight , wallImageLeft, wallImageRight;
var ninjaBlade, ninjaBladeImage, ninjaBladeGroup;

var bgImage;

var gameState = "END";

var score ;
var bladesCollected=0;

var gameover, gameoverImage, replay, replayImage;

function preload () {

  bgImage              = loadImage ("images/houses background.png");

  openingImage         = loadImage ("images/ninja warrior background.jpg");

  gameoverImage        = loadImage ("images/game over.png");

  replayImage          = loadImage ("images/replay.png");

  laundryImage         = loadImage ("images/laundry.png");

  wallImageLeft        = loadImage ("images/Wall1.png");

  wallImageRight       = loadImage ("images/Wall1.png");

  ninjaBladeImage      = loadImage ("images/ninja blade.png");

  climbNinjaImageLeft  = loadAnimation ("ClimbingAnimation/ClimbingNinja1.png","ClimbingAnimation/ClimbingNinja3.png","ClimbingAnimation/ClimbingNinja5.png","ClimbingAnimation/ClimbingNinja7.png","ClimbingAnimation/ClimbingNinja9.png","ClimbingAnimation/ClimbingNinja11.png","ClimbingAnimation/ClimbingNinja13.png","ClimbingAnimation/ClimbingNinja15.png",);

  climbNinjaImageRight = loadAnimation ("ClimbingAnimation/RightClimb/RightClimb1.png","ClimbingAnimation/RightClimb/RightClimb3.png","ClimbingAnimation/RightClimb/RightClimb5.png","ClimbingAnimation/RightClimb/RightClimb7.png","ClimbingAnimation/RightClimb/RightClimb9.png","ClimbingAnimation/RightClimb/RightClimb11.png","ClimbingAnimation/RightClimb/RightClimb13.png","ClimbingAnimation/RightClimb/RightClimb15.png");

  fallNinjaImage       = loadAnimation ("FallingNinjaAnimation/FallingNinja1.png","FallingNinjaAnimation/FallingNinja2.png","FallingNinjaAnimation/FallingNinja3.png","FallingNinjaAnimation/FallingNinja4.png","FallingNinjaAnimation/FallingNinja5.png","FallingNinjaAnimation/FallingNinja6.png","FallingNinjaAnimation/FallingNinja7.png","FallingNinjaAnimation/FallingNinja8.png","FallingNinjaAnimation/FallingNinja9.png","FallingNinjaAnimation/FallingNinja10.png","FallingNinjaAnimation/FallingNinja11.png","FallingNinjaAnimation/FallingNinja12.png","FallingNinjaAnimation/FallingNinja13.png","FallingNinjaAnimation/FallingNinja14.png","FallingNinjaAnimation/FallingNinja15.png","FallingNinjaAnimation/FallingNinja16.png","FallingNinjaAnimation/FallingNinja17.png","FallingNinjaAnimation/FallingNinja18.png");

  birdImageLeft        = loadAnimation ("BirdAnimation/Bird1.png","BirdAnimation/Bird2.png","BirdAnimation/Bird3.png","BirdAnimation/Bird4.png","BirdAnimation/Bird5.png","BirdAnimation/Bird6.png","BirdAnimation/Bird7.png","BirdAnimation/Bird8.png","BirdAnimation/Bird9.png","BirdAnimation/Bird10.png","BirdAnimation/Bird11.png","BirdAnimation/Bird12.png");
  birdImageRight       = loadAnimation ("BirdAnimation/RightBird/RightBird1.png","BirdAnimation/RightBird/RightBird2.png","BirdAnimation/RightBird/RightBird3.png","BirdAnimation/RightBird/RightBird4.png","BirdAnimation/RightBird/RightBird5.png","BirdAnimation/RightBird/RightBird6.png","BirdAnimation/RightBird/RightBird7.png","BirdAnimation/RightBird/RightBird8.png","BirdAnimation/RightBird/RightBird9.png","BirdAnimation/RightBird/RightBird10.png","BirdAnimation/RightBird/RightBird11.png","BirdAnimation/RightBird/RightBird12.png");

  blueImageLeft        = loadAnimation ("ObstacleNinjaAnimation/LeftBlue/LeftBlue1.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue2.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue3.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue4.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue5.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue6.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue7.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue8.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue9.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue10.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue11.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue12.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue13.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue14.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue15.png","ObstacleNinjaAnimation/LeftBlue/LeftBlue16.png");
  blueImageRight       = loadAnimation ("ObstacleNinjaAnimation/BlueNinja1.png","ObstacleNinjaAnimation/BlueNinja2.png","ObstacleNinjaAnimation/BlueNinja3.png","ObstacleNinjaAnimation/BlueNinja4.png","ObstacleNinjaAnimation/BlueNinja5.png","ObstacleNinjaAnimation/BlueNinja6.png","ObstacleNinjaAnimation/BlueNinja7.png","ObstacleNinjaAnimation/BlueNinja8.png","ObstacleNinjaAnimation/BlueNinja9.png","ObstacleNinjaAnimation/BlueNinja10.png","ObstacleNinjaAnimation/BlueNinja11.png","ObstacleNinjaAnimation/BlueNinja12.png","ObstacleNinjaAnimation/BlueNinja13.png","ObstacleNinjaAnimation/BlueNinja14.png","ObstacleNinjaAnimation/BlueNinja15.png","ObstacleNinjaAnimation/BlueNinja16.png");

  squirrelImageLeft    = loadAnimation ("SquirrelAnimation/Squirrel1.png","SquirrelAnimation/Squirrel3.png","SquirrelAnimation/Squirrel5.png","SquirrelAnimation/Squirrel7.png","SquirrelAnimation/Squirrel9.png");
  squirrelImageRight   = loadAnimation ("SquirrelAnimation/RightSquirrel/RightSquirrel1.png","SquirrelAnimation/RightSquirrel/RightSquirrel3.png","SquirrelAnimation/RightSquirrel/RightSquirrel5.png","SquirrelAnimation/RightSquirrel/RightSquirrel7.png","SquirrelAnimation/RightSquirrel/RightSquirrel9.png");

}

function setup () {

  createCanvas(500, displayHeight-130);

  blueGroup       = createGroup ();
  birdGroup       = createGroup ();
  squirrelGroup   = createGroup ();
  ninjaBladeGroup = createGroup ();

  score = 0;
  bladesCollected = 0;

  ninja = createSprite (83,360,10,10);
  ninja.addAnimation ("a",climbNinjaImageLeft);
  ninja.addAnimation ("b", climbNinjaImageRight);
  ninja.visible = false;

  gameover = createSprite (250,300,0,0);
  gameover.addImage (gameoverImage);
  gameover.scale = 2;
  gameover.visible=false

  replay = createSprite (250,500,0,0);
  replay.addImage (replayImage);
  replay.scale=0.5;
  replay.visible=false;

  wallLeft = createSprite (90,200,500, displayHeight-130);
  wallLeft.addImage (wallImageLeft);
  wallLeft.velocityY=5;

  wallRight = createSprite (530,200,500, displayHeight-130);
  wallRight.addImage (wallImageRight);
  wallRight.velocityY=5;

}

function draw () {

  background(bgImage);

  if (gameState==="WAIT") {
    opening=createSprite(250,300,0,0);
    opening.addImage(openingImage);
    opening.scale=1.8;

    wallRight.visible=false;
    wallLeft.visible=false;
    ninja.visible=false;

    textSize(0);

  }

  if (gameState==="PLAY") {

    spawnBirds ();
    spwanNinjaBlade ();
    spawnBlue ();
    spawnSquirrel ();

    score = score + Math.round( (getFrameRate()/90).toFixed(2) );

    wallLeft.visible=true;
    wallRight.visible=true;

    if (wallLeft.y>400) { wallLeft.y=300; }
    if (wallRight.y>400) { wallRight.y=300; }

    wallLeft.velocityY = (4+score/100);
    wallRight.velocityY = (4+score/100);

    birdGroup.setVelocityYEach (wallLeft.velocityY);
    squirrelGroup.setVelocityYEach (wallLeft.velocityY);
    blueGroup.setVelocityYEach (wallLeft.velocityY);


    if (keyDown("left_arrow")) { 
      ninja.x=83;
      ninja.changeAnimation ("a",climbNinjaImageLeft);
    }
      
    if (keyDown("right_arrow")) { 
      ninja.x=420; 
      ninja.changeAnimation ("b",climbNinjaImageRight);
    }  

    ninja.visible = true;

    if (ninja.isTouching(ninjaBladeGroup)) {
      ninjaBladeGroup.destroyEach();
      bladesCollected=bladesCollected+1;
    }

    if (ninja.isTouching(birdGroup) || ninja.isTouching(squirrelGroup) || ninja.isTouching(blueGroup) ) {
      gameState="END";
    }

    fill ("Black");
    textSize (16);
    //text ("Score : " +score, 80,20);
    text ("Ninja blades collected : " + bladesCollected, 200, 20);

  }

  drawSprites();

  if (gameState==="END") {

    birdGroup.destroyEach();
    squirrelGroup.destroyEach();
    blueGroup.destroyEach();
    gameover.visible=true;
    replay.visible=true;
    wallLeft.visible=false;
    wallRight.visible=false;
    ninja.visible=false;
    if(mousePressedOver(replay)) { console.log("hi"); }

    fill ("white");
    textSize (16);
    //text ("Score : " +score, 80,20);
    text ("Ninja blades collected : " + bladesCollected, 200, 20);

  }

}

function spawnBirds () {

  if (frameCount % 150 === 0) {

    var position=[59,450];
    var random = Math.round( Math.random(0,1) );

    bird = createSprite (position[random],0,0,0);

    if (random===0) { bird.addAnimation ("bird1",birdImageLeft); }
    else if (random===1) {bird.addAnimation ("bird2",birdImageRight);}

    bird.lifetime = -1;
    bird.velocityY = 8;
    birdGroup.add (bird);
    if (bird.y>=100) { birdGroup.destroyEach(); }

  }

}

function spwanNinjaBlade () {

  if (frameCount % 600 === 0) {

    var position = [70,435];
    var random = Math.round ( Math.random(0,1) );

    ninjaBlade = createSprite (position[random],0,10,10);

    ninjaBlade.addImage (ninjaBladeImage);
    ninjaBlade.lifetime = -1;
    ninjaBlade.velocityY=9;
    ninjaBladeGroup.add (ninjaBlade);
    if (ninjaBladeGroup.y>=100) { ninjaBladeGroup.destroyEach(); }
    ninjaBlade.scale = 0.2;

  }

}

function spawnBlue () {

 if (frameCount % 300 === 0) {
  
  var position = [60, 440];
  var random = Math.round ( Math.random(0,1) );

  blue = createSprite (position[random],0,10,10);

  if (random===0) {  
    blue.addAnimation ("blueNinja",blueImageLeft); 
  }

  if (random===1) {
    blue.addAnimation ("rightNinja", blueImageRight);
  }

  blue.lifetime = -1;
  blue.velocityY = 7;
  blueGroup.add (blue);
  
 }

}

function spawnSquirrel () {

  if (frameCount % 390 === 0) {
    
  var position = [83,450];
  var random = Math.round ( Math.random(0,1) );
  
  laundry = createSprite (250,50,10,10);
  laundry.addImage (laundryImage);
  laundry.velocityY = 7;
  laundry.scale = 1.6;

  squirrel = createSprite (position[random],laundry.y-50,0,0);

  if (random===0) {
    squirrel.addAnimation ("leftsquirrel", squirrelImageLeft);
    squirrel.velocityX=7;
  }

  if (random===1) {
    squirrel.addAnimation ("squirrel",squirrelImageRight);
    squirrel.velocityX=-7;
  }

  squirrel.lifetime = -1;
  squirrel.velocityY = 7;
  squirrelGroup.add (squirrel);

  }

}
