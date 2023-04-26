import * as React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingTableContent: React.FC = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="center" colSpan={12}>
          <CircularProgress color="inherit" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
