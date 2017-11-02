import '../style/style.css';
import React, { component } from 'react';
import ReactDOM, { render } from 'react-dom';
import App from './../data/components/app.js';
import { titleNode } from './../data/nodes/titleNode.js';
import { showWhoBeautiful } from '../data/contentPage/whoBeatiful.js';

(function() {
    render(
        <App/>,
        document.getElementById('root')
    );

    let caption;
    let captionText = 'Здесь вы узнаете кто сегодня прекрасен!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    titleNode();
    document.body.appendChild(caption);

    showWhoBeautiful();
})();