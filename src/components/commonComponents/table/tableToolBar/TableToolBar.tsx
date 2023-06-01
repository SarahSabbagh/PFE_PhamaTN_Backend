import * as React from "react";
import { Grid } from "@mui/material";
import { SearchField } from "../../searchField/SearchField";
import { Filter } from "../../filterComponent/FilterComponent";
import { TableToolBarProps } from "./TableToolBar.types";
import { StyledTitle } from "./TableToolBar.style";
import { AddElement } from "./addElement/AddElement";

export const CustomizedTableToolBar: React.FC<TableToolBarProps> = (props) => {
  const { filter, handleModal, add, title, handleQueryChange } = props;

  return (
    <Grid container item sx={{ alignItems: "center", p: "1rem" }}>
      <Grid item xs={12}>
        <StyledTitle>{title}</StyledTitle>
      </Grid>
      <Grid item xs>
        <SearchField onQueryChange={handleQueryChange} />
      </Grid>
      {add && (
        <AddElement title={title} addProps={add} handleModal={handleModal} />
      )}
      {filter && <Filter recievedFilterData={filter.recievedFilterData} />}
    </Grid>
  );
};
