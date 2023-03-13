import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { labels } from "../core/constants/label";
import { buttonsValues } from "../core/constants/buttonsValues";
import { titles } from "../core/constants/title";
import { TypeOf } from "zod";
import { loginSchema } from "../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSignIn } from "../components/signInComponents/buttonSignIn/ButtonSignIn";

export const SignIn: FC = () => {
  type ILoginRequest = TypeOf<typeof loginSchema>;

  // ? Default Values
  const defaultValues: ILoginRequest = {
    email: "",
    password: "",
  };
  const methods = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [login] = useLoginMutation();

  const submitHandler: SubmitHandler<ILoginRequest> = (data) => {
    login(data);
    console.log(data);
  };

  return (
    <SignInContainer title={titles.PAGE_SIGN_IN}>
      <Grid>
        <FormProvider {...methods}>
          <SignInPaper title={titles.APP}>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              method="POST"
              noValidate
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="100%"
            >
              {/* ----------------------------------------  Email   ----------------------------------------------*/}
              <Grid xs={12}>
                <FormInput
                  id="email"
                  placeholder={labels.EMAIL}
                  type="email"
                  label={labels.EMAIL}
                  name="email"
                  required
                />
              </Grid>
              {/* ----------------------------------------  Password   ----------------------------------------------*/}
              <Grid xs={12}>
                <FormInput
                  id="password"
                  type="password"
                  label={labels.PASSWORD}
                  name="password"
                  placeholder={labels.PASSWORD}
                  eyeIcon
                />
              </Grid>
              {/* ----------------------------------------  Button SignIn   ----------------------------------------------*/}

              <ButtonSignIn type="submit">{buttonsValues.SIGN_IN}</ButtonSignIn>
            </Box>
          </SignInPaper>
        </FormProvider>
      </Grid>
    </SignInContainer>
  );
};
