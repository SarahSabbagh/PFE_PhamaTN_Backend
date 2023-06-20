import * as React from "react";
import { FC } from "react";

import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import { dciColumns } from "../../core/constants/tableColumns/dciColumns";
import { formTypes } from "../../core/constants/formType";
import { ISimpleElement } from "../../redux/api/types/IResponseRequest";
import {
  useDeleteFormMutation,
  useFormsFilterQuery,
} from "../../redux/api/admin/FormApi";
import useDebounce from "../../hooks/useDebounce";
import { useTranslation } from "react-i18next";

export const FormsPage: FC = () => {
  const { t } = useTranslation();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<string>("");
  const [sortOrder, setSortOrder] = React.useState<"desc" | "asc">("asc");
  const [open, setOpen] = React.useState(false);
  const debouncedSearchTerm = useDebounce<string>(query, 500);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const { data,isError} = useFormsFilterQuery({
    ...(query && { search: debouncedSearchTerm }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });

  const [deleteForm] = useDeleteFormMutation();
  const handleFormDelete = (id: number) => {
    deleteForm(id).unwrap();
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
    <PageContainer title={t("form.TITLE_PAGE_FORM")}>
  
        <TableFactory<ISimpleElement[]>
          columns={dciColumns}
          data={data?.data}
          sort={{
            onRequestSort: onRequestSort,
            sortOrder: sortOrder,
            sortBy: sortBy,
          }}
          handleQueryChange={handleQueryChange}
          title={t("form.TITLE_FORM")}
          isError={isError}
          actions={{
            add: {
              add: true,
              addFormType: formTypes.FORM_MODAL,
            },
            edit: {
              edit: true,
              editFormType: formTypes.FORM_MODAL,
            },
            delete: { delete: true, handleDelete: handleFormDelete },
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
   
    </PageContainer>
  );
};
