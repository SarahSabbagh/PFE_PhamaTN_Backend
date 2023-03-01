import * as React from "react";
import { InputBase, InputProps } from "@mui/material";
import { StyledInputBase, StyledInputLabel } from "./BasicInputField.style";
import { BasicInputFieldProps } from "./BasicInputField.types";

export const BasicInputField: React.FC<BasicInputFieldProps & InputProps> = (
  props
) => {
  const { id, placeholder, type } = props;

  return (
    <section>
      <StyledInputLabel htmlFor={id}>{placeholder}</StyledInputLabel>
      <InputBase id={id} placeholder={placeholder} type={type} required />
    </section>
  );
};
