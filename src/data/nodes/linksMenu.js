export function linksMenu () {
    let navLink = document.createElement('nav');
    let indexPageLink = document.createElement('li');
    let indexPage = document.createElement('a');
    let lolkekPageLink = document.createElement('li');
    let lolkekPage = document.createElement('a');
    let viewTextPageLink = document.createElement('li');
    let viewTextPage = document.createElement('a');

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