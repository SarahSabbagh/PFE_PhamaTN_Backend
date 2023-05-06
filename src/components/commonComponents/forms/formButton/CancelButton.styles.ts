import * as React from "react";
import { Button, ButtonProps, styled } from "@mui/material";
import { colors } from "../../../../core/constants/colors";

export const CancelButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: "6rem",
  marginRight: " 0.25rem",
  color: theme.palette.background.default,
  backgroundColor: colors.grey.main,

  "&:hover": {
    backgroundColor: theme.palette.background.default,
    color: colors.grey.dark,
  },
}));
