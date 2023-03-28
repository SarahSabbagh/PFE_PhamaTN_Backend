import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyledLinkForgetPassword, StyledLinkSignUp } from "./SignInLink.style";

export const SignInLink: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <StyledLinkForgetPassword href="#" variant="body2">
        {t("login.FORGET_PASSWORD")}
      </StyledLinkForgetPassword>
      <Typography variant="h6"> {t("login.DO_NOT_HAVE_ACCOUNT")}</Typography>
      <StyledLinkSignUp href="/register" variant="body2">
        {t("login.SIGN_UP")}
      </StyledLinkSignUp>
    </Stack>
  );
};
