import * as React from "react";
import { NavbarProps } from "../Navbar.types";
import { StyledBox, StyledButton, StyledLink } from "./NavMenu.style";
import { paths } from "../../../core/constants/path";
import { useLocation } from "react-router-dom";
import { pageLogin, pageRegister } from "../../../core/constants/list/menuList";

export const MenuList: React.FC<NavbarProps> = (props) => {
  const location = useLocation();
  const { handleClose, isAuthenticated } = props;
  const isCurrentURL = (url: string) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };
  const pages = isCurrentURL(paths.LOGIN) ? pageRegister : pageLogin;
  return (
    <StyledBox isAuthenticated={isAuthenticated}>
      {pages.map((page) => (
        <StyledButton key={page.url} onClick={handleClose}>
          <StyledLink to={page.url}>{page.title}</StyledLink>
        </StyledButton>
      ))}
    </StyledBox>
  );
};
