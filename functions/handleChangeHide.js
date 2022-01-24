import {columns} from "../data/columns.js";
import {getCurrentPage} from "./pagination.js";
import {createHeader} from "./createHeader.js";
import {createRows} from "./createRows.js";

//выносим массив с видимыми колонками чтобы его моэно было передать в другие функции
//например, в сортировку
let stillVisible = columns;

export function handleChangeHide(e){
    const rows = getCurrentPage();
    const divHide = document.querySelector('.hide').children;
    const checkBoxes = Array.from(divHide);
    //получаем только отмеченные чекбоксы,
    // далее только имена их классов, которые соответствуют полю id в массиве columns
    const checked = checkBoxes.filter(checkBox => checkBox.checked === true).map(checkBox => checkBox.className);
    stillVisible = columns.slice().filter(column => checked.includes(column.id));
    createHeader(stillVisible);
    createRows(rows, stillVisible);
}

export function getCurrentColumns() {
    return stillVisible;
}