import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { textLinks } from "../../../../core/constants/textLinks";
import { StyledLink1, StyledLink2 } from "./SignInLink.style";

export const SignInLink: React.FC = () => {
  return (
    <Stack>
      <StyledLink1 href="#" variant="body2">
        {textLinks.FORGET_PASSWORD}
      </StyledLink1>
      <Typography variant="h6"> {textLinks.DO_NOT_HAVE_ACCOUNT}</Typography>
      <StyledLink2 href="#" variant="body2">
        {textLinks.SIGN_UP}
      </StyledLink2>
    </Stack>
  );
};
