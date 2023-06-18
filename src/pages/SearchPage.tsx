import * as React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { StyledPaper } from "../components/commonComponents/customPaper/StyledPaper.style";
import { StyledTitle } from "../components/commonComponents/table/tableToolBar/TableToolBar.style";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CustomAutocomplete } from "../components/commonComponents/InputField/customAutocomplete/CustomAutocomplete";
import { Button, CircularProgress } from "@mui/material";
import { useCategoriesQuery } from "../redux/api/admin/CategoryApi";
import { useFormsQuery } from "../redux/api/admin/FormApi";
import { useDcisQuery } from "../redux/api/dci/dciApi";
import { useMarquesQuery } from "../redux/api/admin/MarqueApi";
import { ISimpleElement } from "../redux/api/types/IResponseRequest";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import {
  ISearchMed,
  ISearchMedResponse,
  ItransformedSearchMedResponse,
} from "../redux/api/types/ISearchMed";
import {
  useForwardGeocodingQuery,
  useSearchMedicationQuery,
} from "../redux/api/searchMed/searchMedApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { LatLngExpression } from "leaflet";
import { MapComponent } from "../components/mapComponents/MapComponent";
import { CustomTableContainer } from "../components/commonComponents/table/tableContainer/TableContainer";
import { dciColumns } from "../core/constants/tableColumns/dciColumns";
import { searchColumns } from "../core/constants/tableColumns/searchColumns";
import { transformedSearchMedData } from "../core/utils/searchMedDataFormat";

export const SearchPage: FC = () => {
  const { t } = useTranslation();
  const [data, setData] = React.useState<ISearchMed | null>(null);
  const [center, setCenter] = React.useState<LatLngExpression>([0, 0]);

  const { data: dcis = [] } = useDcisQuery();
  const { data: forms = [] } = useFormsQuery();
  const { data: marques = [] } = useMarquesQuery();
  const { data: categories = [] } = useCategoriesQuery();
  const methods = useForm<ISearchMed>();
  const { user } = useCurrentUser();
  const userId = user?.id;
  const address = user?.address;
  const { handleSubmit } = methods;
  const {
    data: results,
    isLoading,
    isError,
  } = useSearchMedicationQuery(data ? { userId, ...data } : skipToken);
  const { data: latLng, isSuccess } = useForwardGeocodingQuery(
    address ? address : skipToken
  );
  const submitHandler: SubmitHandler<ISearchMed> = async (data) => {
    setData(data);
  };

  React.useEffect(() => {
    isSuccess && setCenter([latLng.lat, latLng.lng]);
  }, [latLng]);
  console.log(isLoading);
  return (
    <PageContainer title={t("searchMedication.TITLE_PAGE_SEARCH")}>
      <StyledPaper>
        <StyledTitle paddingBottom="4rem">
          {t("searchMedication.TITLE_SEARCH_MEDICATION")}
        </StyledTitle>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <Grid container item rowSpacing={1} columnSpacing={2}>
              <Grid item xs={12} sm={6} md>
                <CustomAutocomplete
                  id="dci"
                  label={t("searchMedication.DCI")}
                  placeholder={t("searchMedication.DCI")}
                  name="dci"
                  options={dcis.map((option: ISimpleElement) => option.name)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md>
                <CustomAutocomplete
                  id="marque"
                  label={t("searchMedication.BRAND")}
                  placeholder={t("searchMedication.BRAND")}
                  name="marque"
                  options={marques.map((option: ISimpleElement) => option.name)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md>
                <CustomAutocomplete
                  id="category"
                  label={t("searchMedication.CATEGORY")}
                  placeholder={t("searchMedication.CATEGORY")}
                  name="category"
                  options={categories.map(
                    (option: ISimpleElement) => option.name
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6} md>
                <CustomAutocomplete
                  id="form"
                  label={t("searchMedication.FORM")}
                  placeholder={t("searchMedication.FORM")}
                  name="form"
                  options={forms.map((option: ISimpleElement) => option.name)}
                />
              </Grid>
              <Grid item xs={12} sm={6} md>
                <FormInput
                  id="dosage"
                  placeholder={t("searchMedication.DOSAGE")}
                  type="Text"
                  label={t("searchMedication.DOSAGE")}
                  name="dosage"
                />
              </Grid>
              <Grid item m="auto 0" p="0">
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ height: "3.125rem" }}
                >
                  {isLoading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    t("searchMedication.SEARCH")
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
        <Grid marginBottom="2rem">
          <MapComponent locations={results} center={center} />
        </Grid>
        <CustomTableContainer<ItransformedSearchMedResponse[]>
          columns={searchColumns}
          data={results ? transformedSearchMedData(results) : []}
          isError={isError}
          title={""}
          count={results?.length ?? 0}
        />
      </StyledPaper>
    </PageContainer>
  );
};
