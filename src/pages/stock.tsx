import React from "react";
import { FC } from "react";
import { Grid } from "@mui/material";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../components/commonComponents/table/tableFactory/TableFactory";
import { formTypes } from "../core/constants/formType";
import useDebounce from "../hooks/useDebounce";
import { useTranslation } from "react-i18next";
import {
  useDeleteLotInStockMutation,
  useStockQuery,
} from "../redux/api/stock/stockApi";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { stockColumns } from "../core/constants/tableColumns/stockColumn";
import { transformedStockData } from "../core/utils/stockDataFormat";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { ItransformedStockElementData } from "../redux/api/types/IStock";

export const StockPage: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [open, setOpen] = React.useState(false);
  const debouncedSearchTerm = useDebounce<string>(query, 500);
  const { userId, user } = useCurrentUser();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { data, isLoading, isFetching } = useStockQuery(user?.id ?? skipToken);
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
  return (
    <PageContainer title={t("lot.TITLE_PAGE_LOT")}>
      <Grid>
        <TableFactory<ItransformedStockElementData[]>
          columns={stockColumns}
          data={data && transformedStockData(data.data)}
          sort={{
            onRequestSort: onRequestSort,
            sortOrder: sortOrder,
            sortBy: sortBy,
          }}
          handleQueryChange={handleQueryChange}
          title={"stock"}
          isLoading={isLoading}
          isFetching={isFetching}
          actions={{
            add: {
              add: true,
              addFormType: formTypes.ADD_LOT_TO_STOCK,
            },
            details: {
              details: true,
              detailsFormType: formTypes.STOCK_DETAILS,
            },
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
