//import _ from 'lodash';
import './style/style.css';
import { showWhoBeautiful } from './data/massageOutput.js';
import { formInputData } from './data/form.js';

(function() {
    var nameOut;
    var nameTitle;
    var caption;
    var captionText = 'Hello!';
    var name;
    var nameTitleText = 'Simple app';
    var text;
    var button;

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

    button.onclick = function () {
        var firstName = document.getElementById('firstNameText').value;
        var surname = document.getElementById('secondTextName').value;
        var massageText = document.getElementById('massage');

        console.log(firstName);
        console.log(surname);

        text = 'lolkek';
        if (firstName === '' && surname === ''){
            text = 'Please enter you name and surname...';
            firstName = 'you still did not enter anything';
            surname = 'my dear friend.';
            console.log('true');
        }
        else {
            text = 'Who most beatiful people?';
            console.log('false');
        }

        massageText.innerHTML = text;

        nameOut.textContent = firstName + ' ' + surname;

        showWhoBeautiful(text);
    };
})();