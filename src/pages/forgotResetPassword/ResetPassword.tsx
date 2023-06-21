import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import { ResetPasswordProps } from "./ForgotPassword.types";
import { IResetPasswordRequest } from "../../redux/api/types/IForgotResetPassword";
import { resetPasswordSchema } from "../../core/utils/validator/ForgotResetPassword";
import { useResetPasswordMutation } from "../../redux/api/forgotResetPassword/ForgotResetPassword";
import { SignInPaper } from "../../components/signInComponents/signInPaper/SignInPaper";
import { FormInput } from "../../components/commonComponents/InputField/formInput/FormInput";
import { ButtonSignIn } from "../../components/signInComponents/buttonSignIn/ButtonSignIn";
import { useNavigate } from "react-router-dom";
import { paths } from "../../core/constants/path";

export const ResetPassword: FC<ResetPasswordProps> = (props) => {
  const { email } = props;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const methods = useForm<IResetPasswordRequest>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: { email: email, password: "", password_confirmation: "" },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const submitHandler: SubmitHandler<IResetPasswordRequest> = (data) => {
    resetPassword(data)
      .unwrap()
      .then((response) => {
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        navigate(paths.LOGIN);
      })
      .catch((response) => {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <FormProvider {...methods}>
      <ToastContainer />
      <SignInPaper forgotPasswordLink={true} title={t("login.TITLE_APP")}>
        <Box
          component="form"
          onSubmit={handleSubmit(submitHandler)}
          noValidate
          display="flex"
          flexDirection="column"
          justifyContent="center"
          width="100%"
        >
          <Grid paddingBottom="1rem">
            <Typography variant="h5">
              {t("forgotResetPassword.RESET_PASSWORD")}
            </Typography>
            <Typography variant="h6">
              {t("forgotResetPassword.RESET_PASSWORD_MESSAGE")}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInput
              id="password"
              type="password"
              label={t("register.PASSWORD_LABEL")}
              name="password"
              placeholder={t("register.PASSWORD_LABEL")}
              eyeicon={true}
              autoComplete="off"
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormInput
              id="confirmPassword"
              type="password"
              label={t("register.CONFIRM_PASSWORD_LABEL")}
              name="password_confirmation"
              placeholder={t("register.PASSWORD_LABEL")}
              eyeicon={true}
              autoComplete="off"
            />
          </Grid>
          <ButtonSignIn loading={isLoading} type="submit">
            {t("forgotResetPassword.SEND")}
          </ButtonSignIn>
        </Box>
      </SignInPaper>
    </FormProvider>
  );
};
