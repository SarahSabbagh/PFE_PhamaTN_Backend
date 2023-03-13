import { ButtonProps } from "@mui/material";
import * as React from "react";
import { StyledButton } from "./ButtonSignUp.style";
import { ButtonSignUpProps } from "./ButtonSignUp.types";

export const ButtonSignUp: React.FC<ButtonSignUpProps & ButtonProps> = (
  props
) => {
  const { children, type } = props;
  return <StyledButton type={type}>{children}</StyledButton>;
};
