import { Theme } from "@mui/material";

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          padding: 8,
          display: "flex",
          flexDirection: "column",
          justifContent: "center",
          alignItems: "center",
          fontSize: 16,
          minWidth: "100vw",
          height: "100vh",
        },
      },
    },
  };
}
