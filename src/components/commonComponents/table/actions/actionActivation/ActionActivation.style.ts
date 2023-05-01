import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { colors } from "../../../../../core/constants/colors";

export const ConfirmButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  minWidth: "6rem",
  borderRadius: "3rem",
  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
  },
}));
export const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: "3rem",
  minWidth: "6rem",
  color: theme.palette.background.default,
  backgroundColor: colors.grey.main,

  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: colors.grey.dark,
  },
}));
