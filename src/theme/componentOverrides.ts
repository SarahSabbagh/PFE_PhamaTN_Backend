import { Theme } from "@mui/material";
import InputBase from "./overrides/InputBase";
import Button from "./overrides/Button";
import Typography from "./overrides/Typography";
import Link from "./overrides/Link";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Typography,
    InputBase(theme),
    Link(theme)
  );
}
