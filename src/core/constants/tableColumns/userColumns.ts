import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const userColumns: ITableHead[] = [
  { label: "NAME", accessor: "name", sortable: true },
  { label: "EMAIL", accessor: "email", sortable: true },
  { label: "ROLE", accessor: "role" },
  //  { label: "Governorate", accessor: "governorate" },
  // { label: "Delegation", accessor: "delegation" },
  {
    label: "PHARMACY_FIRST_NAME",
    accessor: "pharmacyFirstName",
    sortable: true,
  },
  { label: "PHARMACY_LAST_NAME", accessor: "pharmacyLastName", sortable: true },
  { label: "ADDRESS", accessor: "address", sortable: true },
  { label: "STATUS", accessor: "status", isSticky: true, stickyIndex: 2 },
  { label: "MODE", accessor: "active", isSticky: true, stickyIndex: 1 },
  { label: "ACTIONS", accessor: "", isSticky: true, stickyIndex: 0 },
];
