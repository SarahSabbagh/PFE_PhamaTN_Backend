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
import { StyledBoxSideBar, StyledLink } from "./Sidebar.style";
import { SideBarMenuList } from "../../core/constants/list/menuList/SideBarMenuList";

const ResponsiveSideBar: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <StyledBoxSideBar>
      <List>
        {SideBarMenuList.map((item) => (
          <>
            <ListItem key={item.id} disablePadding sx={{ flex: 1 }}>
              <StyledLink to={item.url}>
                <ListItemButton key={item.title} onClick={handleClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </StyledLink>   </ListItem>
              {item.subMenu && (open ? <ExpandLess /> : <ExpandMore />) && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {item.subMenu.map((nestedPage) => (
                      <ListItem key={nestedPage.id} disablePadding>
                        <StyledLink to={nestedPage.url}>
                          <ListItemButton key={nestedPage.title} sx={{ pl: 4 }}>
                            <ListItemIcon>{nestedPage.icon}</ListItemIcon>
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
      </List>
    </StyledBoxSideBar>
  );
};
export default ResponsiveSideBar;
