import React from "react";
import { FC } from "react";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { StyledPaper } from "../components/commonComponents/customPaper/StyledPaper.style";
import { useTranslation } from "react-i18next";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { ButtonSignUp } from "../components/signUpComponents/buttonSignUp/ButtonSignUp";
import { useUpdateUserMutation } from "../redux/api/user/userApi";
import { IUpdateUser } from "../redux/api/types/IUser";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { ProfilSchema } from "../core/utils/validator/UpdateUserValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { STORAGE_BASE_URL } from "../configuredURL";
import { StyledAvatar } from "../components/commonComponents/InputField/customInputAvatar/CustomInputAvatar.style";
import { InputImage } from "../components/signUpComponents/inputImage/InputImage";

export const Profile: FC = () => {
  const { t } = useTranslation();
  const { user } = useCurrentUser();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const methods = useForm<IUpdateUser>({
    resolver: zodResolver(ProfilSchema),
    defaultValues: {
      id: user?.id,
      name: user?.name,
      fax: user?.fax,
      confirmPassword: undefined,
      password: undefined,
      phone: user?.phone,
      pharmacyFirstName: user?.pharmacyFirstName,
      pharmacyLastName: user?.pharmacyLastName,
    },
    mode: "onSubmit",
  });
  const { handleSubmit, setError } = methods;
  const submitHandler: SubmitHandler<IUpdateUser> = async (data) => {
  
    updateUser({
      id: data.id,
      name: data.name?.trim(),
      password: data.password?.trim(),
      pharmacyFirstName: data.pharmacyFirstName?.trim(),
      pharmacyLastName: data.pharmacyLastName?.trim(),
      image: data.image,
      phone: data.phone?.trim(),
      fax: data.fax?.trim(),
    })
      .unwrap()
      .then()
      .catch((error: any) => {
        for (const key of Object.keys(data)) {
          if (error.data.errors[key]) {
            setError(key as keyof typeof data, {
              type: "server",
              message: error.data.errors[key][0],
            });
          }
        }
      });
  };
  return (
    <PageContainer title={t("profil.TITLE_PAGE_Profil")}>
      <StyledPaper sx={{ p: "2rem" }}>
        <FormProvider {...methods}>
          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <Grid
              container
              item
              direction="column"
              rowSpacing={1}
              columnSpacing={2}
            >
              <Grid item display="flex" justifyContent="center">
                <StyledAvatar
                  src={user.image ? STORAGE_BASE_URL + user.image : ""}
                />
              </Grid>
              <Grid item display="flex" justifyContent="center">
                <Typography variant="h5">{user?.name}</Typography>
              </Grid>

              <Grid pr="4rem" pl="4rem">
                <Typography variant="h5">
                  {t("profil.PERSONAL_INFO")}
                </Typography>
                <Divider />
                <Grid container item rowSpacing={1} columnSpacing={2} pt="2rem">
                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="name"
                      placeholder={t("register.NAME_LABEL")}
                      type="Text"
                      label={t("register.NAME_LABEL")}
                      name="name"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputImage
                      id="image"
                      label={t("register.IMAGE_LABEL")}
                      placeholder={t("register.IMAGE_LABEL")}
                      name="image"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="phone"
                      placeholder={t("register.PHONE_LABEL")}
                      type="text"
                      label={t("register.PHONE_LABEL")}
                      name="phone"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="fax"
                      placeholder={t("register.FAX_LABEL")}
                      type="text"
                      label={t("register.FAX_LABEL")}
                      name="fax"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="firstName"
                      placeholder={t("register.FIRST_NAME_LABEL")}
                      type="Text"
                      label={t("register.FIRST_NAME_LABEL")}
                      name="pharmacyFirstName"
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="lastName"
                      placeholder={t("register.LAST_NAME_LABEL")}
                      type="Text"
                      label={t("register.LAST_NAME_LABEL")}
                      name="pharmacyLastName"
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid pr="4rem" pl="4rem">
                <Typography variant="h5">{t("profil.UPDATE_PWD")}</Typography>
                <Divider />
                <Grid container item rowSpacing={1} columnSpacing={2} pt="2rem">
                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="password"
                      type="password"
                      label={t("register.PASSWORD_LABEL")}
                      name="password"
                      placeholder={t("register.PASSWORD_LABEL")}
                      eyeicon={true}
                      autoComplete="off"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormInput
                      id="confirmPassword"
                      type="password"
                      label={t("register.CONFIRM_PASSWORD_LABEL")}
                      name="confirmPassword"
                      placeholder={t("register.PASSWORD_LABEL")}
                      eyeicon={true}
                      autoComplete="off"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                minHeight={"122px"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <ButtonSignUp loading={isLoading} type="submit">
                  {t("profil.EDIT")}
                </ButtonSignUp>
              </Grid>
            </Grid>
          </Box>
        </FormProvider>
      </StyledPaper>
    </PageContainer>
  );
};
