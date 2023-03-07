import * as React from "react";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  InputProps,
} from "@mui/material";
import { PasswordInputProps } from "./PasswordInputProps.types";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

export const PasswordInput: React.FC<PasswordInputProps & InputProps> = (
  props
) => {
  const { id, name, label } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
          <InputBase
            {...field}
            {...props}
            type={showPassword ? "text" : "password"}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
            error={!!errors[name]}
          />
          <FormHelperText id={id} error={!!errors[name]}>
            {errors[name] ? (errors[name]?.message as string) : ""}
          </FormHelperText>
        </>
      )}
    />
  );
};
