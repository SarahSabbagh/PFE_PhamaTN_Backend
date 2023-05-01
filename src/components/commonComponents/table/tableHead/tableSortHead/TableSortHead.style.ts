import {
  Paper,
  PaperProps,
  TableSortLabel,
  TableSortLabelProps,
  styled,
} from "@mui/material";
import { Props } from "./TableSortTable.type";

export const StyledSortLabel = styled(TableSortLabel)<
  TableSortLabelProps & Props
>(({ theme, sortBy }) => ({
  color: sortBy ? `${theme.palette.primary.main} !important` : "inherit",
  "& .MuiTableSortLabel-icon": {
    color: sortBy ? `${theme.palette.primary.main} !important` : "inherit",
  },
}));
