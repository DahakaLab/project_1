import './../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from '../components/app/viewText.js';
import { titleNode } from '../nodes/titleNode.js';
import eventOnClickButton from '../contentPage/eventOnClick.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    titleNode();
    eventOnClickButton();
})();