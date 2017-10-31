export function titleNode (){
    var titleText;

    titleText = document.createElement('title');
    titleText.innerHTML = 'Simple App';

    document.body.appendChild(titleText);
}