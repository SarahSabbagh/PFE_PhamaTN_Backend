import { ButtonProps, CircularProgress } from "@mui/material";
import * as React from "react";
import { StyledButton } from "./ButtonSignUp.style";
import { ButtonSignUpProps } from "./ButtonSignUp.types";

export const ButtonSignUp: React.FC<ButtonSignUpProps & ButtonProps> = (
  props
) => {
  const { children, type, loading } = props;
  return (
    <StyledButton type={type}>
      {" "}
      <>{loading ? <CircularProgress color="inherit" size={16} /> : children}</>
    </StyledButton>
  );
};
