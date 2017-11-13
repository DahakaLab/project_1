export default function eventOnClickButton () {
    button.onclick = function () {
        let massageText = document.getElementById('massage');
        let nameOut =document.getElementById('nameout');

        var massage = {
            text: 'Пожалуйста введи имя и фамилию...',
            name: '... мой дорогой друг.'
        };

        var user = {
            firstName: document.getElementById('firstNameText').value,
            surname: document.getElementById('secondNameText').value
        };

        if (user.firstName === '' && user.surname === '') {
            massage.text = 'Пожалуйста введи имя и фамилию...';
            massage.name = '... ты по прежнему ничего не ввел, мой дорогой друг.';
        } else {
            massage.text = 'Сегодня прекрасен:';
            massage.name = user.firstName + ' ' + user.surname;
        }

        massageText.innerHTML = massage.text;
        nameOut.textContent = massage.name;
        console.log(JSON.stringify(user));
    };
}
