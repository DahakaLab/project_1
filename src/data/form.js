export function formInputData () {
    var formTag = document.createElement('form');
    var fieldsetTag = document.createElement('fieldset');
    var lengendTag = document.createElement('legend');
    var paragraphLabel1 = document.createElement('p');
    var paragraphLabel2 = document.createElement('p');
    var paragraphInput = document.createElement('p');

    paragraphLabel1.innerHTML = '<label for="firstNameText">First Name </label><input type="text" id="firstNameText">';
    paragraphLabel2.innerHTML = '<label for="secondTextName">Second Name </label><input type="text" id="secondTextName">';
    paragraphInput.innerHTML = '<input type="submit" value="Send">';
    lengendTag.innerHTML = 'Contact information';

    fieldsetTag.appendChild(lengendTag);
    fieldsetTag.appendChild(paragraphLabel1);
    fieldsetTag.appendChild(paragraphLabel2);
    formTag.appendChild(fieldsetTag);
    formTag.appendChild(paragraphInput);

    formTag.id = 'formId';
    return formTag;
}

