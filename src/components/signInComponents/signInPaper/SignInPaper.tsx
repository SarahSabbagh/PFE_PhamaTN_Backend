import { Link, Paper, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Logo } from "../../logo/Logo";
import { SignInLink } from "../signInContainer/signInLink/SignInLink";
import { SignInPaperProps } from "./SignInPaper.types";

export const SignInPaper: React.FC<SignInPaperProps> = (props) => {
  const { title, children } = props;
  return (
    <Paper elevation={3}>
      <Logo />
      <Typography variant="h1" display="flex" marginBottom="5%">
        {title}
      </Typography>
      {children}
      <SignInLink />
    </Paper>
  );
};
