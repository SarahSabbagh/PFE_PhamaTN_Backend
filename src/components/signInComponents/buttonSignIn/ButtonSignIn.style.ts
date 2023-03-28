import { Button, ButtonProps, styled } from "@mui/material";

export const StyledButtonSignIn = styled(Button)<ButtonProps>(({ theme }) => ({
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
  borderColor: theme.palette.primary.main,
  border: "1px solid",
  borderRadius: "0.3125rem",
  margin: "0.5rem 0",
  height: "3.75rem",
  fontSize: "1.4rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem",
  },
}));
