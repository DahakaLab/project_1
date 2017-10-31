import { eventOnClickEnter } from './../data/eventOnClick.js';
import { formInputData } from './../data/form.js';

export function showWhoBeautiful () {
    var massage = document.createElement('div');
    var nameOut = document.createElement('div');
    var button = document.getElementById('button');

    var text = 'Пожалуйста введи имя и фамилию...';
    var name = '... мой дорогой друг.';

    massage.id = 'massage';

    massage.innerHTML = text;
    massage.classList = 'color_font_green';

    nameOut.textContent = name;
    nameOut.classList.add('color_font_red');

    formInputData();
    document.body.appendChild(massage);
    document.body.appendChild(nameOut);

    eventOnClickEnter(text, nameOut);
}