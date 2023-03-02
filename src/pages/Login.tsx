import * as React from "react";
import Box from "@mui/material/Box";
import { BasicInputField } from "../components/InputField/BasicInputField";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { PasswordInput } from "../components/InputField/PasswordInput";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { Button } from "@mui/material";

export const SignIn: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <SignInContainer title="SignIn">
      <SignInPaper title="Sign in">
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginTop="20px"
          width="100%"
        >
          <BasicInputField id="email" placeholder="email" type="email" />
          <PasswordInput id="password" placeholder="password" />
          <Button type="submit">Connexion</Button>
        </Box>
      </SignInPaper>
    </SignInContainer>
  );
};
