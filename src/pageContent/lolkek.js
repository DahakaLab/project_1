import './../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './../data/components/app/lolkek.js';
import { titleNode } from './../data/nodes/titleNode.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    titleNode();
})();