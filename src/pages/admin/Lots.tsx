import * as React from "react";
import { FC } from "react";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import { formTypes } from "../../core/constants/formType";
import {
  useDeleteLotMutation,
  useLotsFilterQuery,
} from "../../redux/api/lot/LotApi";
import { ItransformedLotData } from "../../redux/api/types/ILot";
import { lotColumns } from "../../core/constants/tableColumns/lotColumns";
import { transformedLotData } from "../../core/utils/lotDataFormat";
import useDebounce from "../../hooks/useDebounce";
import { useTranslation } from "react-i18next";
import { rolesValue } from "../../core/constants/roles";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export const LotsPage: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [open, setOpen] = React.useState(false);
  const debouncedSearchTerm = useDebounce<string>(query, 500);
  const { user } = useCurrentUser();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { data, isError } = useLotsFilterQuery({
    ...(query && { search: debouncedSearchTerm }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [deleteLot] = useDeleteLotMutation();
  const handleLotDelete = (id: number) => {
    deleteLot(id).unwrap();
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
  const columnWithoutActions = lotColumns.filter(
    (item) => item.label !== "ACTIONS"
  );
  return (
    <PageContainer title={t("lot.TITLE_PAGE_LOT")}>
      <TableFactory<ItransformedLotData[]>
        columns={
          user?.role === rolesValue.ADMINISTRATOR
            ? lotColumns
            : columnWithoutActions
        }
        data={data && transformedLotData(data.data)}
        sort={{
          onRequestSort: onRequestSort,
          sortOrder: sortOrder,
          sortBy: sortBy,
        }}
        handleQueryChange={handleQueryChange}
        title={t("lot.TITLE_LOT")}
        isError={isError}
        actions={
          user?.role === rolesValue.ADMINISTRATOR
            ? {
                add: {
                  add: true,
                  addFormType: formTypes.ADD_LOT_MODAL,
                },
                edit: {
                  edit: true,
                  editFormType: formTypes.EDIT_LOT_MODAL,
                },
                delete: { delete: true, handleDelete: handleLotDelete },
              }
            : {}
        }
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
    </PageContainer>
  );
};
