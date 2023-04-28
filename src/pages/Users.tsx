import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { IUser } from "../redux/api/types/IUser";
import { ITableHead } from "../components/commonComponents/table/tableHead/TableHead.types";
import { TableFactory } from "../components/commonComponents/table/tableFactory/TableFactory";
import {
  useUserActivationMutation,
  useUserFilterQuery,
} from "../redux/api/admin/AdminApi";
import { IUserFilterRequest } from "../redux/api/types/IResponseRequest";
import { colors } from "../core/constants/colors";

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
export interface IFilterData {
  role?: string;
  status?: string;
  activationMode?: string;
}
export const UsersPage: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [query, setQuery] = React.useState<string>("");
  const [FilterData, setFilterData] = React.useState<IUserFilterRequest>({});
  const [userUpdated, setuserUpdated] = React.useState<IUser>();

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setQuery(event.target.value.trim());
    }, 1000);
  };
  const { data, isLoading } = useUserFilterQuery({
    ...(query && { search: query }),
    ...FilterData,
  });
  const [userActivation] = useUserActivationMutation();
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
      <Grid>
        <TableFactory<IUser>
          columns={userColumns}
          data={data}
          handleQueryChange={handleQueryChange}
          title={"Users"}
          isLoading={isLoading}
          page={page}
          actions={{ delete: true }}
          handleActivation={() => userActivation}
          rowsPerPageOptions={[1, 10, 25, 100]}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          recievedFilterData={(data) => setFilterData(data)}
        />
      </Grid>
    </PageContainer>
  );
};
