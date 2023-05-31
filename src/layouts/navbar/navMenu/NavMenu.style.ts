import { Box, BoxProps, Button, ButtonProps, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";
import { NavbarMenuProps } from "./NavbarMenu.types";

export const StyledBox = styled(Box)<BoxProps & NavbarMenuProps>(
  ({ isauthenticated, theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    [theme.breakpoints.down("md")]: {
      display: isauthenticated ? "flex" : "none",
    },
  })
);
export const StyledButton = styled(Button)<ButtonProps>(() => ({
  color: "primary",
  display: "block",
  border: "none",
}));
export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.primary.main,
  textDecoration: "none",
}));
