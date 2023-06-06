import * as React from "react";
import { Grid, ListItemText, MenuItem } from "@mui/material";
import { StyledIconButton, StyledMenu } from "./LanguageMenu.style";
import { NavbarProps } from "../Navbar.types";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useTranslation } from "react-i18next";

const languageMenu = [
  { language: "fr", label: "FRENCH" },
  { language: "en", label: "ENGLISH" },
];

export const LanguageMenu: React.FC<NavbarProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { anchorEl, handleClose, handleOpen } = props;
  const handleLanguage = (language: string) => {
    handleClose;
    i18n.changeLanguage(language);
  };
  return (
    <Grid item>
      <StyledIconButton onClick={handleOpen}>
        <LanguageOutlinedIcon color="primary" fontSize="large" />
      </StyledIconButton>
      <StyledMenu
        anchorEl={anchorEl}
        id="language-menu"
        open={Boolean(anchorEl)}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {languageMenu.map((item, index) => (
          <MenuItem key={index} onClick={() => handleLanguage(item.language)}>
            <ListItemText primary={t(`label.${item.label}`)} />
          </MenuItem>
        ))}
      </StyledMenu>
    </Grid>
  );
};
