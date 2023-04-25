import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableHeadProps } from "./TableHead.types";

export const CustomizedTableHead: React.FC<CustomizedTableHeadProps> = (props) => {
  const { columns } = props;
  return (
    <TableHead>
      <TableRow>
        {columns.map((element, index) => (
          <TableCell key={index} align="center">
            {element.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
