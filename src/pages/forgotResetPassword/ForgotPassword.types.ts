import * as React from "react";
export interface ForgotPasswordProps {
  handleForgotResetPassword: () => void;
  handleEmail: (email: string) => void;
}
export interface VerifyPinProps {
  handleVerifyPin: () => void;
  email: string;
}
export interface ResetPasswordProps {
  email: string;
}