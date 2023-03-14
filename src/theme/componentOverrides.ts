import { Theme } from "@mui/material";
import InputBase from "./overrides/InputBase";
import Button from "./overrides/Button";
import Typography from "./overrides/Typography";
import Link from "./overrides/Link";
import InputLabel from "./overrides/InputLabel";
import Container from "./overrides/Container";
import Box from "./overrides/Box";
import FormHelperText from "./overrides/FormHelperText";
import Paper from "./overrides/Paper";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Paper(theme),
    Typography,
    InputBase(theme),
    InputLabel,
    Container(theme),
    FormHelperText(theme),
    Box
  );
}
