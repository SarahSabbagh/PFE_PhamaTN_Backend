import * as React from "react";
import { styled, TableHead, TableHeadProps } from "@mui/material";
import { colors } from "../../../../core/constants/colors";

export const StyledHead = styled(TableHead)<TableHeadProps>(({ theme }) => ({
  backgroundColor: colors.grey.xlight,
}));
