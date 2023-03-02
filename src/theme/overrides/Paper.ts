import { Theme } from "@mui/material";

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          display: "flex",
          width: 500,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "2%",
          border: "1px solid" && theme.palette.background.paper,
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
}
