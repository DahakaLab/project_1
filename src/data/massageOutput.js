import { eventOnClickEnter } from './../data/eventOnClick.js';
import { formInputData } from './../data/form.js';

export function showWhoBeautiful () {
    var massage = document.createElement('div');
    var nameOut = document.createElement('div');
    var text = 'Please enter you name and surname...';
    var button = document.getElementById('button');
    var name = '... my dear friend.';

    massage.id = 'massage';

    massage.innerHTML = text;
    massage.classList.add('color_font_green');

    nameOut.textContent = name;
    nameOut.classList.add('color_font_red');

    formInputData();
    document.body.appendChild(massage);
    document.body.appendChild(nameOut);

    eventOnClickEnter(text, nameOut);
}