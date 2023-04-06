import { ButtonProps, CircularProgress } from "@mui/material";
import * as React from "react";
import { StyledButtonSignIn } from "./ButtonSignIn.style";
import { ButtonSignInProps } from "./ButtonSignIn.types";

export const ButtonSignIn: React.FC<ButtonSignInProps & ButtonProps> = (
  props
) => {
  const { children, type, loading } = props;

  return (
    <StyledButtonSignIn type={type}>
      <>{loading ? <CircularProgress color="inherit" size={16} /> : children}</>
    </StyledButtonSignIn>
  );
};
