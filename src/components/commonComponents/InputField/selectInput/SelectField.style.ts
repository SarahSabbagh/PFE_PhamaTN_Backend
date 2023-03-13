import { InputProps, Select, styled } from "@mui/material";

export const SelectFieldStyle = styled(Select)<InputProps>(({ theme }) => ({
  // fontFamily: fonts.FONT_PRIMARY,
  "& fieldset": { border: "none" },
  "&.Mui-focused fieldset": {
    border: "1px solid ",
  },
  "& .MuiSelect-icon": {
    color: theme.palette.primary.main,
    fontSize: "16px",
  },
  width: "100%",
  height: 50,
  color: "darkslategray",
  backgroundColor: theme.palette.background.default,
  border: "1px solid #F2F2F2",
  borderRadius: 5,
  padding: 8,
  marginBottom: 6,
  marginTop: 8,
  fontSize: 16,
}));
