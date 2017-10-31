import { showWhoBeautiful } from './massageOutput.js';

export function eventOnClickEnter (text, nameOut) {
    button.onclick = function () {
        var firstName = document.getElementById('firstNameText').value;
        var surname = document.getElementById('secondTextName').value;
        var massageText = document.getElementById('massage');

        console.log(firstName);
        console.log(surname);

        text = 'lolkek';
        if (firstName === '' && surname === '') {
            text = 'Please enter you name and surname...';
            firstName = '... you still did not enter anything';
            surname = 'my dear friend.';

            console.log('true');
        } else {
            text = 'Who most beatiful people?';

            console.log('false');
        }

        massageText.innerHTML = text;

        nameOut.textContent = firstName + ' ' + surname;

        console.log('click');
    };
}
