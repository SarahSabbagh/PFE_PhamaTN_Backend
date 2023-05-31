import { Grid, GridProps, styled } from "@mui/material";
import { StyledLogoNavbarProps } from "./LogoNavbar.types";
import { Link, LinkProps } from "react-router-dom";

export const StyledLogo = styled("img")({
  minHeight: "2.5rem",
  maxHeight: "3.5rem",
  maxWidth: "4rem",
  marginRight: "0.0625rem",
});
export const StyledGrid = styled(Grid)<GridProps>(() => ({
  flexDirection: "row",
  alignItems: "center",
}));
export const StyledTypography = styled(Link)<LinkProps & StyledLogoNavbarProps>(
  ({ isnotauthenticated, theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: isnotauthenticated ? "flex" : "none",
    },

    [theme.breakpoints.down("md")]: {
      display: isnotauthenticated ? "none" : "flex",
    },
    marginRight: "0.125rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    letterSpacing: ".1rem",
    color: theme.palette.primary.main,
    textDecoration: "none",
  })
);
export const StyledGridLogo = styled(Grid)<GridProps & StyledLogoNavbarProps>(
  ({ isnotauthenticated, theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: isnotauthenticated ? "none" : "flex",
    },
  })
);
