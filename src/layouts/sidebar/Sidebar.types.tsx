export interface SidebarProps {
  openDrawer?: boolean;
  handleDrawerOpen?: (event: React.MouseEvent<HTMLElement>) => void;
  handleDrawerClose?: () => void;
}
