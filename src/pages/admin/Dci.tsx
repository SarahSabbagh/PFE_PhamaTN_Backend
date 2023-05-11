import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import {
  useAddDciMutation,
  useDeleteDcisMutation,
  useFilterDcisQuery,
  useShowDciQuery,
  useUpdateDciMutation,
} from "../../redux/api/dci/dciApi";
import { dciColumns } from "../../core/constants/tableColumns/dciColumns";
import { formTypes } from "../../core/constants/formType";
import { ISimpleElement } from "../../redux/api/types/IResponseRequest";
import { TypeOf } from "zod";
import { dciSchema } from "../../core/utils/validator";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToasts } from "react-toast-notifications";

type IDciRequest = TypeOf<typeof dciSchema>;

export const DcisPage: FC = () => {
  const { addToast, removeToast } = useToasts();
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
  const { data, isLoading, isFetching } = useFilterDcisQuery({
    ...(query && { search: query }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [deleteDcis] = useDeleteDcisMutation();
  const [addDci, { isLoading: addIsLoading, isSuccess: isSuccessAdd }] =
    useAddDciMutation();
  const [updateDci, { isLoading: editIsLoading, isSuccess: editIsSuccess }] =
    useUpdateDciMutation();
  const handleDciDelete = (id: number) => {
    deleteDcis(id).unwrap();
  };

  const submitHandlerAdd: SubmitHandler<IDciRequest> = (data) => {
    addDci(data.name)
      .unwrap()
      .then(() => {
        handleClose();
      });
  };
  const handleEdit: SubmitHandler<ISimpleElement> = async (data) => {
    updateDci({ id: data.id, name: data.name })
      .unwrap()
      .then(() => {
        // handleClose();
        addToast("Saved Successfully", {
          appearance: "success",
          key: "edit-category",
        });
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
    <PageContainer title={"DCI"}>
      <Grid>
        <TableFactory<ISimpleElement[], IDciRequest, ISimpleElement>
          columns={dciColumns}
          data={data?.data}
          sort={{
            onRequestSort: onRequestSort,
            sortOrder: sortOrder,
            sortBy: sortBy,
          }}
          handleQueryChange={handleQueryChange}
          title={"DCI"}
          isLoading={isLoading}
          isFetching={isFetching}
          actions={{
            add: {
              add: true,
              addFormType: formTypes.ADD_DCI_MODAL,
              titleAddForm: "add DCI",
              defaultAddValues: { name: "" },
              addResolver: zodResolver(dciSchema),
              onSubmitAdd: submitHandlerAdd,
              isLoadingAddForm: addIsLoading,
              isSuccessAddForm: isSuccessAdd,
            },
            edit: {
              edit: true,
              editFormType: formTypes.EDIT_SIMPLE_ELEMENT_MODAL,
              editResolver: zodResolver(dciSchema),
              onSubmitEdit: handleEdit,
              isLoadingEditForm: editIsLoading,
              isSuccessEditForm: editIsSuccess,
            },
            delete: { delete: true, handleDelete: handleDciDelete },
          }}
          handleModal={{
            handleClickOpen: handleClickOpen,
            open: open,
            handleClose: handleClose,
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
