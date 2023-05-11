import { TableSortLabel, TableSortLabelProps, styled } from "@mui/material";
import { Props } from "./TableSortTable.type";

export const StyledSortLabel = styled(TableSortLabel)<
  TableSortLabelProps & Props
>(({ theme, sortBy }) => ({
  color: sortBy ? `${theme.palette.primary.main} !important` : "inherit",
  "& .MuiTableSortLabel-icon": {
    opacity: sortBy ? "1 !important" : "0.3 !important",
    color: sortBy ? `${theme.palette.primary.main} !important` : "inherit",
  },
}));
