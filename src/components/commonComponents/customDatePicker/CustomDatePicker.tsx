import * as React from "react";
import { InputLabel, FormHelperText, Stack } from "@mui/material";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { CustomDatePickerProps } from "./CustomDatePicker.types";
import { StyledTextField } from "./CustomDatePicker.style";

export const CustomDatePicker: React.FC<CustomDatePickerProps> = (props) => {
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
            disableFuture
            onChange={(date: any) => {
              const formattedDate = dayjs(date).format("YYYY-MM-DD");
              onChange(formattedDate);
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
