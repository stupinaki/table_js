import {createHeader} from "./functions/createHeader.js";
import {createRows} from "./functions/createRows.js";
import {columns} from "./data/columns.js";
import {getCurrentPage} from "./functions/pagination.js";


const rows = getCurrentPage();

createHeader(columns);
createRows(rows, columns);
