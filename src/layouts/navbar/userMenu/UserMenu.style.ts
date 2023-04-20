import * as React from "react";
import {
  IconButton,
  IconButtonProps,
  Menu,
  MenuProps,
  styled,
} from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const StyledIconButton = styled(IconButton)<IconButtonProps>({
  padding: 0,
  marginLeft: "0.125rem",
});
export const StyledMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  "& .MuiPaper-root": {
    overflow: "visible",
    marginTop: "0.125rem",
    "& .MuiAvatar-root": {
      width: "2rem",
      height: "2rem",
      marginLeft: "-0.03125rem",
      marginRight: "0.0625rem",
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: "0.875rem",
      width: "0.625rem",
      height: "0.625rem",
      backgroundColor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));
export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  textAlign: "center",
  fontSize: "1rem",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));
