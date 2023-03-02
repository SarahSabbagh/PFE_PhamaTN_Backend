import * as React from "react";
import Box from "@mui/material/Box";
import { BasicInputField } from "../components/InputField/basicInput/BasicInputField";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { PasswordInput } from "../components/InputField/passwordInput/PasswordInput";
import { Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PageContainer } from "../components/PageContainer/PageContainer";

export const Register: FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <PageContainer title="PharmaTN-Register">
      <Grid>
        <SignInPaper title="PharmaTN">
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <BasicInputField id="email" placeholder="Email" type="email" />
            <PasswordInput id="password" placeholder="Mot de passe" />
            <Button type="submit">Connexion</Button>
          </Box>
        </SignInPaper>
      </Grid>
    </PageContainer>
  );
};
