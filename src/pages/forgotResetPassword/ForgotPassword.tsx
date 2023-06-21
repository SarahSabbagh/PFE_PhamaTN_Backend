import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInPaper } from "../../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FormInput } from "../../components/commonComponents/InputField/formInput/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSignIn } from "../../components/signInComponents/buttonSignIn/ButtonSignIn";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import { IForgotResetPasswordRequest } from "../../redux/api/types/IForgotResetPassword";
import { ForgotPasswordSchema } from "../../core/utils/validator/ForgotResetPassword";
import { useForgotPasswordMutation } from "../../redux/api/forgotResetPassword/ForgotResetPassword";
import { ForgotPasswordProps } from "./ForgotPassword.types";

export const ForgotPassword: FC<ForgotPasswordProps> = (props) => {
  const { handleForgotResetPassword, handleEmail } = props;
  const { t } = useTranslation();

  const methods = useForm<IForgotResetPasswordRequest>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const submitHandler: SubmitHandler<IForgotResetPasswordRequest> = (data) => {
    forgotPassword(data)
      .unwrap()
      .then((response) => {
        handleForgotResetPassword(), handleEmail(data.email);
        toast.success(response.message, {
          position: toast.POSITION.TOP_CENTER,
        });
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
              {t("forgotResetPassword.FORGET_PASSWORD")}
            </Typography>
            <Typography variant="h6">
              {t("forgotResetPassword.FORGET_PASSWORD_MESSAGE")}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormInput
              id="email"
              placeholder={t("login.EMAIL_LABEL")}
              type="email"
              label={t("login.EMAIL_LABEL")}
              name="email"
              required
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
