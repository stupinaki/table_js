import {JSON as pages, rows} from "../data/json.js";
import {createRows} from "./createRows.js";
import {columns} from "../data/columns.js";

let pageNumber = 0;
const maxSize = rows.length / 10;
export const page = getCurrentPage;

const nextPage = document.querySelector('.nextPage');
nextPage.addEventListener('click', goNext);

const previousPage = document.querySelector('.previousPage');
previousPage.addEventListener('click', goPrevious);

//функция срабатывает при клике на кнопку Next и рендерит следующий массив
//если мы дошли до последней страницы, то кнопка становится неактивной
function goNext() {
    previousPage.disabled = false;
    pageNumber++
    const next = pages[pageNumber];
    createRows(next, columns);

    if (pageNumber >= maxSize - 1) {
        nextPage.disabled = true;
    }
}

//функция срабатывает при клике на кнопку Previous и рендерит предыдущий массив
//если мы находимся на начальной странице, то кнопка становится неактивной
function goPrevious() {
    if (pageNumber <= 0) {
        previousPage.disabled = true;
        return;
    }
    nextPage.disabled = false;
    pageNumber--
    const previous = pages[pageNumber];
    createRows(previous, columns);
}

//функция получает текущий номер страницы, который равен индексу в массиве страниц
//на основании этих данных остальные функции рендарят нужную страницу
export function getCurrentPage(){
    return pages[pageNumber];
}


