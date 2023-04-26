import { Theme } from "@mui/material";

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        },
      },
    },
  };
}
