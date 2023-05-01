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
import { status } from "../../../core/constants/status";
import { activation } from "../../../core/constants/activation";
import { FilterProps } from "./FilterComponent.types";
import { roles } from "../../../core/constants/roles";

interface IFilterData {
  role?: number;
  status?: number;
  activationMode?: boolean;
}
interface Ilabel {
  role?: string;
  status?: string;
  activationMode?: string;
}

export const Filter: React.FC<FilterProps> = ({ recievedFilterData }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [chipData, setChipData] = React.useState<IFilterData>({});
  const [labels, setLabels] = React.useState<Ilabel>({});

  const handleChange =
    (propertyToUpdate: keyof IFilterData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setChipData({ ...chipData, [propertyToUpdate]: event.target.value });
      setLabels({
        ...labels,
        [propertyToUpdate]:
          event.target.labels && event.target.labels[0].innerText,
      });
    };
  const handleDelete = (propertyToUpdate: keyof IFilterData) => () => {
    const { [propertyToUpdate]: deletedProperty, ...rest } = chipData;
    const { [propertyToUpdate]: deletedPropertyLabel, ...restLabels } = labels;
    setLabels(restLabels);
    setChipData(rest);
  };

  React.useEffect(() => {
    recievedFilterData(chipData);
  }, [chipData, recievedFilterData]);
  const properties = Object.keys(chipData) as Array<keyof IFilterData>;
  return (
    <Grid container item xs="auto" sx={{ alignItems: "center" }}>
      <Grid item mr={2}>
        {properties.map(
          (property) =>
            chipData[property] && (
              <Chip
                key={property}
                label={labels[property]}
                onDelete={handleDelete(property)}
              />
            )
        )}
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
                value={chipData.status}
                onChange={handleChange("status")}
              >
                <FormControlLabel
                  title="Pending"
                  value={status.PENDING}
                  control={<Radio />}
                  label="Pending"
                />
                <FormControlLabel
                  value={status.ACCEPTED}
                  control={<Radio />}
                  label="Accepted"
                />
                <FormControlLabel
                  value={status.REFUSED}
                  control={<Radio />}
                  label="Refused"
                />
              </RadioGroup>
            </FormControl>
          </MenuItem>
          <MenuItem>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Activation Mode
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={chipData.activationMode}
                onChange={handleChange("activationMode")}
              >
                <FormControlLabel
                  value={activation.ACTIVATED}
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value={activation.DISABLED}
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
                onChange={handleChange("role")}
                value={chipData.role}
              >
                <FormControlLabel
                  value={roles.ADMINISTRATOR}
                  control={<Radio />}
                  label="Admin"
                />
                <FormControlLabel
                  value={roles.PHARMACY}
                  control={<Radio />}
                  label="Pharmacy"
                />
                <FormControlLabel
                  value={roles.WHOLESALER}
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
