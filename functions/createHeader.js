import {createElementHTML} from "./createElementHTML.js";
import {handleClickSort} from "./handleClickSort.js";


//получает массив заголовков, генирирует необходимые компоненты и рендерит заголовок с прослушивателем события 'click'
export function createHeader(columnsTitle){
    const tr = document.createElement('tr');

    columnsTitle.forEach(column => {
        const divText = createElementHTML('div', column.title);
        const divImg = createElementHTML('div', '⧋');
        const th = document.createElement('th')
        divImg.style = "display: none";
        divImg.id = `arrow ${column.id}`;
        divImg.className = 'arrows'
        th.id = column.id;
        th.append(divText);
        th.append(divImg);
        th.addEventListener('click', handleClickSort);
        tr.append(th);
    });
    const thead = document.getElementById('theadID');
    thead.innerHTML = '';
    thead.append(tr);
}