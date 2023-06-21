import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import { VerifyPinProps } from "./ForgotPassword.types";
import { IVerifyPinRequest } from "../../redux/api/types/IForgotResetPassword";
import { verifyPinSchema } from "../../core/utils/validator/ForgotResetPassword";
import { useVerifyPinMutation } from "../../redux/api/forgotResetPassword/ForgotResetPassword";
import { SignInPaper } from "../../components/signInComponents/signInPaper/SignInPaper";
import { FormInput } from "../../components/commonComponents/InputField/formInput/FormInput";
import { ButtonSignIn } from "../../components/signInComponents/buttonSignIn/ButtonSignIn";

export const VerifyPin: FC<VerifyPinProps> = (props) => {
  const { handleVerifyPin, email } = props;
  const { t } = useTranslation();

  const methods = useForm<IVerifyPinRequest>({
    resolver: zodResolver(verifyPinSchema),
    defaultValues: { email: email },
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const [verifyPin, { isLoading }] = useVerifyPinMutation();
  const submitHandler: SubmitHandler<IVerifyPinRequest> = (data) => {
    verifyPin(data)
      .unwrap()
      .then((response) => {
        handleVerifyPin(),
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
      <SignInPaper  forgotPasswordLink={true} title={t("login.TITLE_APP")}>
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
              {t("forgotResetPassword.ENTER_CODE")}
            </Typography>
            <Typography variant="h6">
              {t("forgotResetPassword.ENTER_CODE_MESSAGE")}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <FormInput
              id="email"
              placeholder={t("login.EMAIL_LABEL")}
              type="email"
              label={t("login.EMAIL_LABEL")}
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <FormInput
              id="token"
              placeholder={t("forgotResetPassword.CODE")}
              type="text"
              label= {t("forgotResetPassword.CODE")}
              name="token"
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
