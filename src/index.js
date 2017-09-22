import _ from 'lodash';
import './style/style.css';

(function() {
    var admin;
    var name;

    function component () {
        var massage = document.createElement('div');

        massage.innerHTML = 'Кто самая красивая девушка на свете?';
        massage.classList.add('color_font_green');

        return massage;
    }

    name = '';

    while (name === '') {
        name = prompt('Напиши свое имя:', '');
    }

    admin = document.createElement('div');
    admin.innerHTML = name;
    admin.classList.add('color_font_red');


    document.body.appendChild(component());
    document.body.appendChild(admin);
})();