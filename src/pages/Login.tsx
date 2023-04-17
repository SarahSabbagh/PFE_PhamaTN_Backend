import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { TypeOf } from "zod";
import { loginSchema } from "../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSignIn } from "../components/signInComponents/buttonSignIn/ButtonSignIn";
import { useTranslation } from "react-i18next";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ILoginRequest = TypeOf<typeof loginSchema>;

export const SignIn: FC = () => {
  const { t } = useTranslation();

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

  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const submitHandler: SubmitHandler<ILoginRequest> = async (data) => {
    await login(data).unwrap();
  };
  
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
    if (isError) {
      toast.error(t("login.UNAUTHORIZED"), {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [isLoading]);

  return (
    <PageContainer background title={t("login.TITLE_PAGE_SIGN_IN")}>
      <Grid>
        <FormProvider {...methods}>
          <ToastContainer />
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
              <ButtonSignIn loading={isLoading} type="submit">
                {t("login.SIGN_IN")}
              </ButtonSignIn>
            </Box>
          </SignInPaper>
        </FormProvider>
      </Grid>
    </PageContainer>
  );
};
