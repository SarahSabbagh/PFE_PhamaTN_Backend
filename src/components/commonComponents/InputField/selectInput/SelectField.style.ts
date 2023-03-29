import {
  InputProps,
  PaperProps,
  Select,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { fonts } from "../../../../core/constants/fonts";

export const SelectFieldStyle = styled(Select)<InputProps & PaperProps>(
  ({ theme }) => ({
    "& fieldset": { border: "none" },
    "& .MuiSelect-icon": {
      color: theme.palette.primary.main,
    },
    "& .MuiSelect-outlined": {
      OverflowX: "scroll",
    },
    padding: 0,
  })
);
export const SyledPlaceholder = styled(Typography)<TypographyProps>({
  color: "#B5B5B5",
  fontFamily: fonts.PRIMARY,
});
