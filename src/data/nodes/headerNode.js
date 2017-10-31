export function headerNode () {
    var headerText;

    headerText = document.createElement('header');
    headerText.innerHTML = 'Header Text.';

    document.body.appendChild(headerText);
}