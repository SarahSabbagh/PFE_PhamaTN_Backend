import { TableSortLabel, TableSortLabelProps, styled } from "@mui/material";
import { Props } from "./TableSortTable.type";

export const StyledSortLabel = styled(TableSortLabel)<
  TableSortLabelProps & Props
>(({ theme, sortby }) => ({
  color: sortby ? `${theme.palette.primary.main} !important` : "inherit",
  "& .MuiTableSortLabel-icon": {
    opacity: sortby ? "1 !important" : "0.3 !important",
    color: sortby ? `${theme.palette.primary.main} !important` : "inherit",
  },
}));
