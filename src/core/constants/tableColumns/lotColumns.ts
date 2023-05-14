import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const lotColumns: ITableHead[] = [
  // { label: "ID", accessor: "id", sortable: true },
  { label: "Code Lot", accessor: "codeLot", sortable: true },
  { label: "Medication", accessor: "medicationName", sortable: true },
  { label: "Dosage", accessor: "medicationDosage", sortable: true },
  { label: "Form", accessor: "medicationForm", sortable: true },
  { label: "Manufacture Date", accessor: "manufactureDate", sortable: true },
  { label: "Expiration Date", accessor: "expirationDate", sortable: true },
  { label: "Unit Price", accessor: "unitPrice", sortable: true },
  { label: "Public Price", accessor: "publicPrice", sortable: true },
  { label: "Action", accessor: "" },
];
