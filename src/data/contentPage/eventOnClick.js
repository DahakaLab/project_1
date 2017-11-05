export default function eventOnClickEnter (text, name) {
    button.onclick = function () {
        let firstName = document.getElementById('firstNameText').value;
        let surname = document.getElementById('secondNameText').value;
        let massageText = document.getElementById('massage');
        let nameOut =document.getElementById('nameout');

        console.log(firstName);
        console.log(surname);

        if (firstName === '' && surname === '') {
            text = 'Пожалуйста введи имя и фамилию...';
            name = '... ты по прежнему ничего не ввел, мой дорогой друг.';

            console.log('true');
        } else {
            text = 'Сегодня прекрасен:';
            name = firstName + ' ' + surname;

            console.log('false');
        }

        massageText.innerHTML = text;
        nameOut.textContent = name;
        console.log('click');
    };
}
