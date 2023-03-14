import { Theme } from "@mui/material";

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          textAlign: "center",
          color: theme.palette.primary.dark,
          textDecoration: theme.palette.primary.dark,
          ":hover": {
            color: theme.palette.secondary.dark,
            textDecoration: theme.palette.secondary.light,
          },
        },
      },
    },
  };
}
