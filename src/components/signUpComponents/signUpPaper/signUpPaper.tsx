import { Typography } from "@mui/material";
import * as React from "react";
import { StyledSignUpPaper } from "./SignUpPaper.style";
import { SignUpPaperProps } from "./SignUpPaper.types";

export const SignUpPaper: React.FC<SignUpPaperProps> = (props) => {
  const { title, children } = props;
  return (
    <StyledSignUpPaper elevation={5}>
      <Typography variant="h2" marginBottom="5%">
        {title}
      </Typography>
      {children}
    </StyledSignUpPaper>
  );
};
