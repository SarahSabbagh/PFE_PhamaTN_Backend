import * as React from "react";
import { Stack } from "@mui/material";
import { labels } from "../../../core/constants/label";
import { StyledChip, StyledQuestion } from "./RoleBlock.style";
import DoneIcon from "@mui/icons-material/Done";
import Grid from "@mui/material/Unstable_Grid2";
import { FormInput } from "../../commonComponents/InputField/formInput/FormInput";

export const RoleBlock: React.FC = () => {
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
          <StyledQuestion variant="h6">{labels.ARE_YOU}</StyledQuestion>

          {/* ----------------------------------------------  Pharmacy Chip  -------------------------------------------------*/}
          <StyledChip
            onClick={handleClickPharmacy}
            label={labels.PHARMACY}
            icon={!showType ? <></> : <DoneIcon />}
          />

          {/* ----------------------------------------------  Wholesales Chip  -------------------------------------------------*/}
          <StyledChip
            onClick={handleClickHiddenType}
            label={labels.WHOLESALE}
            icon={!typeWholesale || showType ? <></> : <DoneIcon />}
          />
        </Stack>
      </Grid>

      {/* --------------------------------------------- Type  -------------------------------------------------*/}
      <Grid xs={12} md={6} hidden={!showType}>
        <FormInput
          id="type"
          placeholder={labels.TYPE}
          type="text"
          label={labels.TYPE}
          name="email"
        />
      </Grid>
    </>
  );
};
