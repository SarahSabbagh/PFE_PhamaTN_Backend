import * as React from "react";
import { FC } from "react";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { TableFactory } from "../../components/commonComponents/table/tableFactory/TableFactory";
import { formTypes } from "../../core/constants/formType";
import { medicationColumns } from "../../core/constants/tableColumns/medicationColumns";
import {
  useDeleteMedicationMutation,
  useMedicationsFilterQuery,
} from "../../redux/api/admin/MedicationApi";
import { IMedicationElement } from "../../redux/api/types/IMedication";
import useDebounce from "../../hooks/useDebounce";
import { useTranslation } from "react-i18next";

export const MedicationsPage: FC = () => {
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
  const { data, isError } = useMedicationsFilterQuery({
    ...(query && { search: debouncedSearchTerm }),
    ...{
      page_size: rowsPerPage,
      page: page + 1,
      sortBy: sortBy,
      sortOrder: sortOrder,
    },
  });
  const [deleteMedication] = useDeleteMedicationMutation();

  const handleMedicationDelete = (id: number) => {
    deleteMedication(id).unwrap();
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
    <PageContainer title={t("medication.TITLE_PAGE_MEDICATION")}>
      <TableFactory<IMedicationElement[]>
        columns={medicationColumns}
        data={data?.data}
        sort={{
          onRequestSort: onRequestSort,
          sortOrder: sortOrder,
          sortBy: sortBy,
        }}
        handleQueryChange={handleQueryChange}
        title={t("medication.TITLE_MEDICATION")}
        isError={isError}
        actions={{
          add: {
            add: true,
            addFormType: formTypes.ADD_MEDICATION_MODAL,
          },
          edit: {
            edit: true,
            editFormType: formTypes.EDIT_MEDICATION_MODAL,
          },
          delete: { delete: true, handleDelete: handleMedicationDelete },
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
