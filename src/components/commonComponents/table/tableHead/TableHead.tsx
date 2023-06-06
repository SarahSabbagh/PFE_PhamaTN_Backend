import * as React from "react";
import TableRow from "@mui/material/TableRow";
import { CustomizedTableHeadProps } from "./TableHead.types";
import { StyledSortLabel } from "./tableSortHead/TableSortHead.style";
import { StyledTableCell } from "../tableRows/customizedTableCell/CustomizedTableCell.style";
import { TableHead } from "@mui/material";
import { useTranslation } from "react-i18next";

export const CustomizedTableHead: React.FC<CustomizedTableHeadProps> = (
  props
) => {
  const { t } = useTranslation();
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
                direction={
                  sort?.sortBy === element.accessor ? sort?.sortOrder : "asc"
                }
                sortBy={sort?.sortBy === element.accessor}
                onClick={createSortHandler(element.accessor)}
              >
                {t(`cells.${element.label}`)}
              </StyledSortLabel>
            ) : (
              t(`cells.${element.label}`)
            )}
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
