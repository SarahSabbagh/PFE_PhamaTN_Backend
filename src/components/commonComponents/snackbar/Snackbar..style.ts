import { Alert, AlertProps, styled } from "@mui/material";

export const AlertStyle = styled(Alert)<AlertProps>(({ theme }) => ({
  width: 600,
  //display: "flex",
  flexDirection: "row",
  borderRadius: "0.2rem",
}));
