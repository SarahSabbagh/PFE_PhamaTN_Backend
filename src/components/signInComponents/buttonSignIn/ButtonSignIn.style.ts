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
  border: "1px solid",
  borderColor: theme.palette.primary.main,
  borderRadius: "0.3125rem",
  padding: "0.5rem",
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
  textAlign: "center",
  fontSize: "1.5rem",
  height: "3.75rem",
}));
