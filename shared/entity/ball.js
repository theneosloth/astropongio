const Entity = require('./entity');

const config = require('../config');

const { WIDTH, HEIGHT } = config;

class Ball extends Entity {
  constructor() {
    super(0, { x: WIDTH / 2, y: HEIGHT / 2 }, '/static/img/ufo.svg', 50, 50);
    this.velocity.y = 3;
  }

  update() {
    super.update();

    //speeeeeen
    this.rotation += 5;
    this.rotation %= 360;

    //bounce
    if (this.position.x + this.width / 2 >= WIDTH || this.position.x - this.width / 2 < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y + this.height / 2 >= HEIGHT || this.position.y - this.height / 2 < 0) {
      this.velocity.y *= -1;
    }
  }
}

module.exports = Ball;
