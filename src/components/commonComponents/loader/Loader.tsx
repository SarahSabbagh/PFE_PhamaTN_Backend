import { CircularProgress, CircularProgressProps, Grid } from "@mui/material";
import * as React from "react";

export const Loader: React.FC<CircularProgressProps> = (props) => {
  return (
    <Grid display="flex" justifyContent="center">
      <CircularProgress color="inherit" size={16} />
    </Grid>
  );
};
