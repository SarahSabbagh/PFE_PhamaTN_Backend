import * as React from "react";
import { FormControlLabel, InputLabel, Radio, RadioGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { Controller, useFormContext } from "react-hook-form";
import { RadioTypeProps } from "./RadioType.types";

export const RadioType: React.FC<RadioTypeProps> = (props) => {
  const { name } = props;
  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Grid container item xs={12} sm={6} >
          <InputLabel htmlFor="type">{t("register.TYPE_LABEL")}</InputLabel>
          <RadioGroup {...field} row>
            <FormControlLabel value="1" control={<Radio />} label="Jour" />
            <FormControlLabel value="2" control={<Radio />} label="Nuit" />
          </RadioGroup>
        </Grid>
      )}
    />
  );
};
