import * as React from "react";
import Box from "@mui/material/Box";
import { BasicInputField } from "../components/commonComponents/InputField/basicInput/BasicInputField";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { PasswordInput } from "../components/commonComponents/InputField/passwordInput/PasswordInput";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../redux/api/auth/authApi";
import { LoginRequest } from "../redux/api/types/IUser";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { object } from "yup";

export const SignIn: FC = () => {
  const [formState, setFormState] = React.useState<LoginRequest>({
    email: "",
    password: "",
  });

  // initial the dispatch
  const dispatch = useDispatch();

  const [Login, { isLoading }] = useLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    // Login(Object.fromEntries(formData));
  };

  return (
    <SignInContainer title="PharmaTN-SignIn">
      <Grid>
        <SignInPaper title="PharmaTN">
          <Box
            component="form"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <BasicInputField
              onChange={handleChange}
              id="email"
              placeholder="Email"
              type="email"
            />
            <PasswordInput
              onChange={handleChange}
              id="password"
              placeholder="Mot de passe"
            />

            <Button type="submit">Connexion</Button>
          </Box>
        </SignInPaper>
      </Grid>
    </SignInContainer>
  );
};
