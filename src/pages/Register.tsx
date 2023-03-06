import * as React from "react";
import Box from "@mui/material/Box";
import { BasicInputField } from "../components/commonComponents/InputField/basicInput/BasicInputField";
import { SignInPaper } from "../components/signInComponents/signInPaper/SignInPaper";
import { FC } from "react";
import { PasswordInput } from "../components/commonComponents/InputField/passwordInput/PasswordInput";
import { Button, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";

export const Register: FC = () => {
  return (
    <PageContainer title="PharmaTN-Register">
      <Grid>
        <Paper>
          <Box
            component="form"
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
        </Paper>
      </Grid>
    </PageContainer>
  );
};
