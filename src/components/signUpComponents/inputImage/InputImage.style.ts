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
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.info.light,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "0.3125rem",
  borderBottomLeftRadius: 0,
  borderTopLeftRadius: 0,
  padding: "0.5rem",
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
  width: "3.125rem",
  textAlign: "center",
  height: "3.125rem",
}));

export const StyledInputBase = styled(InputBase)<InputBaseProps>(
  ({ theme }) => ({
    borderRadius: "0.3125rem",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  })
);
export const StyledInput = styled(Input)({
  display: "none",
});
