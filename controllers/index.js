const indexRouter = require('express').Router();

indexRouter.get('/', (request, response) => {
    response.send('Lol');
});

module.exports = indexRouter;
