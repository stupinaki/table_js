import {getCurrentPageNumber} from "./pagination.js";
import {get} from './get.js';
import {createRows} from "./createRows.js";
import {rows} from "../data/rows.js";
import {chunk} from "./chunk.js";
import {getCurrentColumns} from "./handleChangeHide.js";


//обрабатывает событие 'click' и  сортирует данные
//перезаписывает значение "direction" в зависимости от направления сортировки
// отображает "⧋" в зависимости от направления сортировки
export function handleClickSort(e){
    const columns = getCurrentColumns()
    const sortParams = e.currentTarget.id;
    const targetColumn = columns.find(column => column.id === sortParams);
    const arrow = document.getElementById(`arrow ${sortParams}`);
    const arrows = document.getElementsByClassName('arrows');
    const arrowsArray = Array.from(arrows);

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

    //чтобы сортировка была не в рамках одной страницы, а по всему файлу:
    //отсортированный массив rows, разделяем на массивы по 10 элементов
    //получаем номер текушей страницы
    //выводим массив чей индекс соответствует номеру страницы
    const pages = chunk(rows, 10);
    const currentPageNumber = getCurrentPageNumber();
    const page = pages[currentPageNumber];
    createRows(page, columns);
}
