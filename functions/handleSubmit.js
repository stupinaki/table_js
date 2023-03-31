import {updateRowValue} from "./updateRowValue.js";
import {getCurrentPage} from "./pagination.js";
import {createRows} from "./createRows.js";
import {getCurrentColumns} from "./handleChangeHide.js";


//функция обработки соботия submit
export function handleSubmit(e){
    //получаем актуальные колонки, с учетом тех, что были скрыты
    const columns = getCurrentColumns()
    const rows = getCurrentPage();
    //отключает поведение элемента по умолчанию.
    // Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit).
    e.preventDefault();
    const editForm = e.currentTarget;
    editForm.style = `display: none`;
    const inputValues = {};
    [...e.target.elements].filter(input => input.name).forEach(input => inputValues[input.name] =  input.value);

    const rowID = e.currentTarget.getAttribute('data-targetId');
    const targetRow = rows.find(row => row.id === rowID);
    const paths = Object.keys(inputValues);

    paths.forEach(path => {
        updateRowValue(targetRow,path,inputValues[path]);
    });
    createRows(rows, columns);
}