import './../style/style.css';
import 'babel-polyfill';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { titleNode } from '../nodes/titleNode.js';
import App from "../containers/app";

(function() {
    titleNode();

    render((
        <HashRouter>
            <App/>
        </HashRouter>
        ),document.getElementById('root')
    )
})();