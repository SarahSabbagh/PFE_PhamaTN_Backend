import { Theme } from "@mui/material";
import InputBase from "./overrides/InputBase";
import Button from "./overrides/Button";
import Typography from "./overrides/Typography";
import InputLabel from "./overrides/InputLabel";
import Container from "./overrides/Container";
import Box from "./overrides/Box";
import FormHelperText from "./overrides/FormHelperText";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Typography,
    InputBase(theme),
    InputLabel,
    Container(theme),
    FormHelperText(theme),
    Box
  );
}
