import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { TypeOf } from "zod";
import { loginSchema } from "../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSignIn } from "../components/signInComponents/buttonSignIn/ButtonSignIn";
import { useTranslation } from "react-i18next";

export type ILoginRequest = TypeOf<typeof loginSchema>;

export const SignIn: FC = () => {
  const { t } = useTranslation();

  // ? Default Values
  const defaultValues: ILoginRequest = {
    email: "",
    password: "",
  };
  const methods = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onChange",
  });
  const { handleSubmit } = methods;

  const [login] = useLoginMutation();

  const submitHandler: SubmitHandler<ILoginRequest> = (data) => {
    const response = login(data).unwrap();
  };

  return (
    <SignInContainer title={t("login.TITLE_PAGE_SIGN_IN")}>
      <Grid>
        <FormProvider {...methods}>
          <SignInPaper title={t("login.TITLE_APP")}>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              noValidate
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="100%"
            >
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
              <Grid item xs={12}>
                <FormInput
                  id="password"
                  type="password"
                  label={t("login.PASSWORD_LABEL")}
                  name="password"
                  placeholder={t("login.PASSWORD_LABEL")}
                  eyeicon
                  autoComplete="off"
                />
              </Grid>
              {/* ----------------------------------------  Button SignIn   ----------------------------------------------*/}

              <ButtonSignIn type="submit">{t("login.SIGN_IN")}</ButtonSignIn>
            </Box>
          </SignInPaper>
        </FormProvider>
      </Grid>
    </SignInContainer>
  );
};
