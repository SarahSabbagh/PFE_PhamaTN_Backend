import * as React from "react";
import {
  Collapse,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { StyledLink } from "../Sidebar.style";
import { SideBarMenuList } from "../../../core/constants/list/sideBarMenuList";
import { StyledList, StyledListItemIcon } from "./ListSidebar.style";

export const ListSidebar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [collapse, setCollapse] = React.useState<string>("");

  const handleClick = (id: string) => {
    setOpen(!open);
    setCollapse(id);
  };

  return (
    <StyledList>
      {SideBarMenuList.map((item) => (
        <Grid key={item.id}>
          <ListItem disablePadding>
            <StyledLink to={item.url}>
              <ListItemButton
                onClick={item.subMenu && (() => handleClick(item.id))}
              >
                <StyledListItemIcon>{item.icon}</StyledListItemIcon>
                <ListItemText primary={item.title} />
                {item.subMenu && (open ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </StyledLink>
          </ListItem>

          {item.subMenu && (
            <Collapse
              in={open && collapse === item.id}
              timeout="auto"
              unmountOnExit
            >
              <List disablePadding>
                {item.subMenu.map((nestedPage, index) => (
                  <Grid key={nestedPage.id}>
                    <Divider />
                    <ListItem disablePadding>
                      <StyledLink to={nestedPage.url}>
                        <ListItemButton sx={{ pl: 4 }}>
                          <StyledListItemIcon>
                            {nestedPage.icon}
                          </StyledListItemIcon>
                          <ListItemText primary={nestedPage.title} />
                        </ListItemButton>
                      </StyledLink>
                    </ListItem>
                  </Grid>
                ))}
              </List>
            </Collapse>
          )}
          <Divider />
        </Grid>
      ))}
    </StyledList>
  );
};
