import * as React from "react";
import {
  InputBase,
  InputProps,
  InputLabel,
  FormHelperText,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { FormInputProps } from "./FormInput.types";
import { Controller, useFormContext } from "react-hook-form";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const FormInput: React.FC<FormInputProps & InputProps> = (props) => {
  const { control } = useFormContext();
  const { id, name, label, eyeicon } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <InputBase
            {...field}
            {...props}
            type={eyeicon ? (showPassword ? "text" : "password") : "text"}
            endAdornment={
              props.eyeicon ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? (
                      <VisibilityOutlinedIcon />
                    ) : (
                      <VisibilityOffOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ) : null
            }
            error={!!error}
          />
          <FormHelperText id={id} error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
