import * as React from "react";
import { styled } from "@mui/system";
import {
  InputBase,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
} from "@mui/material";

export const StyledInputBase = styled(InputBase)<InputBaseProps>({});

export const StyledInputLabel = styled(InputLabel)<InputLabelProps>({
  textAlign: "left",
  fontSize: 14,
  marginButtom: 0,
});
