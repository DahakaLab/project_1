export function whoBeautiful (x) {
    var massage = document.createElement('div');

    massage.innerHTML = x;
    massage.classList.add('color_font_green');

    return massage;
}