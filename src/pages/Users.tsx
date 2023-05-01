import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { IUser } from "../redux/api/types/IUser";
import { ITableHead } from "../components/commonComponents/table/tableHead/TableHead.types";
import { TableFactory } from "../components/commonComponents/table/tableFactory/TableFactory";
import {
  useUpdateUserStatusMutation,
  useUserActivationMutation,
  useUserFilterQuery,
} from "../redux/api/admin/AdminApi";
import { IUserFilterRequest } from "../redux/api/types/IResponseRequest";
import { useDeleteUserMutation } from "../redux/api/user/userApi";

const userColumns: ITableHead[] = [
  { label: "ID", accessor: "id", sortable: true },
  { label: "Name", accessor: "name", sortable: true },
  { label: "Email", accessor: "email", sortable: true },
  { label: "Role", accessor: "role" },
  { label: "Governorate", accessor: "governorate" },
  { label: "Delegation", accessor: "delegation" },
  { label: "First Name", accessor: "pharmacyFirstName", sortable: true },
  { label: "Last Name", accessor: "pharmacyLastName", sortable: true },
  { label: "Address", accessor: "address", sortable: true },
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
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");

  const { data, isLoading } = useUserFilterQuery({
    ...(query && { search: query }),
    ...FilterData,
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [userActivation] = useUserActivationMutation();
  const [deletUser] = useDeleteUserMutation();
  const [updateUserStatus] = useUpdateUserStatusMutation();

  const handleActivationMode = (id: number) => {
    userActivation(id).unwrap();
  };
  const handleUpdateUserStatus = (id: number, status: number) => {
    updateUserStatus({ id, status }).unwrap();
  };

  const handleUserDelete = (id: number) => {
    deletUser(id).unwrap();
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setQuery(event.target.value.trim());
    }, 1000);
  };

  const onRequestSort = (
    event: React.MouseEvent<unknown>,
    newSortBy: string
  ) => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
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
      <Grid>
        <TableFactory<IUser[]>
          columns={userColumns}
          data={data?.data}
          onRequestSort={onRequestSort}
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleQueryChange={handleQueryChange}
          title={"Users"}
          isLoading={isLoading}
          actions={{
            delete: true,
            handleDelete: handleUserDelete,
          }}
          handleActivationMode={handleActivationMode}
          handleUpdateUserStatus={handleUpdateUserStatus}
          page={page}
          count={data?.total ?? 0}
          rowsPerPageOptions={[10, 25, 50, 100]}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          recievedFilterData={(data) => setFilterData(data)}
        />
      </Grid>
    </PageContainer>
  );
};
