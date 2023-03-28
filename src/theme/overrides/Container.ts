import { Theme } from "@mui/material";

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          fontFamily: "Roboto abchanel-corpo Arial Helvetica sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          minWidth: "100vw",
          minHeight: "100vh",
        },
      },
    },
  };
}
