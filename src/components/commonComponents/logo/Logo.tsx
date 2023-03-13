import * as React from "react";
import { StyledLogo } from "./Logo.style";
import logoPharmaTn from "../../../assets/logo.png";
import { Box } from "@mui/material";

export const Logo: React.FC = () => {
  return (
    <Box
      component="img"
      sx={{
        maxHeight: "7.5rem",
        minWidth: "6rem",
      }}
      alt="logo PharmaTN"
      src={logoPharmaTn}
    />
  );
  // return <StyledLogo src={logoPharmaTn} alt="logo PharmaTN" />;
};
