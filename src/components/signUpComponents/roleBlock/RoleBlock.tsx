import * as React from "react";
import { Stack } from "@mui/material";
import { StyledChip, StyledQuestion } from "./RoleBlock.style";
import DoneIcon from "@mui/icons-material/Done";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";
import { RoleBlockProps } from "./RoleBlock.types";
import { Controller, useFormContext } from "react-hook-form";
import { RadioType } from "./RadioType/RadioType";

export const RoleBlock: React.FC<RoleBlockProps> = (props) => {
  const { name } = props;
  const { t } = useTranslation();

  const { control, setValue, getValues } = useFormContext();
  const [showType, setShowType] = React.useState(false);

  const handleClickHiddenType = () => {
    setValue(name, "1");
    setShowType(false);
  };
  const handleClickPharmacy = () => {
    setShowType(true);
    setValue(name, "2");
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Grid container item xs={12} sm={6} marginTop={{ sm: "1.75rem " }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ lg: 2, sm: 1, xs: 2 }}
            >
              <StyledQuestion variant="h6">
                {t("register.ARE_YOU_LABEL")}
              </StyledQuestion>
              <StyledChip
                onClick={handleClickHiddenType}
                clickable={!showType && getValues(name) === "1"}
                label={t("register.WHOLESALE_LABEL")}
                icon={
                  !showType && getValues(name) === "1" ? (
                    <DoneIcon color="primary" />
                  ) : (
                    <></>
                  )
                }
              />
              <StyledChip
                {...field}
                clickable={showType}
                onClick={handleClickPharmacy}
                label={t("register.PHARMACY_LABEL")}
                icon={showType ? <DoneIcon color="primary" /> : <></>}
              />
            </Stack>
          </Grid>
        )}
      />
      {showType && <RadioType name="type" />}
    </>
  );
};
