//import _ from 'lodash';
import './style/style.css';
import { showWhoBeautiful } from './functions/massageOutput.js';

(function() {
    var nameOut;
    var nameTitle;
    var caption;
    var captionText = 'Good night!';
    var name = '';
    var nameTitleText = 'Simple app';
    var text;
    var elems = document.body.childNodes;

    while (name === '') {
        name = prompt('Enter you name:', '');
    }

    if (name === null) {
        text = 'Sorry, you did not enter a name...';
    }
    else {
        text = 'Who most beatiful people?';
    }

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    nameTitle = document.createElement('title');
    nameTitle.innerHTML = nameTitleText;

    nameOut = document.createElement('div');
    nameOut.innerHTML = name;
    nameOut.classList.add('color_font_red');

    document.head.appendChild(nameTitle);
    document.body.appendChild(caption);
    document.body.appendChild(showWhoBeautiful(text));
    document.body.appendChild(nameOut);
    console.log(name);

    for (var i = 0; i < elems.length; i++) {
        console.log(elems[i]);
    }
})();