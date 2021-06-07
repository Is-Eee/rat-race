let leftShip;
let rightShip;
let allDebris = [];

// left and right score, one for each player
let leftScore;
let rightScore;

// how hard do you want to make it? :D
const NUM_DEBRIS = 30;

function winScreen(){
  bg = loadImage(
    "https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fgrass.png?v=1621451757603"); 
  textFont("Source Code Pro");
  fill(255);
  stroke(0);
  stroeWeight(10);
  textSize(200);
  text('YOU WIN' , width/2, height/2);
}



// SETUP (Runs one time.)
function setup() {
  
  //ele = createAudio('https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2FThere%20Goes%20My%20Wonderful%20Woman%20(Pixelated%20Nipples%20Version)%20(2).mp3?v=1622883541426');
  // ele.loop();
 
  createCanvas(480,120);
  strokeWeight(8);
  textSize(64);
  textFont("Source Code Pro");
  textAlign(CENTER);
  fill(255);
  bg = loadImage(
    "https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fgrass.png?v=1621451757603"
  );
  
  var can = createCanvas(850, 600);
  can.drawingContext.imageSmoothingEnabled = false;

  leftShip = new Ship(width * 0.33);
  rightShip = new Ship(width * 0.66);

  // create the debris objects
  for (let i = 0; i < NUM_DEBRIS; i++) {
    allDebris.push(new Debris());
  }

  // creating the score objects
  leftScore = new Score(width * 0.33 - 40);
  rightScore = new Score(width * 0.66 + 40);
}


var titleScreen = true;

// DRAW (Runs once every game frame.)
var img;
function preload() {
  img = loadImage("https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2FRatRaceTitle01.png?v=1620845947701");

}





function draw() {
  
  if (titleScreen === true) {

    // Everything drawn for title.
    
    // background(255);
    background(bg, 50);
    image(img, 5, 10);
    stroke(120);
    text(key, 200, 500);
    // https://p5js.org/reference/#/p5/text
    textSize(40);
    text('Click to Start', 280, 320, 250, 200);
    textSize(20);
    text("A Race for Survival", 300, 380, 200, 100);
    textSize(15);
    text("Created by Alex Harbert-Castro, Izzy Duval, James Noble, Majorie Miller, Jackson Fountain", 400, 430);
    fill(51, 51, 0); // R, G, B
    
  
   
  } else {
   
    // Everything drawn for the game.
    
    background(bg);
    
 
    //background("https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fgrass.png?v=1621451757603");
    //document.body.style.background = "url('"+background_image.grass+"')";
    //setBackground.grass;

    leftShip.update();
    rightShip.update();

    leftShip.display();
    rightShip.display();

    // sexy function call
    updateDebrisAndCheckCollisions();

    // pass in the players current score
    leftScore.display(leftShip.score);
    rightScore.display(rightShip.score);
  }
  
}

// sexy function
function updateDebrisAndCheckCollisions() {
  //console.log(allDebris[0].update())
  //console.log(allDebris[0].display())

  for (let i = 0; i < allDebris.length; i++) {
    allDebris[i].update();
    allDebris[i].display();

    if (allDebris[i].hasHitShip(leftShip)) {
      leftShip.respawn();
    } else if (allDebris[i].hasHitShip(rightShip)) {
      rightShip.respawn();
    }
  }
}

var scale = 0.8;
imageMode(CENTER);
image(bg, 0.5*width, 0.5*height, scale*width, scale*img.height*width/img.width); // to fit width

var circ = {};
circ.c = CENTER;
circ.r = radius;

var rect= {};
rect.tl = topleft;
rect.l = length;
rect.h = height;

//var song;
//function preload() {
//song = loadSound("https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2FThere%20Goes%20My%20Wonderful%20Woman%20(Pixelated%20Nipples%20Version)%20(2).mp3?v=1622883541426");
//}



function mousePressed() {
  if (titleScreen === true) {
    titleScreen = false;
  }
}

function keyPressed() {
 
  if (keyCode == UP_ARROW) {
    rightShip.isUp = true;
    rightShip.isDown = false;
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = true;
    rightShip.isUp = false;
    //console.log(rightShip);
  }

  if (keyCode == 87) {
    // keycode is 'w'
    leftShip.isUp = true;
    leftShip.isDown = false;
  } else if (keyCode == 83) {
    // keycode is 's'
    leftShip.isDown = true;
    leftShip.isUp = false;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    rightShip.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    rightShip.isDown = false;
  }

  if (keyCode == 87) {
    leftShip.isUp = false;
  } else if (keyCode == 83) {
    leftShip.isDown = false;
  }
}


