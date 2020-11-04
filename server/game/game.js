const Ball = require('../../shared/entity/ball');

class Game {
  constructor() {
    this.entities = [new Ball()];
  }
}

module.exports = Game;
