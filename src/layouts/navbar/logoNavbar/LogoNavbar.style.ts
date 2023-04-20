import {
  Grid,
  GridProps,
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
  () => ({
    flexDirection: "row",
    alignItems: "center",
  })
);
export const  StyledTypography = styled(Link)<LinkProps & StyledLogoNavbarProps>(
  ({ isNotAuthenticated, theme }) => ({
    [theme.breakpoints.up("sm")]: {
      display: isNotAuthenticated ? "flex" : "none",
    },
    [theme.breakpoints.down("sm")]: {
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
