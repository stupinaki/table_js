import {Rows as pages, rows} from "../data/rows.js";
import {createRows} from "./createRows.js";
import {getCurrentColumns} from "./handleChangeHide.js";


let pageNumber = 0;
const maxSize = rows.length / 10;

const nextPage = document.querySelector('.nextPage');
nextPage.addEventListener('click', goNext);

const previousPage = document.querySelector('.previousPage');
previousPage.addEventListener('click', goPrevious);

function goNext() {
    previousPage.disabled = false;
    pageNumber++
    const next = pages[pageNumber];
    const columns = getCurrentColumns();
    createRows(next, columns);

    if (pageNumber >= maxSize - 1) {
        nextPage.disabled = true;
    }
}

function goPrevious() {
    if (pageNumber <= 0) {
        previousPage.disabled = true;
        return;
    }
    nextPage.disabled = false;
    pageNumber--
    const previous = pages[pageNumber];
    const columns = getCurrentColumns();
    createRows(previous, columns);
}

export function getCurrentPage(){
    return pages[pageNumber];
}

export function getCurrentPageNumber() {
    return pageNumber;
}



