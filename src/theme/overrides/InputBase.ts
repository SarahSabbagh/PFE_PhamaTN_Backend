import { Theme } from "@mui/material";

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "3.125rem          ",
          color: "darkslategray",
          backgroundColor: theme.palette.background.default,
          border: "1px solid #F2F2F2",
          borderRadius: "0.3125rem",
          padding: "0.5rem",
          marginBottom: 6,
          marginTop: "0.5rem",
          fontSize: "1rem",
          textoverflow: "ellipsis",
          ":hover": {
            border: "2px solid ",
            borderColor: theme.palette.primary.light,
          },

          "&.Mui-error": {
            borderColor: theme.palette.error.main,
          },
        },
      },
    },
  };
}
