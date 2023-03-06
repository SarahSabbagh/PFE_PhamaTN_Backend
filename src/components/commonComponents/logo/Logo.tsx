import * as React from "react";
import { StyledLogo } from "./Logo.style";
import logoPharmaTn from "../../../assets/Logo.png";

export const Logo: React.FC = () => {
  return <StyledLogo src={logoPharmaTn} alt="logo PharmaTN" />;
};
