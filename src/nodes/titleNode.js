export function titleNode() {
    let titleText, logoTitle;

    logoTitle = document.createElement('link');
    logoTitle.rel = 'shortcut icon';
    logoTitle.href = 'http://s1.iconbird.com/ico/2013/9/450/w256h2561380453904Leaf256x25632.png';
    logoTitle.type = 'image/png';

    titleText = document.createElement('title');
    titleText.innerHTML = 'Чайный сервис';

    document.head.appendChild(logoTitle);
    document.head.appendChild(titleText);
}