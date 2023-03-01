import { Button, ButtonProps } from "@mui/material";
import * as React from "react";
import { StyledButtonBase } from "./basicButton.style";
import { BasicButtonProps } from "./basicButton.types";

export const BasicButton: React.FC<BasicButtonProps & ButtonProps> = (
  props
) => {
  const { children } = props;
  return <Button type="submit">{children} </Button>;
};
