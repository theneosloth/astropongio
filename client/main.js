const Game = require('./game/game');

// eslint-disable-next-line no-undef
const socket = io();
const ctx = document.querySelector('canvas').getContext('2d');

const g = new Game(socket, ctx);
g.localUpdate();

socket.on('update', (data) => {
  g.updateState(data);
  g.drawAll();
});

socket.on('disconnect', () => {
  g.disconnect();
});
