import { Theme } from "@mui/material";

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 60,
          color: "darkslategray",
          backgroundColor: theme.palette.background.default,
          border: "1px solid #FEFFDF",
          borderRadius: 5,
          padding: 8,
          marginBottom: 8,
          marginTop: 8,
          fontSize: 16,
          textoverflow: "ellipsis",
          ":hover": {
            border: "2px solid ",
            borderColor: theme.palette.primary.light,
          },
        },
      },
    },
  };
}
