import * as React from "react";
import { InputBase, InputBaseProps, styled } from "@mui/material";
import { colors } from "../../../core/constants/colors";
export const StyledInputBase = styled(InputBase)<InputBaseProps>({
  width: "15.625rem",
  borderColor: colors.grey.main,
  height: "3rem",
});
