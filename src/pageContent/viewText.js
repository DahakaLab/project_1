import './../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './../data/components/app/viewText.js';
import { titleNode } from './../data/nodes/titleNode.js';
import eventOnClickEnter from './../data/contentPage/eventOnClick.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    var text = 'Пожалуйста введи имя и фамилию...';
    var nameOut = '... мой дорогой друг.';

    titleNode();
    eventOnClickEnter(text, nameOut);
})();