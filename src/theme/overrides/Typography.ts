import { TypographyOptions } from "@mui/material/styles/createTypography";
import { colors } from "../../core/constants/colors";
import { fonts } from "../../core/constants/fonts";

export const typography: TypographyOptions = {
  h1: {
    fontSize: "2.2rem",
    fontFamily: fonts.SECONDARY_BOLD,
    color: colors.primary.main,
  },
  h2: {
    fontFamily: fonts.SECONDARY_BOLD,
    fontSize: "2.1rem",
    color: colors.text.primary,
  },
  h3: {
    fontSize: "1.1rem",
    fontFamily: fonts.PRIMARY_BOLD,
    color: colors.text.primary,
  },
  h6: {
    fontSize: "0.875rem",
    fontFamily: fonts.PRIMARY,
    color: colors.text.primary,
  },
  button: {
    fontFamily: fonts.SECONDARY_BOLD,
    lineHeight: 2,
    letterSpacing: "normal",
  },

  caption: { fontFamily: fonts.POPPINS_LIGHT, color: colors.error.main },
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
