export interface NavbarProps {
  anchorEl?: null | HTMLElement;
  handleClose?: () => void;
  handleOpen?: (event: React.MouseEvent<HTMLElement>) => void;
  isauthenticated?: boolean;
}
