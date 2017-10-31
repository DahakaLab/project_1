export function titleNode (){
    var titleText;

    titleText = document.createElement('title');
    titleText.innerHTML = 'Чайный сервис';

    document.body.appendChild(titleText);
}