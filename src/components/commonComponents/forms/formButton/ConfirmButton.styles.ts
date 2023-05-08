import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";

export const ConfirmButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: "6rem",
  marginLeft: " 0.25rem",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,

  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
}));