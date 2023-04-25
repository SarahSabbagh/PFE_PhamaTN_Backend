import * as React from "react";
import {
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
} from "@mui/material";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

interface ChipData {
  key: number;
  label: string;
}
export const Filter: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //------------------------------------------------------
  const [chipData, setChipData] = React.useState<ChipData[]>([]);
  const handleChange =
    (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setChipData(
        chipData
          .filter((data) => data.key !== id)
          .concat([
            {
              key: id,
              label: (event.target as HTMLInputElement).value,
            },
          ])
      );
    };
  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const valueRadioGroup = (key: number): string => {
    const value = chipData.filter((chip) => chip.key == key);
    return value[0] ? value[0].label : "";
  };
  return (
    <Grid container item xs="auto" sx={{ alignItems: "center" }}>
      <Grid item>
        {chipData.map((data) => (
          <Chip
            key={data.key}
            label={data.label}
            onDelete={handleDelete(data)}
          />
        ))}
      </Grid>
      <Grid item>
        <Button endIcon={<FilterListOutlinedIcon />} onClick={handleClick}>
          Add filter
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueRadioGroup(0)}
                onChange={handleChange(0)}
              >
                <FormControlLabel
                  value="pending"
                  control={<Radio />}
                  label="Pending"
                />
                <FormControlLabel
                  value="accepted"
                  control={<Radio />}
                  label="Accepted"
                />
                <FormControlLabel
                  value="refused"
                  control={<Radio />}
                  label="Refused"
                />
              </RadioGroup>
            </FormControl>
          </MenuItem>
          <MenuItem>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Etat</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={valueRadioGroup(1)}
                onChange={handleChange(1)}
              >
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="desactive"
                  control={<Radio />}
                  label="Desactive"
                />
              </RadioGroup>
            </FormControl>
          </MenuItem>
          <MenuItem>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={handleChange(2)}
                value={valueRadioGroup(2)}
              >
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value="pharmacy"
                  control={<Radio />}
                  label="Pharmacy"
                />
                <FormControlLabel
                  value="wholesale"
                  control={<Radio />}
                  label="wholesale"
                />
              </RadioGroup>
            </FormControl>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};
