import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";

import { dciColumns } from "../../core/constants/tableColumns/dciColumns";
import { formTypes } from "../../core/constants/formType";
import { ISimpleElement } from "../../redux/api/types/IResponseRequest";
import {
  useAddMarqueMutation,
  useDeleteMarqueMutation,
  useMarquesFilterQuery,
} from "../../redux/api/admin/MarqueApi";
import { TypeOf } from "zod";
import { dciSchema } from "../../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler } from "react-hook-form";

type IDciRequest = TypeOf<typeof dciSchema>;

export const MarquesPage: FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data, isLoading } = useMarquesFilterQuery({
    ...(query && { search: query }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [addMarque, { isLoading: addIsLoading, isSuccess: isSuccessAdd }] =
    useAddMarqueMutation();

  const [deleteMarque] = useDeleteMarqueMutation();

  const handleMarqueDelete = (id: number) => {
    deleteMarque(id).unwrap();
  };
  const submitHandlerAdd: SubmitHandler<IDciRequest> = (data) => {
    addMarque(data.name)
      .unwrap()
      .then(() => {
        handleClose();
      });
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
    <PageContainer title={"Marques"}>
      <Grid>
        <TableFactory<ISimpleElement[], IDciRequest>
          columns={dciColumns}
          data={data?.data}
          onRequestSort={onRequestSort}
          sortOrder={sortOrder}
          sortBy={sortBy}
          handleQueryChange={handleQueryChange}
          title={"Marques"}
          isLoading={isLoading}
          actions={{
            add: true,
            addFormType: formTypes.ADD_DCI_MODAL,
            edit: true,
            editFormType: formTypes.EDIT_MARQUE_MODAL,
            delete: true,
            handleDelete: handleMarqueDelete,
          }}
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          open={open}
          titleAddForm="add marque"
          defaultAddValues={{ name: "" }}
          addResolver={zodResolver(dciSchema)}
          onSubmitAdd={submitHandlerAdd}
          isLoadingAddForm={addIsLoading}
          isSuccessAddForm={isSuccessAdd}
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