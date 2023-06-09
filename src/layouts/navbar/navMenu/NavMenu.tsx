import * as React from "react";
import { NavbarProps } from "../Navbar.types";
import { StyledBox, StyledButton, StyledLink } from "./NavMenu.style";
import { paths } from "../../../core/constants/path";
import { useLocation } from "react-router-dom";
import { pageLogin, pageRegister } from "../../../core/constants/list/menuList";
import { LanguageMenu } from "../languageMenu/LanguageMenu";
import { useAppropriateMenu } from "../../../hooks/translatedMenuHook";

export const MenuList: React.FC<NavbarProps> = (props) => {
  const location = useLocation();
  const { anchorEl, handleOpen, handleClose, isauthenticated } = props;
  const isCurrentURL = (url: string) => {
    return location.pathname.toLowerCase() === url.toLowerCase();
  };
  const pages = isCurrentURL(paths.LOGIN) ? pageRegister : pageLogin;
  const translatedMenuList = useAppropriateMenu(pages);
  return (
    <StyledBox isauthenticated={isauthenticated}>
      <LanguageMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      {translatedMenuList.map((page) => (
        <StyledButton key={page.url} onClick={handleClose}>
          <StyledLink to={page.url}>{page.title}</StyledLink>
        </StyledButton>
      ))}
    </StyledBox>
  );
};
