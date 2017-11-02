import '../style/style.css';
import { headerNode } from './../data/nodes/headerNode.js';
import { titleNode } from './../data/nodes/titleNode.js';
import { linksMenu } from './../data/nodes/linksMenu.js';

import { showWhoBeautiful } from '../data/contentPage/whoBeatiful.js';

(function() {
    let caption;
    let captionText = 'Здесь вы узнаете кто сегодня прекрасен!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    headerNode();
    titleNode();
    linksMenu();
    document.body.appendChild(caption);

    showWhoBeautiful();
})();