// Libraries
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const socketIO = require('socket.io');

// Project files
const config = require('./shared/config');
const Game = require('./server/game/game');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.use(morgan('tiny'));

app.set('port', config.PORT);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

const g = new Game(io);
g.init();

setInterval(() => {
  g.update();
}, config.INTERVAL);

server.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.PORT}`);
});
