import {getCurrentPage} from "./pagination.js";
import {columns} from "../data/columns.js";
import {get} from './get.js';
import {createRows} from "./createRows.js";

//todo сортировка должна сортировать все данные, а не только 1 страницу

//обрабатывает событие 'click' и  сортирует данные
//перезаписывает значение "direction" в зависимости от направления сортировки
// отображает "⧋" в зависимости от направления сортировки
export function handleClickSort(e){
    const rows = getCurrentPage();
    const sortParams = e.currentTarget.id;
    const targetColumn = columns.find(column => column.id === sortParams);
    const arrow = document.getElementById(`arrow ${sortParams}`);
    const arrows = document.getElementsByClassName('arrows');
    const arrowsArray = Array.from(arrows);

    console.log('page', rows)

    if(targetColumn.direction === '' || targetColumn.direction === 'non-alphabetic'){
        rows.sort((row1, row2) => {
            const str1 = get(row1,sortParams);
            const str2 = get(row2,sortParams);
            return str1.localeCompare(str2);
        });
        columns.forEach(column => column.direction = '');
        targetColumn.direction = 'alphabetical';
        arrowsArray.forEach(tag => tag.style = 'display: none');
        arrow.style = 'transform: rotate(180deg)';
    }else{
        rows.sort((row1, row2) => {
            const str1 = get(row1,sortParams);
            const str2 = get(row2,sortParams);
            return str2.localeCompare(str1);
        });
        columns.forEach(column => column.direction = '');
        targetColumn.direction = 'non-alphabetic';
        arrowsArray.forEach(tag => tag.style = 'display: none');
        arrow.style = 'display: block';
    }
    createRows(rows, columns);
}
