import {
  Chip,
  Typography,
  TypographyProps,
  ChipProps,
  styled,
} from "@mui/material";

/* ----------------------------------------------  Styled Chip  -------------------------------------------------*/

export const StyledChip = styled(Chip)<ChipProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.875rem",
  "&:focus": {
    backgroundColor: theme.palette.secondary.light,
  },
  "&:hover": { backgroundColor: theme.palette.secondary.light },
}));

/* ----------------------------------------------  Styled Typography  -------------------------------------------------*/
export const StyledQuestion = styled(Typography)<TypographyProps>({
  lineHeight: 2,
});
