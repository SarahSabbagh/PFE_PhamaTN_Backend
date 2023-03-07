import { Theme } from "@mui/material";

export default function FormHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 9,
          marginTop: 0,
          paddingBottom: 7,
        },
      },
    },
  };
}
