import { Theme } from "@mui/material";

export default function FormHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: theme.palette.error.main,

          marginTop: "-3px",
          minHeight: "22px",
          "&.Mui-error": {
            color: theme.palette.error.main,
          },
        },
      },
    },
  };
}
