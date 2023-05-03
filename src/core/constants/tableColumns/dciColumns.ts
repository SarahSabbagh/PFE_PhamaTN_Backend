import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const dciColumns: ITableHead[] = [
  { label: "ID", accessor: "id", sortable: true },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Action", accessor: "" },
];
