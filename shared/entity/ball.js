const Entity = require('./entity');

const config = require('../config');

const { WIDTH, HEIGHT } = config;

class Ball extends Entity {
  constructor() {
    super(0, { x: 110, y: 110 }, '/static/img/ufo.svg', 50, 50);
    this.velocity.y = 100;
    this.velocity.x = 300;
  }

  update(dt) {
    super.update(dt);
    //speeeeeen
    this.rotation += 100 * dt;
    this.rotation %= 360;

    //bounce
    if (this.position.x + this.width / 2 > WIDTH) {
      this.velocity.x *= -1;
      this.position.x = WIDTH - this.width / 2;
    }

    if (this.position.x - this.width / 2 < 0) {
      this.velocity.x *= -1;
      this.position.x = this.width / 2;
    }

    if (this.position.y + this.height / 2 > HEIGHT) {
      this.velocity.y *= -1;
      this.position.y = HEIGHT - this.height / 2;
    }

    if (this.position.y - this.height / 2 < 0) {
      this.velocity.y *= -1;
      this.position.y = this.height / 2;
    }
  }
}

module.exports = Ball;
