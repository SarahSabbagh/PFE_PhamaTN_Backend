import { Theme } from "@mui/material";

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 16,
          minWidth: "100vw",
          height: "100vh",
        },
      },
    },
  };
}
