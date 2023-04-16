import * as React from "react";
import logoPharmaTn from "../../../assets/logo.png";
import { StyledGrid, StyledLogo, StyledTypography } from "./LogoNavbar.style";
import { StyledLogoNavbarProps } from "./LogoNavbar.types";
import { Grid } from "@mui/material";

export const LogoNavbar: React.FC<StyledLogoNavbarProps> = (props) => {
  const { isNotAuthenticated, logoxs } = props;
  return (
    <StyledGrid
      logoxs={logoxs}
      isNotAuthenticated={isNotAuthenticated}
      item
      container
    >
      <Grid item>
        <StyledLogo src={logoPharmaTn} alt="logo PharmaTN" />
      </Grid>
      {!logoxs && (
        <Grid item>
          <StyledTypography isNotAuthenticated to="/">
            PHARMATN
          </StyledTypography>
        </Grid>
      )}
    </StyledGrid>
  );
};
