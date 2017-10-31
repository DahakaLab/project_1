//import _ from 'lodash';
import '../style/style.css';
import { linksMenu } from '../data/nodes/linksMenu.js';
import { headerNode } from './../data/nodes/headerNode.js';
import { titleNode } from './../data/nodes/titleNode.js';

(function() {
    var caption;
    var captionText = 'Main page!';

    caption = document.createElement('h1');
    caption.innerHTML = captionText;

    titleNode();
    headerNode();
    linksMenu();
    document.body.appendChild(caption);
})();