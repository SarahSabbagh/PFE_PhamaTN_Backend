import React, { useState } from "react";
import {
  Autocomplete,
  FormHelperText,
  Stack,
  InputLabel,
  InputBase,
  IconButton,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useTranslation } from "react-i18next";
import { CustomAutocompleteProps } from "./CustomAutocomplete.style";

export const CustomAutocomplete: React.FC<CustomAutocompleteProps> = (
  props
) => {
  const { id, label, name, options, placeholder } = props;
  const { control } = useFormContext();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          onChange={(event, values) => onChange(values)}
          value={value}
          id={id}
          disablePortal
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          options={options}
          renderInput={(params) => (
            <Stack>
              <InputLabel htmlFor={id}>{label}</InputLabel>
              <InputBase
                onChange={onChange}
                placeholder={placeholder}
                ref={params.InputProps.ref}
                id={id}
                inputProps={params.inputProps}
                autoFocus
                error={!!error}
                endAdornment={
                  <IconButton onClick={() => setOpen(!open)} edge="end">
                    {open ? (
                      <ArrowDropUpIcon color="primary" />
                    ) : (
                      <ArrowDropDownIcon color="primary" />
                    )}
                  </IconButton>
                }
              />

              <FormHelperText id={id} error={!!error}>
                {error ? t(`${error?.message}`) : ""}
              </FormHelperText>
            </Stack>
          )}
        />
      )}
    />
  );
};
