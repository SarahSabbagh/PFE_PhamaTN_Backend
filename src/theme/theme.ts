import { createTheme } from "@mui/material";
import ComponentsOverrides from "./componentOverrides";
import { typography } from "./overrides/Typography";
import { palette } from "./palette";
const theme = createTheme({
  palette,
  typography,
});
theme.components = ComponentsOverrides(theme);
export default theme;
