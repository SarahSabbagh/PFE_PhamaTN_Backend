import * as React from "react";
import {
  InputBase,
  InputProps,
  InputLabel,
  FormHelperText,
  Stack,
  Typography,
} from "@mui/material";
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
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <InputBase {...field} {...props} error={!!errors[name]} />
          <FormHelperText id={id} error={!!errors[name]}>
            {errors[name] ? (errors[name]?.message  as string) : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
