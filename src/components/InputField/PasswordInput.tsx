import * as React from "react";
import {
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
import { StyledInputLabel, StyledPasswordInput } from "./PasswordInput.style";

export const PasswordInput: React.FC<PasswordInputProps & InputProps> = (
  props
) => {
  const { id, placeholder } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <section>
      <StyledInputLabel htmlFor={id}>{placeholder}</StyledInputLabel>
      <InputBase
        id={id}
        placeholder={placeholder}
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
      />
    </section>
  );
};
