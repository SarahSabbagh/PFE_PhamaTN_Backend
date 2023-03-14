import { Theme } from "@mui/material";
import { fonts } from "../../core/constants/fonts";

export default function FormHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: fonts.POPPINS_LIGHT,
          color: theme.palette.error.main,
          marginTop: "-0.1875rem",
          minHeight: "1.375rem",
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
        },
      },
    },
  };
}
