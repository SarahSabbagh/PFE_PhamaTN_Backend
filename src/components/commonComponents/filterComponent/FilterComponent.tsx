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
import { IFilterItem, status } from "../../../core/constants/status";
import { activation } from "../../../core/constants/activation";
import { FilterProps } from "./FilterComponent.types";
import { roles } from "../../../core/constants/roles";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
        <Button
          variant="contained"
          endIcon={<FilterListOutlinedIcon />}
          onClick={handleClick}
        >
          {t("label.ADD_FILTER")}
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>
            <FormControl>
              <FormLabel id="status">{t("label.STATUS")}</FormLabel>
              <RadioGroup
                name="radio-buttons-group"
                value={chipData.status}
                onChange={handleChange("status")}
              >
                {status.map((item: IFilterItem) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </MenuItem>
          <MenuItem>
            <FormControl>
              <FormLabel id="activation">
                {t("label.ACTIVATION_MODE")}
              </FormLabel>
              <RadioGroup
                name="radio-buttons-group"
                value={chipData.activationMode}
                onChange={handleChange("activationMode")}
              >
                {activation.map((item: IFilterItem) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </MenuItem>
          <MenuItem>
            <FormControl>
              <FormLabel id="role">{t("label.ROLE")}</FormLabel>
              <RadioGroup
                name="radio-buttons-group"
                onChange={handleChange("role")}
                value={chipData.role}
              >
                {roles.map((item: IFilterItem) => (
                  <FormControlLabel
                    key={item.id}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};
