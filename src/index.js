//import _ from 'lodash';
import './style/style.css';
import { showWhoBeautiful } from './data/massageOutput.js';
import { formInputData } from './data/form.js';
import { eventOnClickEnter } from './data/eventOnClick.js';

(function() {
    var nameOut, nameTitle, caption, name, text, button;
    var captionText = 'Hello!';
    var nameTitleText = 'Simple app';

    text = 'Please enter you name and surname...';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    nameTitle = document.createElement('title');
    nameTitle.innerHTML = nameTitleText;

    name = '... my dear friend.';

    nameOut = document.createElement('div');
    nameOut.textContent = name;
    nameOut.classList.add('color_font_red');

    document.head.appendChild(nameTitle);
    document.body.appendChild(formInputData());
    document.body.appendChild(caption);
    document.body.appendChild(showWhoBeautiful(text));
    document.body.appendChild(nameOut);

    button = document.getElementById('button');


    eventOnClickEnter(text, nameOut);
})();