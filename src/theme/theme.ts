import { createTheme } from "@mui/material";
import ComponentsOverrides from "./componentOverrides";
import { breakpoints } from "./breakpoints";
import { typography } from "./overrides/Typography";
import { palette } from "./palette";

const theme = createTheme({
  palette,
  typography,
  breakpoints,
});
theme.components = ComponentsOverrides(theme);
export default theme;
