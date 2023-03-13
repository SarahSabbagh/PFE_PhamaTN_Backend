import {
  InputLabel,
  InputProps,
  MenuItem,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import * as React from "react";
import { SelectFieldStyle } from "./SelectField.style";
import { SelectFieldProps } from "./SelectField.types";

export const SelectField: React.FC<SelectFieldProps & InputProps> = (props) => {
  const { id, label, placeholder } = props;

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <SelectFieldStyle value={age} placeholder={placeholder}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </SelectFieldStyle>
    </Stack>
  );
};
