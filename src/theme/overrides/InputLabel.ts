import { fonts } from "../../core/constants/fonts";

export default function InputLabel() {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: fonts.PRIMARY,
          textAlign: "left",
          fontSize: "0.875rem",
          marginButtom: 0,
        },
      },
    },
  };
}
