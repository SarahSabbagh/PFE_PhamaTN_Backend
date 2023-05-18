import * as React from "react";
import { InputLabel, FormHelperText, Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { CustomDatePickerProps } from "./CustomDatePicker.types";
import { StyledTextField } from "./CustomDatePicker.style";
import { DateFormatISO } from "../../../core/utils/DateFormat";

export const CustomDatePicker: React.FC<
  CustomDatePickerProps & DatePickerProps<Dayjs>
> = (props) => {
  const { control, getValues } = useFormContext();
  const { id, name, label } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <Stack>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <DatePicker
            format="YYYY-MM-DD"
            onChange={(date: any) => {
              onChange(DateFormatISO(date));
            }}
            slots={{
              textField: (params: any) => (
                <StyledTextField
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "YYYY-MM-DD",
                  }}
                  error={!!error}
                  value={getValues(name)}
                />
              ),
            }}
          />

          <FormHelperText id={id} error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </Stack>
      )}
    />
  );
};
