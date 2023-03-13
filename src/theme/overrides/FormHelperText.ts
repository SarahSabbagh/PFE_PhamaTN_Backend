import { Theme } from "@mui/material";

export default function FormHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
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
