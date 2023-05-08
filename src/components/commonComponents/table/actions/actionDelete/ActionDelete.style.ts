import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { colors } from "../../../../../core/constants/colors";

export const DeleteButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: "6rem",
  backgroundColor: theme.palette.error.main,
  color: theme.palette.background.default,

  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.error.main,
  },
}));
export const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: "6rem",
  color: theme.palette.background.default,
  backgroundColor: colors.grey.main,

  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: colors.grey.dark,
  },
}));
