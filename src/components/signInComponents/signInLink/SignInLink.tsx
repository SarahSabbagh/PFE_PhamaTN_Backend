import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { textLinks } from "../../../core/constants/textLinks";
import { StyledLinkForgetPassword, StyledLinkSignUp } from "./SignInLink.style";

export const SignInLink: React.FC = () => {
  return (
    <Stack>
      {/* ----------------------------------------------  Link Forget Password  ----------------------------------------*/}

      <StyledLinkForgetPassword href="#" variant="body2">
        {textLinks.FORGET_PASSWORD}
      </StyledLinkForgetPassword>
      <Typography variant="h6"> {textLinks.DO_NOT_HAVE_ACCOUNT}</Typography>
      {/* ----------------------------------------------  Link SignUp  -------------------------------------------------*/}

      <StyledLinkSignUp href="/register" variant="body2">
        {textLinks.SIGN_UP}
      </StyledLinkSignUp>
    </Stack>
  );
};
