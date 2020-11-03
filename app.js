// Libraries
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const socketIO = require('socket.io');

// Project files
const config = require('./utils/config');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

morgan('tiny');

app.set('port', config.PORT);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'views/index.html'));
});

app.use('/static', express.static(path.join(__dirname, '/static')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

setInterval(() => {
  io.sockets.emit('update',
    {
      entities: [
        {
          id: 1, position: { x: 100, y: 100 }, sprite: '/static/img/torpedo.svg', width: 30, height: 30,
        },
      ],
    });
}, config.INTERVAL);

server.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${config.PORT}`);
});
