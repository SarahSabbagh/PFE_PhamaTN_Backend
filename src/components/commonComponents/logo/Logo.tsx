import * as React from "react";
import { StyledLogo } from "./Logo.style";
import logoPharmaTn from "../../../assets/logo.png";
import lightLogo from "../../../assets/lightLogo.png";

import { LogoProps } from "./Logo.types";

export const Logo: React.FC<LogoProps> = (props) => {
  const { sidebarLogo } = props;
  return (
    <StyledLogo
      sidebarLogo={sidebarLogo}
      src={sidebarLogo ? lightLogo : logoPharmaTn}
      alt="logo PharmaTN"
    />
  );
};
