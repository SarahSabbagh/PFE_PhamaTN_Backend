import * as React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { StyledInputBase } from "./SearchField.style";
import { SearchFieldProps } from "./SearchField.types";
import { useTranslation } from "react-i18next";

export const SearchField = (props: SearchFieldProps) => {
  const { onQueryChange } = props;
  const { t } = useTranslation();

  return (
    <StyledInputBase
      placeholder={t("label.SEARCH") ?? ""}
      onChange={onQueryChange}
      endAdornment={
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};
