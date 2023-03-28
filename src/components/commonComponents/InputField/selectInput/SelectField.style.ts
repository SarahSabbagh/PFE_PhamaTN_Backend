import { InputProps, Select, styled } from "@mui/material";

export const SelectFieldStyle = styled(Select)<InputProps>(({ theme }) => ({
  "& fieldset": { border: "none" },
  "& .MuiSelect-icon": {
    color: theme.palette.primary.main,
  },
  "& .MuiSelect-outlined": {
    OverflowX: "scroll",
  },
  padding: 0,
}));
