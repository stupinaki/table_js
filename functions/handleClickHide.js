import {columns} from "../data/columns.js";
import {getCurrentPage} from "./pagination.js";
import {createHeader} from "./createHeader.js";
import {createRows} from "./createRows.js";


export function handleClickHide(e){
    const rows = getCurrentPage();
    const divHide = document.querySelector('.hide').children;
    const checkBoxes = Array.from(divHide);
    //получаем только отмеченные чекбоксы,
    // далее только имена их классов, которые соответствуют полю id в массиве columns
    const checked = checkBoxes.filter(checkBox => checkBox.checked === true).map(checkBox => checkBox.className);
    //получаем значение свойства checked, если оно true - колонка выбрана и видно, иначе скрыть колонку
    const isVisible = !e.target.checked;

    if(isVisible){
        const stillVisible = columns.filter(column => checked.includes(column.id));
        createHeader(stillVisible);
        createRows(rows, stillVisible);
        return;
    }
    createHeader(columns);
    createRows(rows, columns);
}

//todo если убрать галочку со всех элемеентов, а потом выбрать 1, то появятся все , но галочки не будут заполнены
//todo если скрыть колонку и перейти на следующую страницу, то заголовок будет скрыт, но сама голонка будет на месте