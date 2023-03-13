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
  padding: "0.5rem",
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
  fontSize: "1.2rem",
  width: "19.75rem",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  height: "3.75rem",
  [theme.breakpoints.down("sm")]: {
    width: "50vw",
  },
}));
