import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { SearchField } from "../../searchField/SearchField";
import { Filter } from "../../filterComponent/FilterComponent";
import { TableToolBarProps } from "./TableToolBar.types";

export const CustomizedTableToolBar: React.FC<TableToolBarProps> = (props) => {
  const { handleQueryChange, title } = props;

  return (
    <Grid container item sx={{ alignItems: "center" }}>
      <Grid item xs={12}>
        <Typography variant="h2">{title}</Typography>
      </Grid>
      <Grid item xs>
        <SearchField onQueryChange={handleQueryChange} />
      </Grid>
      <Filter />
    </Grid>
  );
};
