import * as React from "react";
import {
  styled,
  InputBase,
  Input,
  ButtonProps,
  InputBaseProps,
} from "@mui/material";

interface StyledButtonProps extends ButtonProps {
  component?: React.ElementType;
}
export const StyledButton = styled(
  ({ component = "button", ...props }: StyledButtonProps) =>
    React.createElement(component, props)
)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.info.light,
  borderColor: theme.palette.primary.main,
  borderRadius: "0 0.3125rem 0.3125rem 0",
  margin: "0.5rem 0",
  width: "3.125rem",
  height: "3.125rem",
}));

export const StyledInputBase = styled(InputBase)<InputBaseProps>({
  borderRadius: " 0.3125rem 0 0  0.3125rem ",
});
export const StyledInput = styled(Input)({
  display: "none",
});
