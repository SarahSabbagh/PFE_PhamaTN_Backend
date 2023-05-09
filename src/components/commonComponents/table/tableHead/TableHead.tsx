import * as React from "react";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableHeadProps } from "./TableHead.types";
import { StyledSortLabel } from "./tableSortHead/TableSortHead.style";
import { StyledTableCell } from "../tableRows/customizedTableCell/CustomizedTableCell.style";
import { TableHead } from "@mui/material";

export const CustomizedTableHead: React.FC<CustomizedTableHeadProps> = (
  props
) => {
  const { columns, sort } = props;
  const createSortHandler =
    (newSortBy: string) => (event: React.MouseEvent<unknown>) => {
      sort?.onRequestSort && sort?.onRequestSort(event, newSortBy);
    };

  return (
    <TableHead>
      <TableRow>
        {columns.map((element, index) => (
          <StyledTableCell headColumn key={index} align="center">
            {element.sortable ? (
              <StyledSortLabel
                active
                direction={sort?.sortBy === element.accessor ? sort?.sortOrder : "asc"}
                sortBy={sort?.sortBy === element.accessor}
                onClick={createSortHandler(element.accessor)}
              >
                {element.label}
              </StyledSortLabel>
            ) : (
              element.label
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
