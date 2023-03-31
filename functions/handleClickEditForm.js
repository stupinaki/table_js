import {getCurrentPage} from "./pagination.js";
import {createElementHTML} from "./createElementHTML.js";
import {handleSubmit} from "./handleSubmit.js";

export function handleClickEditForm(e) {
    const rows = getCurrentPage();
    const editForm = document.forms.form;
    editForm.style = `display: inline-grid`;

//получаем id строки, по которой нажали
    const currentTargetId = e.currentTarget.id;
//добавляем переключатель, который если класс 'editInProgress' есть, то удалит его, наче добавит
    e.currentTarget.classList.toggle('editInProgress');
    const targetRow = rows.find(row => row.id === currentTargetId);

//получаем по очереди элемеенты формы и делаем их предзаполненными
    const firstName = editForm.elements['name.firstName'];
    firstName.value = targetRow.name.firstName;

    const lastName = editForm.elements['name.lastName'];
    lastName.value = targetRow.name.lastName;

    const about = editForm.elements.about;
    about.value = targetRow.about;

    const eyeColor = editForm.elements.eyeColor;
    eyeColor.innerHTML = '';
    const colors = [...new Set(rows.map(row => row.eyeColor))];
    colors.forEach(color => {
        const option = createElementHTML('option', color);
        if (color === targetRow.eyeColor) {
            option.selected = true;
        }
        eyeColor.append(option);
    });
//для передачи id в handleSubmit  используется data- аттрибут
    editForm.setAttribute('data-targetId', currentTargetId);
    editForm.addEventListener('submit', handleSubmit);
}


