class Debris {
  constructor() {
    this.r = 5;
    this.resetDebris();
    
    var cats = [
      "https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fcccaat1.png?v=1622662289863", // 0
      "https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fcccaat2.png?v=1622662297949", // 1
      "https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fcccaat3.png?v=1622662306479"  // 2
    ];
    
    var randomCatIndex = floor(Math.random() * 3);
    var randomCat = cats[randomCatIndex];
    console.log(randomCat);
    this.sprite = loadImage(randomCat);
  
    /*
    if (Math.random() > 0.5) {
      // this.sprite = ???
    } else {
      // this.sprite = ???
    }
    */
    
  }

  resetDebris() {
    this.y = random(height - 70);

    let spawnLeftSide = random(1) < 0.5;

    if (spawnLeftSide) {
      this.x = random(-width, 0);
      this.isGoingLeft = false;
    } else {
      this.x = random(width, width * 2);
      this.isGoingLeft = true;
    }
  }

  update() {
    if (this.isGoingLeft) {
      this.x--;
    } else {
      this.x++;
    }

    if (this.isOffScreen()) {
      this.resetDebris();
    }
  }

  isOffScreen() {
    if (this.isGoingLeft && this.x && -5) {
      return true;
    } else if (!this.isGoingLeft && this.x > width + 5) {
      return true;
    }
    return false;
  }

  display() {
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    // let myGuy = loadImage('https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2Fsprites%20png.png?v=1622056552972');
    image(this.sprite, this.x - 16.5, this.y - 16.5);
  }

  hasHitShip(ship) {
    if (dist(this.x, this.y, ship.x, ship.y) < this.r + ship.r) {
      return true;
    }
    return false;
  }
}
