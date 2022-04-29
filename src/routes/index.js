import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout';

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
            </Switch>
        </BrowserRouter>
    );
}