export function eventOnClickEnter (text, nameOut) {
    button.onclick = function () {
        let firstName = document.getElementById('firstNameText').value;
        let surname = document.getElementById('secondNameText').value;
        let massageText = document.getElementById('massage');

        console.log(firstName);
        console.log(surname);

        if (firstName === '' && surname === '') {
            text = 'Пожалуйста введи имя и фамилию...';
            nameOut.textContent = '... ты по прежнему ничего не ввел, мой дорогой друг.';

            console.log('true');
        } else {
            text = 'Сегодня прекрасен:';
            nameOut.textContent = firstName + ' ' + surname;

            console.log('false');
        }

        massageText.innerHTML = text;
        console.log('click');
    };
}
