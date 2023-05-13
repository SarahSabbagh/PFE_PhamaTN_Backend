import { Dialog, DialogProps, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  "& .MuiDialog-paper": {
    [theme.breakpoints.down("sm")]: {
      minWidth: "100vw",
      margin: 0,
      borderRadius: 0,
    },
    [theme.breakpoints.down("md")]: {
      minWidth: "80vw",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "50vw",
    },
  },
}));
