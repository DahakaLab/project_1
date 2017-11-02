import { eventOnClickEnter } from './eventOnClick.js';
import { formInputData } from './../form.js';

export function showWhoBeautiful () {
    let massage = document.createElement('div');
    var nameOut = document.createElement('div');

    var text = 'Пожалуйста введи имя и фамилию...';
    let name = '... мой дорогой друг.';

    massage.id = 'massage';
    massage.innerHTML = text;
    massage.classList = 'color_font_green';

    nameOut.id = 'nameout';
    nameOut.textContent = name;
    nameOut.classList.add('color_font_red');

    formInputData();
    document.body.appendChild(massage);
    document.body.appendChild(nameOut);

    eventOnClickEnter(text, nameOut);
}