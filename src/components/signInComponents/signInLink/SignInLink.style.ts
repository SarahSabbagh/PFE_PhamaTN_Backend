import { Link, LinkProps, styled } from "@mui/material";
import { fonts } from "../../../core/constants/fonts";

/* ---------------------------------------------- styled Link Forget Password -----------------------------------------*/
export const StyledLinkForgetPassword = styled(Link)<LinkProps>(
  ({ theme }) => ({
    fontSize: "0.875rem",
    fontFamily: fonts.PRIMARY_BOLD,
    textAlign: "center",
    color: theme.palette.primary.dark,
    textDecoration: "underline",
    ":hover": {
      color: theme.palette.secondary.dark,
      textDecoration: theme.palette.secondary.light,
    },
  })
);

/* ----------------------------------------------  Styled Link SignUp  -------------------------------------------------*/
export const StyledLinkSignUp = styled(Link)<LinkProps>(({ theme }) => ({
  fontFamily: fonts.SECONDARY_BOLD,
  fontSize: "0.875rem",
  textAlign: "center",
  color: theme.palette.primary.dark,
  textDecoration: theme.palette.primary.dark,
  ":hover": {
    color: theme.palette.secondary.dark,
    textDecoration: theme.palette.secondary.light,
  },
}));
