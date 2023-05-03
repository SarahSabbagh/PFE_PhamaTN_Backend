import * as React from "react";
import {
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { StyledLink } from "../Sidebar.style";
import { SideBarMenuList } from "../../../core/constants/list/menuList/SideBarMenuList";
import { StyledList, StyledListItemIcon } from "./ListSidebar.style";

export const ListSidebar: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <StyledList>
      {SideBarMenuList.map((item, index) => (
        <>
          <ListItem key={item.id} disablePadding>
            <StyledLink to={item.url}>
              <ListItemButton onClick={handleClick}>
                <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                <ListItemText primary={item.title} />
                {item.subMenu && (open ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </StyledLink>
          </ListItem>

          {item.subMenu && (
            <Collapse key={index} in={open} timeout="auto" unmountOnExit>
              <List disablePadding>
                {item.subMenu.map((nestedPage) => (
                  <ListItem key={nestedPage.id} disablePadding>
                    <StyledLink to={nestedPage.url}>
                      <ListItemButton sx={{ pl: 4 }}>
                        <StyledListItemIcon>
                          {nestedPage.icon}
                        </StyledListItemIcon>
                        <ListItemText primary={nestedPage.title} />
                      </ListItemButton>
                    </StyledLink>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
          <Divider />
        </>
      ))}
    </StyledList>
  );
};
