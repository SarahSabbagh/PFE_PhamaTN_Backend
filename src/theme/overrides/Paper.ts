import { Theme } from "@mui/material";

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "32vw",
          minWidth: "320px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "2%",
          margin: "auto",
          border: "1px solid" && theme.palette.background.paper,
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
}
