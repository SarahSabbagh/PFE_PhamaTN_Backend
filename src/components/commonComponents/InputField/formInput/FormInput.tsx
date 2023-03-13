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
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { id, name, label, eyeIcon } = props;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <InputBase
            {...field}
            {...props}
            type={eyeIcon ? (showPassword ? "text" : "password") : "text"}
            endAdornment={
              props.eyeIcon ? (
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
              ) : null
            }
            error={!!errors[name]}
          />
          <FormHelperText id={id} error={!!errors[name]}>
            {errors[name] ? (errors[name]?.message as string) : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
