// Libraries
const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const socketIO = require('socket.io');

// Project files
const config = require('./utils/config');

const app = express();
app.set('port', config.PORT);

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/static', express.static(`${__dirname}/static`));

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});
