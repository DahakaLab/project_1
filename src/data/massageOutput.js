export function showWhoBeautiful (x) {
    var massage = document.createElement('div');

    massage.id = 'massage';

    massage.innerHTML = x;
    massage.classList.add('color_font_green');

    return massage;
}