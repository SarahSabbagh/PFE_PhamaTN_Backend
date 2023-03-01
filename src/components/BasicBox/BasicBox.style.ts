import styled from "@emotion/styled";
import { Box, BoxProps, Link, LinkProps } from "@mui/material";
import theme from "../../theme/theme";

export const StyledBasicBox = styled(Box)<BoxProps>({
  display: "flex",
  margin: "auto",
  width: "fit-content",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  padding: "3%",
  border: "2px solid #F1FFFA",
  borderRadius: 5,
  backgroundColor: "#F1FFFA",
});

export const StyledLink1 = styled(Link)<LinkProps>({
  color: theme.palette.primary.dark,
  marginBottom: 20,
  textDecoration: " underline" && theme.palette.primary.dark,
  ":hover": {
    color: theme.palette.secondary.dark,
    textDecoration: " underline" && theme.palette.secondary.light,
  },
});

export const StyledLink3 = styled(Link)<LinkProps>({
  color: theme.palette.primary.dark,
  fontWeight: "bold",
  textDecoration: "none",
  ":hover": {
    color: theme.palette.secondary.dark,
  },
});
