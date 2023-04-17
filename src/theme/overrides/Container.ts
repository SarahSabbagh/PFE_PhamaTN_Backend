import { Theme } from "@mui/material";
import { fonts } from "../../core/constants/fonts";

export default function Container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.default,
          fontFamily: fonts.PRIMARY,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          // minWidth: "100vw",
          margin: 0,
          minWidth: "85.7vw",
          minHeight: "100vh",
        },
      },
    },
  };
}
