const Ball = require('../../shared/entity/ball');

class Game {
  constructor(socket) {
    this.entities = [new Ball()];
    this.lastUpdateTime = Date.now();
    this.socket = socket;
  }

  init() {
    this.socket.on('connection', (socket) => {
      console.log('A user connected.');
      socket.on('disconnect', () => {
        console.log('A user disconnected.')
      })
    });


  }

  update() {
    const currentUpdateTime = Date.now();
    const deltaTime = (currentUpdateTime - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = currentUpdateTime;
    this.entities.forEach((e) => {
      e.update(deltaTime);
    });

    this.socket.sockets.emit('update',
      {
        entities: this.entities,
      });
  }
}

module.exports = Game;
