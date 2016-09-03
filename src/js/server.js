import path from 'path';
import express from 'express';
import exphbs from 'express-handlebars';
import subdomain from 'express-subdomain'
import favicon from 'serve-favicon';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App.jsx';

import router from './router.jsx';
import storeRouter from './store-router.jsx'
import apiRouter from './api-router.jsx'

var app = express();
app.use(favicon(path.join(__dirname, '../../public/images/favicon.ico')));
app.use(express.static('public'));
app.use(subdomain('store', storeRouter));
app.use(subdomain('api', storeRouter));
app.use(router);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '../templates'));

var server = app.listen(3080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('listening at http://%s:%s', host, port);
});
