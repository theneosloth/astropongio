const config = require('../../utils/config');
const Entity = require('./entity');

class Game {
  constructor(socket, context) {
    this.socket = socket;
    this.context = context;
    this.entities = [];
  }

  draw() {
    this.context.clearRect(0, 0, config.WIDTH, config.HEIGHT);
    this.context.fillStyle = "red";
    this.context.fillRect(0, 0, config.WIDTH, config.HEIGHT);
    // this.entities.forEach((ent) => ent.draw(this.context));
  }

  disconnect() {
    this.context.clearRect(0, 0, config.WIDTH, config.HEIGHT);
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, config.WIDTH, config.HEIGHT);
    this.context.fillStyle = 'white';
    this.context.fillText('DISCONNECTED', config.WIDTH / 2, config.HEIGHT / 2);
  }
}

module.exports = Game;
