import { Button, ButtonProps, styled } from "@mui/material";

export const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.light,
  },
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.info.light,
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "1.25rem",
  margin: "0.5rem auto",
  fontSize: "1.2rem",
  width: "19.75rem",
  height: "3.75rem",
  [theme.breakpoints.down("sm")]: {
    width: "60vw",
  },
}));

