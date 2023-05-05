import { ITableHead } from "../../../components/commonComponents/table/tableHead/TableHead.types";

export const userColumns: ITableHead[] = [
  // { label: "ID", accessor: "id", sortable: true },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Email", accessor: "email", sortable: true },
  { label: "Role", accessor: "role" },
  //  { label: "Governorate", accessor: "governorate" },
  // { label: "Delegation", accessor: "delegation" },
  { label: "First Name", accessor: "pharmacyFirstName", sortable: true },
  { label: "Last Name", accessor: "pharmacyLastName", sortable: true },
  { label: "Address", accessor: "address", sortable: true },
  { label: "Status", accessor: "status", isSticky: true, stickyIndex: 2 },
  { label: "Mode", accessor: "active", isSticky: true, stickyIndex: 1 },
  { label: "Action", accessor: "", isSticky: true, stickyIndex: 0 },
];
