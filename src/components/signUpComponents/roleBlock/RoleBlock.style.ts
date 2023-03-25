import {
  Chip,
  Typography,
  TypographyProps,
  ChipProps,
  styled,
} from "@mui/material";
import { fonts } from "../../../core/constants/fonts";

/* ----------------------------------------------  Styled Chip  -------------------------------------------------*/

export const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  fontFamily: fonts.POPPINS_REGULAR,
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  "&:hover": { backgroundColor: theme.palette.secondary.light },
  "&:focus": { backgroundColor: theme.palette.secondary.light },
  // "&.MuiChip-colorPrimary": { backgroundColor: theme.palette.primary.light },
  "&.MuiChip-colorError	": { color: theme.palette.error.main },
  " &.MuiChip-clickable": { backgroundColor: theme.palette.primary.light },
}));

/* ----------------------------------------------  Styled Typography  -------------------------------------------------*/
export const StyledQuestion = styled(Typography)<TypographyProps>({
  lineHeight: 2,
  fontFamily: fonts.PRIMARY_BOLD,
});

