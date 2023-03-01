import * as React from "react";
import { styled } from "@mui/system";
import { InputBase, InputBaseProps, InputLabel, InputLabelProps } from "@mui/material";

export const StyledInputLabel = styled(InputLabel)<InputLabelProps>({
  textAlign: "left",
  fontSize: 14,
  marginButtom: 0,
});

export const StyledPasswordInput = styled(InputBase)<InputBaseProps>({
  width: "100%",
  height: 60,
  color: "darkslategray",
  backgroundColor: "#FFFF", // "#F9F9F9",
  border: "1px solid #FEFFDF",
  borderRadius: 5,
  padding: 8,
  marginBottom: 8,
  marginTop: 8,
  fontSize: 16,
  textoverflow: "ellipsis",
  ":hover": {
    border: "2px solid #A4BE7B",
  },
});
