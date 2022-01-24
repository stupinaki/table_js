import {createHeader} from "./functions/createHeader.js";
import {createRows} from "./functions/createRows.js";
// import {columns} from "./data/columns.js";
import {getCurrentPage} from "./functions/pagination.js";
import {hideColumns} from "./functions/hideColumns.js";
import {getCurrentColumns} from "./functions/handleChangeHide.js";


const rows = getCurrentPage();
const columns = getCurrentColumns()
hideColumns(columns);
createHeader(columns);
createRows(rows, columns);
