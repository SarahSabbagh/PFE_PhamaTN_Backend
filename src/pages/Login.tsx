import * as React from "react";
import Box from "@mui/material/Box";
import { BasicInputField } from "../components/InputField/BasicInputField";
import { BasicButton } from "../components/basicButton/BasicButton";
import { BasicBox } from "../components/BasicBox/BasicBox";
import { FC } from "react";
import { PasswordInput } from "../components/InputField/PasswordInput";
import { PageContainer } from "../components/signInContainer/SignInContainer";
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
    <PageContainer title="SignIn">
      <BasicBox title="Sign in">
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <BasicInputField id="email" placeholder="email" type="email" />
          <PasswordInput id="password" placeholder="password" />
          <Button type="submit">Connexion</Button>
        </Box>
      </BasicBox>
    </PageContainer>
  );
};
