import './../style/style.css';
import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { titleNode } from '../nodes/titleNode.js';
import App from "../containers/app";

(function() {
    titleNode();

    render((
        <BrowserRouter>
            <App/>
        </BrowserRouter>
        ),document.getElementById('root')
    )
})();