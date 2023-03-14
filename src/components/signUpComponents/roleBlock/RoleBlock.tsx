import * as React from "react";
import { Stack } from "@mui/material";
import { StyledChip, StyledQuestion } from "./RoleBlock.style";
import DoneIcon from "@mui/icons-material/Done";
import Grid from "@mui/material/Unstable_Grid2";
import { FormInput } from "../../commonComponents/InputField/formInput/FormInput";
import { useTranslation } from "react-i18next";

export const RoleBlock: React.FC = () => {
  const { t } = useTranslation();

  const [showType, setShowType] = React.useState(false);
  const [typeWholesale, setTypeWholeSale] = React.useState(false);

  const handleClickHiddenType = () => {
    setShowType((show) => (show = false));
    setTypeWholeSale((Wholesale) => !Wholesale);
  };
  const handleClickPharmacy = () => {
    setShowType((show) => !show);
  };
  return (
    <>
      {/* --------------------------------------------- Role  -------------------------------------------------*/}
      <Grid xs={12} md={6} marginTop={{ sm: 5 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <StyledQuestion variant="h6">
            {t("register.ARE_YOU_LABEL")}
          </StyledQuestion>

          {/* ----------------------------------------------  Pharmacy Chip  -------------------------------------------------*/}
          <StyledChip
            onClick={handleClickPharmacy}
            label={t("register.PHARMACY_LABEL")}
            icon={!showType ? <></> : <DoneIcon />}
          />

          {/* ----------------------------------------------  Wholesales Chip  -------------------------------------------------*/}
          <StyledChip
            onClick={handleClickHiddenType}
            label={t("register.WHOLESALE_LABEL")}
            icon={!typeWholesale || showType ? <></> : <DoneIcon />}
          />
        </Stack>
      </Grid>

      {/* --------------------------------------------- Type  -------------------------------------------------*/}
      <Grid xs={12} md={6} hidden={!showType}>
        <FormInput
          id="type"
          placeholder={t("register.TYPE_LABEL")}
          type="text"
          label={t("register.TYPE_LABEL")}
          name="type"
        />
      </Grid>
    </>
  );
};
