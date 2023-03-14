import { InputProps, Select, SelectProps, styled } from "@mui/material";

export const SelectFieldStyle = styled(Select)<InputProps & SelectProps>(
  ({ theme }) => ({
    "& fieldset": { border: "none" },
    "& .Mui-focused fieldset": {
      border: "1px solid ",
    },
    "& .MuiSelect-icon": {
      color: theme.palette.primary.main,
      fontSize: "1rem",
    },

    width: "100%",
    height: "3.125rem",
    color: "darkslategray",
    backgroundColor: theme.palette.background.default,
    border: "1px solid #F2F2F2",
    borderRadius: "0.3125rem",
    padding: "0.5rem",
    marginBottom: "0.375rem",
    marginTop: "0.5rem",
    fontSize: "1rem",
  })
);
export const SelectEm = styled("em")(({ theme }) => ({
  color: "#a9a9a9",
  fontFamily: "Merriweather",
}));
