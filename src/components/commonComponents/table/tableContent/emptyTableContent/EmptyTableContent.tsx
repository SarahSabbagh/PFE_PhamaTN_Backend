import * as React from "react";
import { Stack, TableBody, TableRow, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import { useTranslation } from "react-i18next";
import { StyledTableCell } from "../TableContent.style";

export const EmptyTableContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell align="center" colSpan={12}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <InboxIcon color="disabled" fontSize="large" />
            <Typography>{t("label.No_DATA_AVAILABLE")} </Typography>
          </Stack>
        </StyledTableCell>
      </TableRow>
    </TableBody>
  );
};
