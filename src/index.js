//import _ from 'lodash';
import './style/style.css';
import { whoBeautiful } from './functions/massageOutput.js';

(function() {
    var admin;
    var name;

    name = '';

    while (name === '') {
        name = prompt('Напиши свое имя:', '');
    }

    admin = document.createElement('div');
    admin.innerHTML = name;
    admin.classList.add('color_font_red');


    document.body.appendChild(whoBeautiful());
    document.body.appendChild(admin);
})();