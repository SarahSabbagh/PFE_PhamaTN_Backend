import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const lotColumns: ITableHead[] = [
  { label: "LOT_NUMBER", accessor: "codeLot", sortable: true },
  { label: "MEDICATION", accessor: "medicationName", sortable: true },
  { label: "DOSAGE", accessor: "medicationDosage", sortable: true },
  { label: "FORM", accessor: "medicationForm", sortable: true },
  { label: "MANUFACTURE_DATE", accessor: "manufactureDate", sortable: true },
  { label: "EXPIRATION_DATE", accessor: "expirationDate", sortable: true },
  { label: "UNIT_PRICE", accessor: "unitPrice", sortable: true },
  { label: "PUBLIC_PRICE", accessor: "publicPrice", sortable: true },
  { label: "ACTIONS", accessor: "" },
];
