import * as React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase } from "./SearchField.style";
import { SearchFieldProps } from "./SearchField.types";

export const SearchField = (props: SearchFieldProps) => {
  const { onQueryChange } = props;

  return (
    <StyledInputBase
      placeholder="Search…"
      onChange={onQueryChange}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};
