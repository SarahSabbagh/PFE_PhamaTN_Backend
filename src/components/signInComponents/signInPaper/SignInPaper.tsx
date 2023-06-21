import { Link, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Logo } from "../../commonComponents/logo/Logo";
import { SignInLink } from "../signInLink/SignInLink";
import { StyledSignInPaper, StyledTitle } from "./SignInPaper.style";
import { SignInPaperProps } from "./SignInPaper.types";

export const SignInPaper: React.FC<SignInPaperProps> = (props) => {
  const { title, children, forgotPasswordLink} = props;
  return (
    <StyledSignInPaper elevation={3}>
      <Logo />
      <StyledTitle variant="h1">{title}</StyledTitle>
      {children}
      <SignInLink forgotPasswordLink={forgotPasswordLink}/>
    </StyledSignInPaper>
  );
};
