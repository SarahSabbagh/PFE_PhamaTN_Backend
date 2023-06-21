import * as React from "react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { PageContainer } from "../../components/commonComponents/PageContainer/PageContainer";
import { ForgotPassword } from "./ForgotPassword";
import { VerifyPin } from "./VerifyPin";
import { Grid } from "@mui/material";
import { ResetPassword } from "./ResetPassword";

export const ForgetResetPassword: FC = () => {
  const { t } = useTranslation();
  const [successStepOne, setSuccessStepOne] = React.useState<boolean>(true);
  const [successStepTwo, setSuccessStepTwo] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const handleStepOne = () => {
    setSuccessStepOne(false);
    setSuccessStepTwo(true);
  };
  const handleStepTwo = () => setSuccessStepTwo(false);
  const handleEmail = (email: string) => setEmail(email);
  return (
    <PageContainer
      background={true}
      title={t("forgotResetPassword.TITLE_PAGE_FORGOT_RESET_PASSWORD")}
    >
      <Grid>
        {successStepOne && (
          <ForgotPassword
            handleForgotResetPassword={handleStepOne}
            handleEmail={handleEmail}
          />
        )}
        {successStepTwo && (
          <VerifyPin handleVerifyPin={handleStepTwo} email={email} />
        )}
        {!successStepTwo && !successStepOne && <ResetPassword email={email} />}
      </Grid>
    </PageContainer>
  );
};
