import '../style/style.css';
import { headerNode } from './../data/nodes/headerNode.js';
import { titleNode } from './../data/nodes/titleNode.js';
import { linksMenu } from './../data/nodes/linksMenu.js';

(function() {
    var caption;
    var captionText = 'Lolkek Cheburek!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    headerNode();
    titleNode();
    linksMenu();
    document.body.appendChild(caption);
})();