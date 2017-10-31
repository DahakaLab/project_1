import './../../style/style.css';

export function headerNode () {
    var header, logoPNG, headerCaption, headerParagraph;

    /*logoPNG = document.createElement('img');
    logoPNG.src = 'http://chaisotsvetie.ru/filemanager/listok.png';
    logoPNG.alt = 'Logo';
    logoPNG.id = 'LogoPNG';
    logoPNG.classList = 'logo_header';
    */

    logoPNG = '<img src="http://s1.iconbird.com/ico/2013/9/450/w256h2561380453904Leaf256x25632.png" alt="Logo" id="LogoPNG" class="logo_header">';

    headerCaption = document.createElement('h1');
    headerCaption.innerHTML = logoPNG + 'Чай';

    headerParagraph = document.createElement('p');
    headerParagraph.innerHTML = 'Чайный сервис';

    header = document.createElement('header');
    header.appendChild(headerCaption);
    header.appendChild(headerParagraph);

    document.body.appendChild(header);
}