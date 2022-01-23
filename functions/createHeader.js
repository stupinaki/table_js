import {createElementHTML} from "./createElementHTML.js";
import {handleClickSort} from "./handleClickSort.js";


//получает массив заголовков, генирирует необходимые компоненты и рендерит заголовок с прослушивателем события 'click'
export function createHeader(colunmsTitle){
    const tr = document.createElement('tr');
    colunmsTitle.forEach(column => {
        const th = createElementHTML('th', column.title);
        const div = createElementHTML('div', '⧋');
        div.style = "display: none";
        div.id = `arrow ${column.id}`;
        div.className = 'arrows'
        th.id = column.id;
        th.append(div);
        th.addEventListener('click', handleClickSort);
        tr.append(th);
    });
    const table = document.getElementById('tableID');
    table.prepend(tr);
}