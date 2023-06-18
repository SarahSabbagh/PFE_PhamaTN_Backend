import * as React from "react";
import { Stack, TableBody, TableRow, Typography } from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useTranslation } from "react-i18next";
import { StyledTableCell } from "../TableContent.style";

export const ErrorTableContent: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell align="center" colSpan={12}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <WarningAmberOutlinedIcon color="error" fontSize="large" />
            <Typography color="error">
              {t("label.No_DATA_AVAILABLE")}
            </Typography>
          </Stack>
        </StyledTableCell>
      </TableRow>
    </TableBody>
  );
};
