export function headerNode () {
    var headerText;

    headerText = document.createElement('header');
    headerText.innerHTML = 'Чайный сервис';

    document.body.appendChild(headerText);
}