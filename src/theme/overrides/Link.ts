import { Theme } from "@mui/material";

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: 14,
          color: theme.palette.primary.dark,
          ":hover": {
            color: theme.palette.secondary.dark,
          },
        },
      },
    },
  };
}