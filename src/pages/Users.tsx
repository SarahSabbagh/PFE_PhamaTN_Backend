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
];

export const UsersPage: FC = () => {
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
  return (
    <PageContainer title={"Users"}>
      <Grid sx={{ mr: 3, ml: 3 }}>
        <Grid item>
          <TableFactory<IUser>
            columns={userColumns}
            data={search(users)}
            handleQueryChange={handleQueryChange}
            title={"User"}
            isLoading={isLoading}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
