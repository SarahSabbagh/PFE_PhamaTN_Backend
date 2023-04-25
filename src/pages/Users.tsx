import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import {
  useUpdateUserMutation,
  useUsersQuery,
} from "../redux/api/user/userApi";
import { IUser } from "../redux/api/types/IUser";
import { ITableHead } from "../components/commonComponents/table/tableHead/TableHead.types";
import { TableFactory } from "../components/commonComponents/table/tableFactory/TableFactory";

const userColumns: ITableHead[] = [
  { label: "ID", accessor: "id" },
  { label: "Name", accessor: "name" },
  { label: "Email", accessor: "email" },
  { label: "Role", accessor: "role" },
  { label: "Governorate", accessor: "governorate" },
  { label: "Delegation", accessor: "delegation" },
  { label: "First Name", accessor: "pharmacyFirstName" },
  { label: "Last Name", accessor: "pharmacyLastName" },
  { label: "Status", accessor: "status" },
  { label: "Mode", accessor: "active" },
  { label: "Action", accessor: "" },
];

export const UsersPage: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data: users = [], isLoading } = useUsersQuery();
  const [UpdateUser] = useUpdateUserMutation();
  const [query, setQuery] = React.useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  const search = (users: IUser[]) => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.pharmacyFirstName.toLowerCase().includes(query) ||
        user.pharmacyLastName.toLowerCase().includes(query)
    );
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <PageContainer title={"Users"}>
      <Grid
        sx={{
          //  width: "100%",
          mr: "auto",
          ml: "auto",
        }}
      >
        <Grid item>
          <TableFactory<IUser>
            columns={userColumns}
            data={search(users)}
            handleQueryChange={handleQueryChange}
            title={"Users"}
            isLoading={isLoading}
            page={page}
            actions={{ edit: true, delete: true }}
            rowsPerPageOptions={[1, 10, 25, 100]}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
