import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableHeadProps } from "./TableHead.types";
import { StyledHead } from "./TableHead.style";

export const CustomizedTableHead: React.FC<CustomizedTableHeadProps> = (
  props
) => {
  const { columns } = props;
  return (
    <StyledHead>
      <TableRow>
        {columns.map((element, index) => (
          <TableCell key={index} align="center">
            {element.label}
          </TableCell>
        ))}
      </TableRow>
    </StyledHead>
  );
};
