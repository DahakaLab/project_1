export function formInputData () {
    let formTag = document.createElement('form');
    let fieldsetTag = document.createElement('fieldset');
    let lengendTag = document.createElement('legend');
    let paragraphLabel1 = document.createElement('p');
    let paragraphLabel2 = document.createElement('p');
    let paragraphInput = document.createElement('p');

    formTag.name = 'form1';

    lengendTag.innerHTML = 'Форма ввода:';
    paragraphLabel1.innerHTML = '<label for="firstNameText">Имя </label>' +
        '<input type="text" id="firstNameText" name="firstNameText">';
    paragraphLabel2.innerHTML = '<label for="secondNameText">Фамилия </label>' +
        '<input type="text" id="secondNameText">';
    paragraphInput.innerHTML = '<input type="button" value="Ввод" id="button">';

    fieldsetTag.appendChild(lengendTag);
    fieldsetTag.appendChild(paragraphLabel1);
    fieldsetTag.appendChild(paragraphLabel2);
    formTag.appendChild(fieldsetTag);
    formTag.appendChild(paragraphInput);

    document.body.appendChild(formTag);
}