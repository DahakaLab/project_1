export function linksMenu () {
    var menuLink = document.createElement('menu');
    var indexPageLink = document.createElement('li');
    var indexPage = document.createElement('a');
    var lolkekPageLink = document.createElement('li');
    var lolkekPage = document.createElement('a');
    var viewTextPageLink = document.createElement('li');
    var viewTextPage = document.createElement('a');

    indexPageLink.appendChild(indexPage);
    indexPage.href = '/';

    lolkekPageLink.appendChild(lolkekPage);
    lolkekPage.href = 'lolkek';

    viewTextPageLink.appendChild(viewTextPage);
    viewTextPage.href = 'view_text';

    indexPage.appendChild(document.createTextNode('Главная страница'));
    lolkekPage.appendChild(document.createTextNode('Lolkek'));
    viewTextPage.appendChild(document.createTextNode('Хочешь узнать кто сегодня прекрасен?'));

    menuLink.appendChild(indexPageLink);
    menuLink.appendChild(lolkekPageLink);
    menuLink.appendChild(viewTextPageLink);

    document.body.appendChild(menuLink);
/*<menu>
    <li><a href="#">Смотреть фото</a></li>
    <li><a href="#">Смотреть видео</a></li>
    <li><a href="#">Слушать музыку</a></li>
    </menu>
*/
}