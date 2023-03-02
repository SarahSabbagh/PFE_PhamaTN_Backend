import { Theme } from "@mui/material";

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            borderColor: theme.palette.primary.light,
          },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.info.light,
          border: "1px solid",
          borderColor: theme.palette.primary.main,
          borderRadius: 5,
          padding: 8,
          marginBottom: 8,
          marginTop: 8,
          textAlign: "center",
          height: "60px",
        },
      },
    },
  };
}
