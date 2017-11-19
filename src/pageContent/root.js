import './../style/style.css';
import React, { component } from 'react';
import { render } from 'react-dom';
import App from '../components/app/root.js';
import { titleNode } from '../nodes/titleNode.js';

(function() {
    titleNode();

    render(
        <App/>,
        document.getElementById('root')
    );
})();