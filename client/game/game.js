const config = require('../../shared/config');
const Ball = require('../../shared/entity/ball');
const Entity = require('../../shared/entity/entity');
const Draw = require('./draw');
const Input = require('./input');

class Game {
  constructor(socket, context) {
    this.socket = socket;
    this.context = context;
    this.player = new Entity(0, { x: 100, y: 100 }, '/static/img/starship.svg', 40, 40);
    this.entities = new Map();
    this.entities.set(0, new Ball());
    this.draw = new Draw(context);
    this.input = new Input();
  }

  updateState(newState) {
    newState.entities.forEach((e) => {
      if (this.entities.has(e.id)) {
        // Server result
        this.entities.get(e.id).position = e.position;
      } else {
        this.entities.set(e.id, new Entity(e.id, e.position, e.sprite, e.width, e.height));
      }
    });
  }

  localUpdate() {
    this.entities.forEach((e) => {
      e.update();
    });
    this.drawAll();
    window.requestAnimationFrame(this.localUpdate.bind(this));
  }

  drawAll() {
    this.draw.clear();
    this.draw.drawEntity(this.player);
    this.entities.forEach((ent) => this.draw.drawEntity(ent));
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
