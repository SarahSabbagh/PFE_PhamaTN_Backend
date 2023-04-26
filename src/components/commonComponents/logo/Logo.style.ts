import { styled } from "@mui/material";
import { LogoProps } from "./Logo.types";

export const StyledLogo = styled("img")<LogoProps>(({ sidebarLogo }) => ({
  minHeight: sidebarLogo ? "5rem" : "7.5rem",
  Width: "6rem",
  maxWidth: sidebarLogo ? "6rem" : "7.5rem",
}));
