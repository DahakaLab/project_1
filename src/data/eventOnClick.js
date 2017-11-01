import { showWhoBeautiful } from './contentPage/whoBeatiful.js';

export function eventOnClickEnter (text, nameOut) {
    button.onclick = function () {
        var firstName = document.getElementById('firstNameText').value;
        var surname = document.getElementById('secondTextName').value;
        var massageText = document.getElementById('massage');

        console.log(firstName);
        console.log(surname);


        if (firstName === '' && surname === '') {
            text = 'Пожалуйста введи имя и фамилию...';
            firstName = '... ты по прежнему ничего не ввел,';
            surname = 'мой дорогой друг.';

            console.log('true');
        } else {
            text = 'Сегодня прекрасен:';

            console.log('false');
        }

        massageText.innerHTML = text;

        nameOut.textContent = firstName + ' ' + surname;

        console.log('click');
    };
}
