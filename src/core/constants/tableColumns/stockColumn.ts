import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const stockColumns: ITableHead[] = [
  { label: "MEDICATION", accessor: "medicationName", sortable: true },
  { label: "DOSAGE", accessor: "medicationDosage", sortable: true },
  { label: "FORM", accessor: "medicationForm", sortable: true },
  { label: "QUANTITY", accessor: "quantity", sortable: true },
  { label: "MIN_QUANTITY", accessor: "minQuantity", sortable: true },
  { label: "EXPAND", accessor: "" },
];
export const stockItemColumns: ITableHead[] = [
  { label: "LOT_NUMBER", accessor: "codeLot", sortable: true },
  { label: "MANUFACTURE_DATE", accessor: "manufactureDate", sortable: true },
  { label: "EXPIRATION_DATE", accessor: "expirationDate", sortable: true },
  { label: "UNIT_PRICE", accessor: "unitPrice", sortable: true },
  { label: "PUBLIC_PRICE", accessor: "publicPrice", sortable: true },
  { label: "QUANTITY", accessor: "quantity", sortable: true },
  { label: "ACTIONS", accessor: "" },
];
