import {createElementHTML} from "./createElementHTML.js";
import {insertsElementInDOM} from "./insertElementInDOM.js";
import {get} from "./get.js";
import {handleClickEditForm} from "./handleClickEditForm.js";

//принимает массив строк (json), и массив заголовков
// итерируется по массиву и на каждый элемент (объект) генирирует строку таблицы и вставляет в таблицу
export function createRows(rowsArray, headersArray){
    const rows = [];
// debugger
    rowsArray.forEach(person => {
        const tr = document.createElement('tr');
        tr.id = person.id;

        headersArray.forEach(column => {
            const personContent = get(person, column.id);
            const hasOwnRender = column.render;
        //если в массиве заголовков, у колонки есть особый метод render,
        // то для создания td в заданной колонке используется он, иначе стандартный
            if(hasOwnRender){
                const td = column.render(personContent);
                tr.append(td);
            }else{
                const td = createElementHTML('td', personContent);
                tr.append(td);
            }
        });
        tr.addEventListener('click', handleClickEditForm);
        rows.push(tr);
    });
    const currentTbody = document.getElementById('tbodyID');
    currentTbody.innerHTML = '';
    insertsElementInDOM(rows, 'tbodyID');
}