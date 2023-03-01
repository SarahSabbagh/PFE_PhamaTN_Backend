import { Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.secondary.light,
            borderColor: theme.palette.secondary.light,
          },
          backgroundColor: theme.palette.primary.main,
          color: "white",
          border: "1px solid",
          borderColor: theme.palette.primary.light,
          borderRadius: 5,
          padding: 8,
          marginBottom: 8,
          marginTop: 8,
          boxShadow: "none",
          height: "60px",
        },
      },
    },
  };
}
