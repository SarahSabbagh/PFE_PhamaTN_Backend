import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { StyledLinkForgetPassword, StyledLinkSignUp } from "./SignInLink.style";
import { SignInLinkProps } from "./SignInLink.types";
import { paths } from "../../../core/constants/path";

export const SignInLink: React.FC<SignInLinkProps> = (props) => {
  const { t } = useTranslation();
  return (
    <Stack>
      {props.forgotPasswordLink ? (
        <StyledLinkForgetPassword href={paths.LOGIN} variant="body2">
          {t("login.SIGN_IN")}
        </StyledLinkForgetPassword>
      ) : (
        <StyledLinkForgetPassword href={paths.ForgotPassword} variant="body2">
          {t("login.FORGET_PASSWORD")}
        </StyledLinkForgetPassword>
      )}
      <Typography variant="h6"> {t("login.DO_NOT_HAVE_ACCOUNT")}</Typography>
      <StyledLinkSignUp href="/register" variant="body2">
        {t("login.SIGN_UP")}
      </StyledLinkSignUp>
    </Stack>
  );
};
