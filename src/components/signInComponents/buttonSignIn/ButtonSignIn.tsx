import { ButtonProps } from "@mui/material";
import * as React from "react";
import { StyledButtonSignIn } from "./ButtonSignIn.style";
import { ButtonSignInProps } from "./ButtonSignIn.types";

export const ButtonSignIn: React.FC<ButtonSignInProps & ButtonProps> = (
  props
) => {
  const { children, type } = props;
  return <StyledButtonSignIn type={type}>{children}</StyledButtonSignIn>;
};
