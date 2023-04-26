import * as React from "react";
import logoPharmaTn from "../../../assets/logo.png";
import {
  StyledGrid,
  StyledGridLogo,
  StyledLogo,
  StyledTypography,
} from "./LogoNavbar.style";
import { StyledLogoNavbarProps } from "./LogoNavbar.types";
import { Grid } from "@mui/material";

export const LogoNavbar: React.FC<StyledLogoNavbarProps> = (props) => {
  const { isNotAuthenticated } = props;
  return (
    <StyledGrid item container xs="auto">
      <StyledGridLogo isNotAuthenticated={!isNotAuthenticated} item>
        <StyledLogo src={logoPharmaTn} alt="logo PharmaTN" />
      </StyledGridLogo>
      <Grid item>
        <StyledTypography isNotAuthenticated to="/">
          PHARMATN
        </StyledTypography>
      </Grid>
    </StyledGrid>
  );
};
