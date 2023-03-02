import { Theme } from "@mui/material";
import InputBase from "./overrides/InputBase";
import Button from "./overrides/Button";
import Typography from "./overrides/Typography";
import Link from "./overrides/Link";
import InputLabel from "./overrides/InputLabel";
import Paper from "./overrides/Paper";
import Container from "./overrides/Container";
import Box from "./overrides/Box";

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Typography,
    InputBase(theme),
    Link(theme),
    InputLabel,
    Paper(theme),
    Container(theme),
    Box
  );
}
