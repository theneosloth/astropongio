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
    this.lastUpdateTime = Date.now();
    this.animationFrameHandle = undefined;
  }

  updateState(newState) {
    newState.entities.forEach((e) => {
      if (this.entities.has(e.id)) {
        // Server result
        const currEnt = this.entities.get(e.id);
        currEnt.position = e.position;
        currEnt.velocity = e.velocity;
      } else {
        this.entities.set(e.id, new Entity(e.id, e.position, e.sprite, e.width, e.height));
      }
    });
  }

  localUpdate() {
    const currentUpdateTime = Date.now();
    const deltaTime = (currentUpdateTime - this.lastUpdateTime) / 1000;
    this.entities.forEach((e) => {
      e.update(deltaTime);
    });
    this.lastUpdateTime = currentUpdateTime;

    this.drawAll();
    this.animationFrameHandle = window.requestAnimationFrame(this.localUpdate.bind(this));
  }

  drawAll() {
    this.draw.clear();
    this.draw.drawEntity(this.player);
    this.entities.forEach((ent) => this.draw.drawEntity(ent));
  }

  disconnect() {
    window.cancelAnimationFrame(this.animationFrameHandle);
    this.context.clearRect(0, 0, config.WIDTH, config.HEIGHT);
    this.context.fillStyle = 'black';
    this.context.fillRect(0, 0, config.WIDTH, config.HEIGHT);
    this.context.fillStyle = 'white';
    this.context.fillText('DISCONNECTED', config.WIDTH / 2, config.HEIGHT / 2);
  }
}

module.exports = Game;
