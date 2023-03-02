import styled from "@emotion/styled";
import { Link, LinkProps } from "@mui/material";

export const StyledLink1 = styled(Link)<LinkProps>({
  marginBottom: 20,
  textDecoration: " underline",
});

export const StyledLink2 = styled(Link)<LinkProps>({
  fontWeight: "bold",
  textDecoration: "none",
});
