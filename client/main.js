const Game = require('./game/game');

// eslint-disable-next-line no-undef
const socket = io();
const ctx = document.querySelector('canvas').getContext('2d');

const g = new Game(socket, ctx);
socket.on('connect', () => {

});

socket.on('disconnect', () => {
  g.disconnect();
});

document.addEventListener('DOMContentLoaded', () => {
});