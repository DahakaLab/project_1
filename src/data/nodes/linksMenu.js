export function linksMenu () {
    var navLink = document.createElement('nav');
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

    navLink.classList = 'active';

    navLink.appendChild(indexPageLink);
    navLink.appendChild(lolkekPageLink);
    navLink.appendChild(viewTextPageLink);

    document.body.appendChild(navLink);
/*<menu>
    <li><a href="#">Смотреть фото</a></li>
    <li><a href="#">Смотреть видео</a></li>
    <li><a href="#">Слушать музыку</a></li>
    </menu>
*/
}