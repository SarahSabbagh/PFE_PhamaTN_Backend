import * as React from "react";
import { InputBase, InputProps, InputLabel } from "@mui/material";
import { FormInputProps } from "./FormInput.types";
import { Controller, useFormContext } from "react-hook-form";

export const FormInput: React.FC<FormInputProps & InputProps> = (props) => {
  const { id, name, label } = props;
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <InputBase {...field} {...props} error={!!errors[name]} />
        </>
      )}
    />
  );
};
