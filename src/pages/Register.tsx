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
import { labels } from "../core/constants/label";
import { buttonsValues } from "../core/constants/buttonsValues";
import { ButtonSignUp } from "../components/signUpComponents/buttonSignUp/ButtonSignUp";
import { RoleBlock } from "../components/signUpComponents/roleBlock/RoleBlock";
import { SignUpPaper } from "../components/signUpComponents/signUpPaper/signUpPaper";
import { titles } from "../core/constants/title";
import { SelectField } from "../components/commonComponents/InputField/selectInput/SelectField";
import { SignInContainer } from "../components/signInComponents/signInContainer/SignInContainer";
import { InputImage } from "../components/signUpComponents/inputImage/InputImage";

export const Register: FC = () => {
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
    <SignInContainer title={titles.PAGE_SIGN_UP}>
      <Grid container>
        <SignUpPaper title={titles.SIGN_UP}>
          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              method="POST"
              noValidate
            >
              <Grid container rowSpacing={1} columnSpacing={2}>
                {/* ------------------------------------------------  Name  --------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="name"
                    placeholder={labels.NAME}
                    type="Text"
                    label={labels.NAME}
                    name="name"
                    required
                  />
                </Grid>

                {/* ---------------------------------------------  Email  ----------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="email"
                    placeholder={labels.EMAIL}
                    type="email"
                    label={labels.EMAIL}
                    name="email"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Password   -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="password"
                    type="password"
                    label={labels.PASSWORD}
                    name="password"
                    placeholder={labels.PASSWORD}
                    eyeIcon
                  />
                </Grid>

                {/* --------------------------------------------- Confirm password  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="confirmPassword"
                    type="password"
                    label={labels.CONFIRM_PASSWORD}
                    name="confirmPassword"
                    placeholder={labels.CONFIRM_PASSWORD}
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
                    placeholder={labels.FIRST_NAME}
                    type="Text"
                    label={labels.FIRST_NAME}
                    name="firstName"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Last Name  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="lastName"
                    placeholder={labels.LAST_NAME}
                    type="Text"
                    label={labels.LAST_NAME}
                    name="lastName"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Governorate  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <SelectField
                    id="governorate"
                    label="Gobernorate"
                    placeholder="Governorate"
                  />
                </Grid>

                {/* --------------------------------------------- City  -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <SelectField id="city" label="Ville" placeholder="Ville" />
                </Grid>

                {/* --------------------------------------------- Address -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="address"
                    placeholder={labels.ADDRESS}
                    type="Text"
                    label={labels.ADDRESS}
                    name="address"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Profil photo -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <InputImage />
                </Grid>

                {/* --------------------------------------------- Phone -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="phone"
                    placeholder={labels.PHONE}
                    type="text"
                    label={labels.PHONE}
                    name="phone"
                    required
                  />
                </Grid>

                {/* --------------------------------------------- Fax -------------------------------------------------*/}
                <Grid xs={12} md={6}>
                  <FormInput
                    id="fax"
                    placeholder={labels.FAX}
                    type="text"
                    label={labels.FAX}
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
                    {buttonsValues.SIGN_UP}
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
