import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { PasswordInput } from "../components/commonComponents/InputField/passwordInput/PasswordInput";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { ILoginRequest } from "../redux/api/types/IUser";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { labels } from "../core/constants/label";
import { buttonsValues } from "../core/constants/buttonsValues";
import { pagesTitles } from "../core/constants/pagesTitle";
import { TypeOf } from "zod";
import { loginSchema } from "../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const submitHandler: SubmitHandler<ILoginRequest> = (data) => login(data);

  return (
    <SignInContainer title={pagesTitles.SIGN_IN}>
      <Grid>
        <FormProvider {...methods}>
          <SignInPaper title={pagesTitles.APP}>
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
              <FormInput
                id="email"
                placeholder={labels.EMAIL}
                type="email"
                label={labels.EMAIL}
                name="email"
                required
              />

              <PasswordInput
                id="password"
                label={labels.PASSWORD}
                name="password"
                placeholder={labels.PASSWORD}
              />
              <Button type="submit">{buttonsValues.SIGN_IN}</Button>
            </Box>
          </SignInPaper>
        </FormProvider>
      </Grid>
    </SignInContainer>
  );
};
