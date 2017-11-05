import './../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './../data/components/app/root.js';
import { titleNode } from './../data/nodes/titleNode.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    titleNode();
})();