/// <reference path="crud.d.ts">

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = CRUD.updateRow(newRowID, row);

CRUD.updateRow(updateRow, row);
CRUD.deleteRow(newRowID);
