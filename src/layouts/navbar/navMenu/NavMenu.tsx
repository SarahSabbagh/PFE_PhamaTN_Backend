import * as React from "react";
import { NavbarProps } from "../Navbar.types";
import { StyledBox, StyledButton, StyledLink } from "./NavMenu.style";

export const MenuList: React.FC<NavbarProps> = (props) => {
  const { handleClose, pages, isAuthenticated } = props;
  return (
    <StyledBox isAuthenticated={isAuthenticated}>
      {pages &&
        pages.map((page) => (
          <StyledButton key={page.route} onClick={handleClose}>
            <StyledLink to={page.route}>{page.name}</StyledLink>
          </StyledButton>
        ))}
    </StyledBox>
  );
};
