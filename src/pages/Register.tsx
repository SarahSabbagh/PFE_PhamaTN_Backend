import * as React from "react";
import Box from "@mui/material/Box";
import { FC } from "react";
import Grid from "@mui/material/Grid";
import { TypeOf } from "zod";
import { signUpSchema } from "../core/utils/validator/AuthValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../components/commonComponents/InputField/formInput/FormInput";
import { ButtonSignUp } from "../components/signUpComponents/buttonSignUp/ButtonSignUp";
import { RoleBlock } from "../components/signUpComponents/roleBlock/RoleBlock";
import { SignUpPaper } from "../components/signUpComponents/signUpPaper/signUpPaper";
import { SelectField } from "../components/commonComponents/InputField/selectInput/SelectField";
import { InputImage } from "../components/signUpComponents/inputImage/InputImage";
import { useTranslation } from "react-i18next";
import { useRegisterMutation } from "../redux/api/auth/authApi";
import {
  useDelegationsQuery,
  useGovernoratesQuery,
} from "../redux/api/region/regionApi";
import { PageContainer } from "../components/commonComponents/PageContainer/PageContainer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ISignUpRequest = TypeOf<typeof signUpSchema>;

export const Register: FC = () => {
  const { t } = useTranslation();
  const VerificationLinkMessage = t("register.SENT_VERIFICATION_LINK");
  const defaultValues: ISignUpRequest = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pharmacyFirstName: "",
    pharmacyLastName: "",
    governorate: 0,
    delegation: 0,
    address: "",
    role: "2",
    type: "1",
    fax: "",
    phone: "",
  };
  const [register, { isLoading }] = useRegisterMutation();
  const { data: governorates = [] } = useGovernoratesQuery();
  const methods = useForm<ISignUpRequest>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: "onChange",
  });
  const { handleSubmit, watch, resetField, setError, reset } = methods;

  React.useEffect(() => {
    resetField("delegation");
  }, [watch("governorate")]);

  const { data: delagations = [] } = useDelegationsQuery(watch("governorate"));

  const submitHandler: SubmitHandler<ISignUpRequest> = async (data) => {
    const { confirmPassword, ...rest } = data;
    register({ ...rest })
      .unwrap()
      .then(() => {
        reset(defaultValues);
        toast.success(VerificationLinkMessage, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
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
    <PageContainer background={true} title={t("register.TITLE_PAGE_SIGN_UP")}>
      <Grid container>
        <ToastContainer />
        <SignUpPaper title={t("register.TITLE_SIGN_UP")}>
          <FormProvider {...methods}>
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              noValidate
            >
              <Grid container item rowSpacing={1} columnSpacing={2}>
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
                  <FormInput
                    id="email"
                    placeholder={t("register.EMAIL_LABEL")}
                    type="email"
                    label={t("register.EMAIL_LABEL")}
                    name="email"
                    required
                  />
                </Grid>

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

                <Grid container item xs={12} minHeight={"120px"}>
                  <RoleBlock name="role" />
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

                <Grid item xs={12} sm={6}>
                  <SelectField
                    id="governorate"
                    label={t("register.GOVERNORATE_LABEL")}
                    placeholder={t("register.GOVERNORATE_LABEL")}
                    name="governorate"
                    options={governorates}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <SelectField
                    id="delegation"
                    label={t("register.DELEGATION_LABEL")}
                    placeholder={t("register.DELEGATION_LABEL")}
                    name="delegation"
                    options={delagations}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormInput
                    id="address"
                    placeholder={t("register.ADDRESS_LABEL")}
                    type="Text"
                    label={t("register.ADDRESS_LABEL")}
                    name="address"
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

                <Grid
                  item
                  xs={12}
                  minHeight={"122px"}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <ButtonSignUp loading={isLoading} type="submit">
                    {t("register.SIGN_UP")}
                  </ButtonSignUp>
                </Grid>
              </Grid>
            </Box>
          </FormProvider>
        </SignUpPaper>
      </Grid>
    </PageContainer>
  );
};
