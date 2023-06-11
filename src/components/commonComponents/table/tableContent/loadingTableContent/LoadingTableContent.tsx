import * as React from "react";
import { TableBody, TableRow } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledTableCell } from "../TableContent.style";

export const LoadingTableContent: React.FC = () => {
  return (
    <TableBody>
      <TableRow>
        <StyledTableCell  align="center" colSpan={12}>
          <CircularProgress color="inherit" />
        </StyledTableCell>
      </TableRow>
    </TableBody>
  );
};
