import { Link, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Logo } from "../logo/Logo";
import { StyledBasicBox, StyledLink1, StyledLink3 } from "./BasicBox.style";
import { BasicBoxProps } from "./BasicBox.types";

export const BasicBox: React.FC<BasicBoxProps> = (props) => {
  const { title, children } = props;
  return (
    <StyledBasicBox>
      <Logo />
      <Typography variant="h1">{title}</Typography>
      {children}
      <Stack>
        <StyledLink1 href="#" variant="body2">
          Mot de passe oublié ?
        </StyledLink1>
        <Typography variant="h6">{"Don't have an account? "}</Typography>
        <StyledLink3 href="#" variant="body2">
          {"S'INSCRIRE"}
        </StyledLink3>
      </Stack>
    </StyledBasicBox>
  );
};
