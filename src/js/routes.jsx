import React from 'react';

import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Product from './components/Product.jsx';
import WhereToBuy from './components/WhereToBuy.jsx';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/product" component={Product}/>
        <Route path="/wheretobuy" component={WhereToBuy}/>
    </Route>
);
