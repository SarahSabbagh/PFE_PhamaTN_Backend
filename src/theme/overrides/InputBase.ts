import { Theme } from "@mui/material";
import { fonts } from "../../core/constants/fonts";
import { colors } from "../../core/constants/colors";

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "3.125rem",
          color: colors.inputColor,
          backgroundColor: theme.palette.background.default,
          border: `1px solid  ${colors.borderColor} `,
          borderRadius: "0.3125rem",
          padding: "0.5rem",
          margin: "0.5rem 0",
          fontFamily: fonts.PRIMARY,
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
