const config = require('../../shared/config');
const Entity = require('../../shared/entity');
const Draw = require('./draw');

class Game {
  constructor(socket, context) {
    this.socket = socket;
    this.context = context;
    this.player = new Entity({ x: 0, y: 0 }, '/static/img/starship.svg', 40, 40);
    this.entities = new Map();
    this.draw = new Draw(context);
    this.draw.addSprite('/static/img/starship.svg');
  }

  updateState(newState) {
    newState.entities.forEach((e) => {
      if (this.entities.has(e.id)) {
        this.entities.get(e.id).position = e.position;
      } else {
        this.entities.set(e.id, new Entity(e.position, e.sprite, e.width, e.height));
      }
    });
  }

  drawAll() {
    this.draw.clear();
    this.draw.drawEntity(this.player);
    //this.entities.forEach((ent) => ent.draw(this.context));
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
