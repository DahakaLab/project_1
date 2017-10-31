export function formInputData () {
    var formTag = document.createElement('form');
    var fieldsetTag = document.createElement('fieldset');
    var lengendTag = document.createElement('legend');
    var paragraphLabel1 = document.createElement('p');
    var paragraphLabel2 = document.createElement('p');
    var paragraphInput = document.createElement('p');

    formTag.name = 'form1';

    lengendTag.innerHTML = 'Форма ввода:';
    paragraphLabel1.innerHTML = '<label for="firstNameText">Имя </label>' +
        '<input type="text" id="firstNameText" name="firstNameText">';
    paragraphLabel2.innerHTML = '<label for="secondTextName">Фамилия </label>' +
        '<input type="text" id="secondTextName">';
    paragraphInput.innerHTML = '<input type="button" value="Ввод" id="button">';

    fieldsetTag.appendChild(lengendTag);
    fieldsetTag.appendChild(paragraphLabel1);
    fieldsetTag.appendChild(paragraphLabel2);
    formTag.appendChild(fieldsetTag);
    formTag.appendChild(paragraphInput);

    document.body.appendChild(formTag);
}