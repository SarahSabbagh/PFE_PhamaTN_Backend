import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableHeadProps } from "./TableHead.types";
import { StyledHead } from "./TableHead.style";
import { StyledSortLabel } from "./tableSortHead/TableSortHead.style";

export const CustomizedTableHead: React.FC<CustomizedTableHeadProps> = (
  props
) => {
  const { columns, onRequestSort, sortOrder, sortBy } = props;
  const createSortHandler =
    (newSortBy: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort && onRequestSort(event, newSortBy);
    };

  return (
    <StyledHead>
      <TableRow>
        {columns.map((element, index) => (
          <TableCell key={index} align="center">
            {element.sortable ? (
              <StyledSortLabel
                active
                direction={sortBy === element.accessor ? sortOrder : "asc"}
                sortBy={sortBy === element.accessor}
                onClick={createSortHandler(element.accessor)}
              >
                {element.label}
              </StyledSortLabel>
            ) : (
              element.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </StyledHead>
  );
};
