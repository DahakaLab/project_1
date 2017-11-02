//import _ from 'lodash';
import './../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './../data/components/app.js';
import { titleNode } from './../data/nodes/titleNode.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    let caption;
    let captionText = 'Главная страница чайного сервиса!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    titleNode();
    document.body.appendChild(caption);
})();