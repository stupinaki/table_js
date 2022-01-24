import {createHeader} from "./functions/createHeader.js";
import {createRows} from "./functions/createRows.js";
import {columns} from "./data/columns.js";
import {getCurrentPage} from "./functions/pagination.js";
import {hide} from "./functions/hide.js";


const rows = getCurrentPage();
hide(columns);
createHeader(columns);
createRows(rows, columns);
