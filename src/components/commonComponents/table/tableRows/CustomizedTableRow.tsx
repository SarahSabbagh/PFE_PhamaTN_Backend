import * as React from "react";
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { CustomizedTableRowProps } from "./CustomizedTableRow.types";
import {
  StandardCell,
  StatusCell,
  ActionsCell,
  ActivationCell,
} from "./customizedTableCell/CustomizedTableCell";
import { ITableHead } from "../tableHead/TableHead.types";
import { useTranslation } from "react-i18next";

export const CustomizedTableRow: React.FC<CustomizedTableRowProps> = (
  props
) => {
  const {
    item,
    columns,
    deleteAction,
    editAction,
    detailsAction,
    title,
    handleActivationMode,
    handleUpdateUserStatus,
  } = props;

  return (
    <TableRow>
      {columns.map(
        (col: ITableHead) =>
          (col.accessor === "status" && (
            <StatusCell
              key={col.accessor}
              accessor={col.accessor}
              item={item}
              title={title}
              element={item[col.accessor]}
              id={item.id}
              handleUpdateUserStatus={handleUpdateUserStatus}
            />
          )) ||
          (col.accessor === "active" && (
            <ActivationCell
              key={col.accessor}
              accessor={col.accessor}
              item={item}
              title={title}
              element={item[col.accessor]}
              handleActivationMode={handleActivationMode}
              id={item.id}
            />
          )) ||
          (col.label === "ACTIONS" && (
            <ActionsCell
              accessor={col.accessor}
              item={item}
              key={col.accessor}
              id={item.id}
              title={title}
              editAction={editAction}
              deleteAction={deleteAction}
              detailsAction={detailsAction}
            />
          )) || (
            <StandardCell
              id={item.id}
              title={title}
              accessor={col.accessor}
              key={col.accessor}
              element={item[col.accessor]}
            />
          )
      )}
    </TableRow>
  );
};

export const EmptyTableRow: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={12}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <InboxIcon color="disabled" fontSize="large" />
            <Typography>{t("label.No_DATA_AVAILABLE")} </Typography>
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
