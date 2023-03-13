import { TypographyOptions } from "@mui/material/styles/createTypography";
import { colors } from "../../core/constants/colors";

export const typography: TypographyOptions = {
  h1: {
    textAlign: "center",
    fontSize: "2.2rem",
    fontWeight: 700,
    color: colors.primary.main, //colors.text.dark,,
  },
  h2: {
    fontSize: "2.1rem",
    textAlign: "center",
    fontWeight: 700,
    color: colors.text.primary,
  },
  h3: {
    textAlign: "left",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: colors.text.primary,
  },
  h6: {
    textAlign: "left",
    fontSize: "0.875rem",
    fontWeight: 700,
    color: colors.text.primary,
  },
  button: {
    textAlign: "center",
    fontWeight: 700,
    lineHeight: 2,
    letterSpacing: "normal",
  },

  caption: { color: colors.error.main },
};
export default function Typography() {
  return {
    MuiTypography: {
      styleOverrides: {
        root: {
          typography,
        },
      },
    },
  };
}
