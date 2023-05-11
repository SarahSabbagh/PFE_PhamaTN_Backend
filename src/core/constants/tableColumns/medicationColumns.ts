import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const medicationColumns: ITableHead[] = [
  // { label: "ID", accessor: "id", sortable: true },
  { label: "DCI", accessor: "dci", sortable: true },
  { label: "Brand", accessor: "marque", sortable: true },
  { label: "Dosage", accessor: "dosage", sortable: true },
  { label: "Form", accessor: "form", sortable: true },
  { label: "Category", accessor: "category", sortable: true },
  { label: "Action", accessor: "" },
];
