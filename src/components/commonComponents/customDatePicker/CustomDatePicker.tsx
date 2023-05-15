import * as React from "react";
import { InputLabel, FormHelperText, Stack } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { CustomDatePickerProps } from "./CustomDatePicker.types";

export const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
  const { control } = useFormContext();
  const { id, name, label, defaultValue } = props;

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs(defaultValue || new Date())
  );
  const handleChange = (newValue: Dayjs | null) => setValue(newValue);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <DatePicker
            {...field}
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            value={value}
            format="YYYY-MM-DD"
            onChange={handleChange}
          />

          <FormHelperText id={id} error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
