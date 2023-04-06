import {
  FormHelperText,
  InputLabel,
  InputProps,
  MenuItem,
  SelectProps,
  Stack,
} from "@mui/material";
import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SyledPlaceholder, SelectFieldStyle } from "./SelectField.style";
import { SelectFieldProps } from "./SelectField.types";

export const SelectField: React.FC<
  SelectFieldProps & SelectProps & InputProps
> = (props) => {
  const { id, label, name, options } = props;
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <SelectFieldStyle {...field} id={id} displayEmpty error={!!error}>
            <MenuItem disabled value="0">
              <SyledPlaceholder>{label}</SyledPlaceholder>
            </MenuItem>
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </SelectFieldStyle>
          <FormHelperText id={id} error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
