import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { SearchField } from "../../searchField/SearchField";
import { Filter } from "../../filterComponent/FilterComponent";
import { TableToolBarProps } from "./TableToolBar.types";
import { StyledTitle } from "./TableToolBar.style";

export const CustomizedTableToolBar: React.FC<TableToolBarProps> = (props) => {
  const { handleQueryChange, title, recievedFilterData } = props;

  return (
    <Grid container item sx={{ alignItems: "center" }}>
      <Grid item xs={12}>
        <StyledTitle>{title}</StyledTitle>
      </Grid>
      <Grid item xs>
        <SearchField onQueryChange={handleQueryChange} />
      </Grid>
      <Filter recievedFilterData={recievedFilterData} />
    </Grid>
  );
};
