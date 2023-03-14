import * as React from "react";
import Box from "@mui/material/Box";
import { FC } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { TypeOf } from "zod";
import { loginSchema } from "../core/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { ButtonSignUp } from "../components/signUpComponents/buttonSignUp/ButtonSignUp";
import { RoleBlock } from "../components/signUpComponents/roleBlock/RoleBlock";
import { SignUpPaper } from "../components/signUpComponents/signUpPaper/signUpPaper";
import { SelectField } from "../components/commonComponents/InputField/selectInput/SelectField";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { InputImage } from "../components/signUpComponents/inputImage/InputImage";
import { useTranslation } from "react-i18next";

export const Register: FC = () => {
  const { t } = useTranslation();

  type ILoginRequest = TypeOf<typeof loginSchema>;

  // ? Default Values
  const defaultValues: ILoginRequest = {
    email: "",
    password: "",
  };

  const methods = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitHandler: SubmitHandler<ILoginRequest> = (data) =>
    console.log(data);

  return (
    <SignInContainer title={t("register.TITLE_PAGE_SIGN_UP")}>
      <Grid container>
        <SignUpPaper title={t("register.TITLE_SIGN_UP")}>
          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              noValidate
            >
              <Grid container rowSpacing={1} columnSpacing={2}>
                {/* ------------------------------------------------  Name  --------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="name"
                    placeholder={t("register.NAME_LABEL")}
                    type="Text"
                    label={t("register.NAME_LABEL")}
                    name="name"
                    required
                  />
                </Grid>

                {/* ---------------------------------------------  Email  ----------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="email"
                    placeholder={t("register.EMAIL_LABEL")}
                    type="email"
                    label={t("register.EMAIL_LABEL")}
                    name="email"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Password   -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="password"
                    type="password"
                    label={t("register.PASSWORD_LABEL")}
                    name="password"
                    placeholder={t("register.PASSWORD_LABEL")}
                    eyeIcon
                  />
                </Grid>

                {/* --------------------------------------------- Confirm password  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="confirmPassword"
                    type="password"
                    label={t("register.CONFIRM_PASSWORD_LABEL")}
                    name="confirmPassword"
                    placeholder={t("register.PASSWORD_LABEL")}
                    eyeIcon
                  />
                </Grid>

                {/* --------------------------------------------- Role and Pharmacy Type -------------------------------------------------*/}
                <Grid container xs={12} minHeight={"140px"}>
                  <RoleBlock />
                </Grid>

                {/* --------------------------------------------- First Name -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="firstName"
                    placeholder={t("register.FIRST_NAME_LABEL")}
                    type="Text"
                    label={t("register.FIRST_NAME_LABEL")}
                    name="firstName"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Last Name  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="lastName"
                    placeholder={t("register.LAST_NAME_LABEL")}
                    type="Text"
                    label={t("register.LAST_NAME_LABEL")}
                    name="lastName"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Governorate  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <SelectField
                    id="governorate"
                    label={t("register.GOVERNORATE_LABEL")}
                    placeholder={t("register.GOVERNORATE_LABEL")}
                  />
                </Grid>

                {/* --------------------------------------------- City  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <SelectField
                    id="city"
                    label={t("register.CITY_LABEL")}
                    placeholder={t("register.CITY_LABEL")}
                  />
                </Grid>

                {/* --------------------------------------------- Address -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="address"
                    placeholder={t("register.ADDRESS_LABEL")}
                    type="Text"
                    label={t("register.ADDRESS_LABEL")}
                    name="address"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Profil photo -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <InputImage
                    id="photo"
                    label={t("register.IMAGE_LABEL")}
                    placeholder={t("register.IMAGE_LABEL")}
                  />
                </Grid>

                {/* --------------------------------------------- Phone -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="phone"
                    placeholder={t("register.PHONE_LABEL")}
                    type="text"
                    label={t("register.PHONE_LABEL")}
                    name="phone"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Fax -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="fax"
                    placeholder={t("register.FAX_LABEL")}
                    type="text"
                    label={t("register.FAX_LABEL")}
                    name="fax"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Button Sign up -------------------------------------------------*/}
                <Grid
                  xs={12}
                  minHeight={"122px"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <ButtonSignUp type="submit">
                    {t("register.SIGN_UP")}
                  </ButtonSignUp>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </SignUpPaper>
      </Grid>
    </SignInContainer>
  );
};
