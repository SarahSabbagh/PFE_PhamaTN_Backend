import { Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.5rem",
          border: "1px solid",
          textAlign: "center",
        },
      },
    },
  };
}
