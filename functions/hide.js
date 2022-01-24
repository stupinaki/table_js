import {createElementHTML} from "./createElementHTML.js";
import {handleClickHide} from "./handleClickHide.js";


export function hide(columnsTitle){
    const div = document.querySelector('.hide');


    columnsTitle.forEach(column => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'hide';
        checkbox.className = column.id;

        checkbox.checked = true;
        checkbox.addEventListener('change', handleClickHide);
        checkbox.style = 'margin: 6px';

        const label = createElementHTML('label', `${column.title}`);
        label.for = 'hide';
        label.style = 'margin: 4px';

        div.append(checkbox);
        div.append(label);
    })
}
