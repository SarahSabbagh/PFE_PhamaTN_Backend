import * as React from "react";
import { Grid, IconButton, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledBox, StyledLink, StyledMenu } from "./IconMenu.style";
import { NavbarProps } from "../Navbar.types";

export const IconMenu: React.FC<NavbarProps> = (props) => {
  const { anchorEl, handleClose, handleOpen, pages } = props;
  return (
    <Grid container item>
      <StyledBox>
        <IconButton size="large" onClick={handleOpen} color="primary">
          <MenuIcon />
        </IconButton>
        <StyledMenu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pages &&
            pages.map((page) => (
              <MenuItem key={page.route} onClick={handleClose}>
                <StyledLink to={page.route}>{page.name}</StyledLink>
              </MenuItem>
            ))}
        </StyledMenu>
      </StyledBox>
    </Grid>
  );
};
