import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Checkout from '../Pages/Checkout';

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    );
}