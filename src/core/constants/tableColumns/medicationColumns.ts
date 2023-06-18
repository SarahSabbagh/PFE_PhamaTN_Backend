import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const medicationColumns: ITableHead[] = [
  { label: "DCI", accessor: "dci", sortable: true },
  { label: "BRAND", accessor: "marque", sortable: true },
  { label: "DOSAGE", accessor: "dosage", sortable: true },
  { label: "FORM", accessor: "form", sortable: true },
  { label: "CATEGORY", accessor: "category", sortable: true },
  { label: "MIN_QUANTITY", accessor: "min_quantity", sortable: true },
  { label: "ACTIONS", accessor: "" },
];
