import {
  InputLabel,
  InputProps,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
  Stack,
} from "@mui/material";
import * as React from "react";
import { SyledPlaceholder, SelectFieldStyle } from "./SelectField.style";
import { SelectFieldProps } from "./SelectField.types";

const names = [
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabès",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kébili",
  "Le Kef",
  "Mahdia",
  "La Manouba",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan",
];
export const SelectField: React.FC<
  SelectFieldProps & SelectProps & InputProps
> = (props) => {
  const { id, label, placeholder } = props;

  const [name, setName] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };
  return (
    <Stack>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <SelectFieldStyle
        value={name}
        onChange={(event: any) => handleChange(event)}
        id={id}
        displayEmpty
      >
        <MenuItem disabled value="">
          <SyledPlaceholder>{label}</SyledPlaceholder>
        </MenuItem>
        {names.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </SelectFieldStyle>
    </Stack>
  );
};
