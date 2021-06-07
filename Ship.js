class Ship {
  constructor(x) {
    this.x = x;
    this.score = 0;
    this.respawn();
    this.r = 10; // Changes the hit area.
    this.spriteDown = loadImage('https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2FRatSpriteFrontSmall.png?v=1622660998008');
    this.spriteUp = loadImage('https://cdn.glitch.com/0b4f88e4-79a4-4d4f-8480-d93985988c04%2FRatSpriteBackSmall.png?v=1622660991800');
    this.currentSprite = this.spriteDown;
  }

  respawn() {
    this.y = height - 20;
    this.isUp = false;
    this.isDown = false;
  }

  update() {
    if (this.isUp) {
      this.up();
    } else if (this.isDown) {
      this.down();
    }

    if (this.hasPlayerScoredAPoint()) {
      this.score += 1;
      this.respawn();
    }
  }

  display() {
    // TODO: Replace this with an image:
    // See also: https://p5js.org/reference/#/p5/image
    image(this.currentSprite, this.x - 15, this.y - 15, 32, 32);
    // ellipse(this.x, this.y, this.r * 2, this.r * 2); // Draws the hit area.
  }

  up() {
    this.y -= 1;
    this.currentSprite = this.spriteUp;
  }

  down() {
    this.y += 1;
    this.currentSprite = this.spriteDown;
  }

  hasPlayerScoredAPoint() {
    if (this.y == 0) {
      return true;
    }
    return false;
  }
}