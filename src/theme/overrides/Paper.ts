import { Theme } from "@mui/material";

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          width: "30vw",
          minWidth: "320px",
          [theme.breakpoints.down("sm")]: {
            height: "100vh",
            width: "100vw",
          },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "6%",
          border: "1px solid" && theme.palette.background.paper,
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
        },
      },
    },
  };
}
