import { Link, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Logo } from "../../logo/Logo";
import { StyledLink1, StyledLink2 } from "./SignInPaper.style";
import { SignInPaperProps } from "./SignInPaper.types";

export const SignInPaper: React.FC<SignInPaperProps> = (props) => {
  const { title, children } = props;
  return (
    <Paper elevation={3}>
      <Logo />
      <Typography variant="h1">{title}</Typography>
      {children}
      <Stack>
        <StyledLink1 href="#" variant="body2">
          Mot de passe oublié ?
        </StyledLink1>
        <Typography variant="h6">{"Don't have an account? "}</Typography>
        <StyledLink2 href="#" variant="body2">
          {"S'INSCRIRE"}
        </StyledLink2>
      </Stack>
    </Paper>
  );
};
