import { Stack, Typography } from "@mui/material";
import * as React from "react";
import { StyledLink1, StyledLink2 } from "./SignInLink.style";

export const SignInLink: React.FC = () => {
  return (
    <Stack>
      <StyledLink1 href="#" variant="body2">
        Mot de passe oublié ?
      </StyledLink1>
      <Typography variant="h6">{"Vous n'avez pas de compte ? "}</Typography>
      <StyledLink2 href="#" variant="body2">
        {"S'INSCRIRE"}
      </StyledLink2>
    </Stack>
  );
};
