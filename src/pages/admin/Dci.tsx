import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import {
  useDeleteDcisMutation,
  useFilterDcisQuery,
  useUpdateDciMutation,
} from "../../redux/api/dci/dciApi";
import { IDci } from "../../redux/api/types/IDci";
import { dciColumns } from "../../core/constants/tableColumns/dciColumns";
import { formTypes } from "../../core/constants/formType";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export const DcisPage: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");

  const { data, isLoading } = useFilterDcisQuery({
    ...(query && { search: query }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [deleteDcis] = useDeleteDcisMutation();

  const handleDciDelete = (id: number) => {
    deleteDcis(id).unwrap();
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
    <PageContainer title={"DCI"}>
      <Grid>
        <TableFactory<IDci[]>
          columns={dciColumns}
          data={data?.data}
          onRequestSort={onRequestSort}
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleQueryChange={handleQueryChange}
          title={"DCI"}
          isLoading={isLoading}
          actions={{
            add: false,

            edit: true,
            formType: formTypes.DCI_MODAL,
            delete: true,
            handleDelete: handleDciDelete,
          }}
          page={page}
          count={data?.total ?? 0}
          rowsPerPageOptions={[10, 25, 50, 100]}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </PageContainer>
  );
};
