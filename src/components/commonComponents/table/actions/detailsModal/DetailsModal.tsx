import * as React from "react";
import { ModalEditProps } from "./DetailModal.types";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { useTranslation } from "react-i18next";
import { useDeleteLotInStockMutation } from "../../../../../redux/api/stock/stockApi";
import { useCurrentUser } from "../../../../../hooks/useCurrentUser";
import { TableFactory } from "../../tableFactory/TableFactory";
import { FC } from "react";
import { Grid } from "@mui/material";
import {
  IStockElement,
  ItransformedElementData,
  ItransformedStockElementData,
} from "../../../../../redux/api/types/IStock";
import {
  stockColumns,
  stockItemColumns,
} from "../../../../../core/constants/tableColumns/stockColumn";
import { transformedStockItemData } from "../../../../../core/utils/stockDataFormat";

export const DetailsModal: FC<ModalEditProps> = (props) => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [openTwo, setOpenTwo] = React.useState(false);
  const { userId, user } = useCurrentUser();
  const handleClickOpenTwo = () => {
    setOpenTwo(true);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };

  const [deleteLotInStock] = useDeleteLotInStockMutation();
  const handleLotDelete = (id: number) => {
    deleteLotInStock({ user_id: userId, lot_id: id }).unwrap();
  };
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.trim());
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
  const { open, handleClose, formType, id, item, title } = props;

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  console.log(transformedStockItemData(item.lots));
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle
        sx={{ minWidth: "80%" }}
        align="center"
        variant="h3"
        color="primary"
      >
        {title.toLowerCase()}
      </DialogTitle>
      <DialogContent dividers>
        {formType === formTypes.STOCK_DETAILS && (
          <Grid justifyContent={"center"}>
            <TableFactory<ItransformedElementData[]>
              noToolBar
              columns={stockItemColumns}
              data={transformedStockItemData(item?.lots)}
              sort={{
                onRequestSort: onRequestSort,
                sortOrder: sortOrder,
                sortBy: sortBy,
              }}
              handleQueryChange={handleQueryChange}
              title={"stock"}
              isLoading={false}
              isFetching={true}
              actions={{
                details: {
                  details: true,
                  detailsFormType: formTypes.STOCK_DETAILS,
                },
              }}
              handleModal={{
                handleClickOpen: handleClickOpenTwo,
                open: open,
                handleClose: handleCloseTwo,
              }}
              page={page}
              count={transformedStockItemData(item?.lots)?.length ?? 0}
              rowsPerPageOptions={[10, 25, 50, 100]}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
};
