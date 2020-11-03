// eslint-disable-next-line no-undef
const socket = io();
const Player = require('./player/player.js');

const game = document.querySelector('canvas').getContext('2d');
const WIDTH = 800;
const HEIGHT = 600;

socket.on('message', (data) => {
  game.fillText(data, WIDTH / 2, HEIGHT / 2);
});
