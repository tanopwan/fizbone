import express from 'express';

var storeRouter = express.Router();

storeRouter.get('/', function(req, res) {
    res.send('Welcome to our Store! ^^');
});

export default storeRouter;
