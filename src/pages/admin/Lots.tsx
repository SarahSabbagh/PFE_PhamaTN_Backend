import * as React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import { formTypes } from "../../core/constants/formType";
import { TypeOf } from "zod";
import { lotSchema, medicationSchema } from "../../core/utils/validator";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToasts } from "react-toast-notifications";
import {
  useAddLotMutation,
  useDeleteLotMutation,
  useLotsFilterQuery,
  useUpdateLotMutation,
} from "../../redux/api/lot/LotApi";
import { ILotElement, ItransformedLotData } from "../../redux/api/types/ILot";
import { lotColumns } from "../../core/constants/tableColumns/lotColumns";
import { transformedLotData } from "../../core/utils/lotDataFormat";

type ILotRequest = TypeOf<typeof lotSchema>;

export const LotsPage: FC = () => {
  const { addToast } = useToasts();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [open, setOpen] = React.useState(false);
  const currentDate = new Date();
  const expirationDateDefault = new Date();
  expirationDateDefault.setDate(currentDate.getDate() + 30);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { data, isLoading, isFetching } = useLotsFilterQuery({
    ...(query && { search: query }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [deleteLot] = useDeleteLotMutation();
  const [addLot, { isLoading: addIsLoading, isSuccess: isSuccessAdd }] =
    useAddLotMutation();

  const handleDciDelete = (id: number) => {
    deleteLot(id).unwrap();
  };

  const submitHandlerAdd: SubmitHandler<ILotRequest> = (data) => {
    addLot(data)
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
    <PageContainer title={"Lot"}>
      <Grid>
        <TableFactory<ItransformedLotData[], ILotRequest>
          columns={lotColumns}
          data={data ? transformedLotData(data.data) : []}
          sort={{
            onRequestSort: onRequestSort,
            sortOrder: sortOrder,
            sortBy: sortBy,
          }}
          handleQueryChange={handleQueryChange}
          title={"Lots"}
          isLoading={isLoading}
          isFetching={isFetching}
          actions={{
            add: {
              add: true,
              addFormType: formTypes.ADD_LOT_MODAL,
              defaultAddValues: {
                medication_id: 0,
                codeLot: "",
                manufactureDate: currentDate,
                expirationDate: expirationDateDefault,
                unitPrice: 0,
                publicPrice: 0,
              },
              addResolver: zodResolver(medicationSchema),
              onSubmitAdd: submitHandlerAdd,
              isLoadingAddForm: addIsLoading,
              isSuccessAddForm: isSuccessAdd,
            },
            edit: {
              edit: true,
              editFormType: formTypes.EDIT_LOT_MODAL,
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
