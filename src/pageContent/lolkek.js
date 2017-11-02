import '../style/style.css';
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
    let captionText = 'Lolkek Cheburek!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    titleNode();
    document.body.appendChild(caption);
})();