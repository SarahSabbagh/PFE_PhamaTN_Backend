import * as React from "react";
import { InputBase, InputProps, InputLabel } from "@mui/material";
import { BasicInputFieldProps } from "./BasicInputField.types";

export const BasicInputField: React.FC<BasicInputFieldProps & InputProps> = (
  props
) => {
  const { id, placeholder, type } = props;

  return (
    <>
      <InputLabel htmlFor={id}>{placeholder}</InputLabel>
      <InputBase id={id} placeholder={placeholder} type={type} required />
    </>
  );
};
