import { TypographyOptions } from "@mui/material/styles/createTypography";
import { colors } from "../../core/constants/colors";

export const typography: TypographyOptions = {
  h1: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 700,
    color: colors.primary.main, //colors.text.dark,,
  },
  h2: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: 500,
    color: colors.text.main,
  },
  h3: {
    textAlign: "left",
    fontSize: "17px",
    fontWeight: 700,
    color: colors.text.main,
  },
  h6: {
    textAlign: "left",
    fontSize: "14px",
    fontWeight: 700,
    color: colors.text.main,
  },
  button: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 2,
    letterSpacing: "normal",
  },
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
