import {
  Grid,
  GridProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";
import { StyledLogoNavbarProps } from "./LogoNavbar.types";
import { Link, LinkProps } from "react-router-dom";

export const StyledLogo = styled("img")({
  minHeight: "2.5rem",
  maxHeight: "3.5rem",
  maxWidth: "4rem",
  marginRight: "0.0625rem",
});
export const StyledGrid = styled(Grid)<GridProps & StyledLogoNavbarProps>(
  ({ logoxs, isNotAuthenticated, theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: !isNotAuthenticated && (logoxs ? "none" : "flex"),
    },
    [theme.breakpoints.down("md")]: {
      display: !isNotAuthenticated && (logoxs ? "flex" : "none"),
    },
  })
);
export const StyledTypography = styled(Link)<LinkProps & StyledLogoNavbarProps>(
  ({ isNotAuthenticated, theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: isNotAuthenticated ? "flex" : "none",
    },
    [theme.breakpoints.down("md")]: {
      display: isNotAuthenticated ? "none" : "flex",
    },
    marginRight: "0.125rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
    letterSpacing: ".1rem",
    color: theme.palette.primary.main,
    textDecoration: "none",
  })
);
