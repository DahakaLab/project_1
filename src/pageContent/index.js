//import _ from 'lodash';
import './../style/style.css';
import React from 'react';
import { render } from 'react-dom';
import App from './app.js';
import { linksMenu } from './../data/nodes/linksMenu.js';
import { headerNode } from './../data/nodes/headerNode.js';
import { titleNode } from './../data/nodes/titleNode.js';

(function() {
    var caption;
    var captionText = 'Главная страница чайного сервиса!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    titleNode();
    headerNode();
    linksMenu();
    document.body.appendChild(caption);

    render(<App/>, document.getElementById('main'));
})();