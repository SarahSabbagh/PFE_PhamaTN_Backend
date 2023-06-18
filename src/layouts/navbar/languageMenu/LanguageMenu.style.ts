import * as React from "react";
import {
  Badge,
  BadgeProps,
  IconButton,
  IconButtonProps,
  Menu,
  MenuProps,
  styled,
} from "@mui/material";
import { Link, LinkProps } from "react-router-dom";

export const StyledIconButton = styled(IconButton)<IconButtonProps>({
  padding: 0,
  margin: "0 0.5rem",
});
export const StyledBadge = styled(Badge)<BadgeProps>({
  "& .MuiBadge-badge": { padding: "0.25rem" },
});
export const StyledMenu = styled(Menu)<MenuProps>(({ theme }) => ({
  "& .MuiPaper-root": {
    overflow: "visible",
    marginTop: "0.125rem",
    padding: 0,

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