export function linksMenu () {
    var indexPage = document.createElement('a');
    var lolkekPage = document.createElement('a');
    var viewTextPage = document.createElement('a');

    indexPage.href = '/';

    lolkekPage.href = 'lolkek';

    viewTextPage.href = 'view_text';

    indexPage.appendChild(document.createTextNode('Main Page'));
    lolkekPage.appendChild(document.createTextNode('Lolkek'));
    viewTextPage.appendChild(document.createTextNode('View Text'));

    document.body.appendChild(indexPage);
    document.body.appendChild(lolkekPage);
    document.body.appendChild(viewTextPage);
}