import * as React from "react";
import {
  Stack,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import { useTranslation } from "react-i18next";

export const ErrorTableRow: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={12}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <WarningAmberOutlinedIcon color="error" fontSize="large" />
            <Typography color="error">
              {t("label.No_DATA_AVAILABLE")}
            </Typography>
          </Stack>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
