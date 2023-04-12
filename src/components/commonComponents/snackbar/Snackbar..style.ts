import { Alert, AlertProps, styled } from "@mui/material";

export const AlertStyle = styled(Alert)<AlertProps>(({ theme }) => ({
  width: "30vw",
  //display: "flex",
  flexDirection: "row",
  //justifyContent: "left",
  borderRadius: "0.2rem",
}));
