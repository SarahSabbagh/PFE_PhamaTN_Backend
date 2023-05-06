import {
  InputProps,
  MenuItem,
  MenuItemProps,
  PaperProps,
  Select,
  styled,
  Typography,
  TypographyProps,
} from "@mui/material";
import { fonts } from "../../../../core/constants/fonts";
import { colors } from "../../../../core/constants/colors";

export const SelectFieldStyle = styled(Select)<InputProps & PaperProps>(
  ({ theme }) => ({
    "& fieldset": { border: "none" },
    "& .MuiSelect-icon": {
      color: theme.palette.primary.main,
    },
    "& .MuiSelect-outlined": {
      OverflowX: "scroll",
    },
  })
);
export const SyledPlaceholder = styled(Typography)<TypographyProps>({
  color: colors.PlaceholderColor,
  fontFamily: fonts.PRIMARY,
});

export const SyledMenuItem = styled(MenuItem)<MenuItemProps>({
  "&.MuiMenu-paper": { padding: 0 },
  // color: colors.PlaceholderColor,
  // fontFamily: fonts.PRIMARY,
});
