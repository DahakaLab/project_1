import _ from 'lodash';

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'Lolkek'], ' ');

    return element;
}

document.body.appendChild(component());