import { TypographyOptions } from "@mui/material/styles/createTypography";
import { colors } from "../../core/constants/colors";

export const typography: TypographyOptions = {
  h1: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: 700,
    color: colors.primary.dark, //"#262626",
  },
  h2: {
    fontSize: "24px",
    textAlign: "center",
    fontWeight: 500,
    color: "#404040",
  },
  h3: {
    fontSize: "17px",
    fontWeight: 700,
    color: "#404040",
  },
  h6: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#404040",
  },
  button: {
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
