//import _ from 'lodash';
import './style/style.css';
import { whoBeautiful } from './functions/massageOutput.js';

(function() {
    var nameOut;
    var name;
    var text;

    name = '';

    while (name === '') {
        name = prompt('Напиши свое имя:', '');
    }

    if (name === null) {
        text = 'К сожалению Вы не ввели имя...';
    }
    else {
        text = 'Кто самая красивая девушка на свете?';
    }

    nameOut = document.createElement('div');
    nameOut.innerHTML = name;
    nameOut.classList.add('color_font_red');


    document.body.appendChild(whoBeautiful(text));
    document.body.appendChild(nameOut);
    console.log(name);
})();