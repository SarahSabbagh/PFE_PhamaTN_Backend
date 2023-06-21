export interface IForgotResetPasswordRequest {
  email: string;
}
export interface IResponse {
  status: string;
  message: string;
}

export interface IVerifyPinRequest {
  email: string;
  token: string;
}

export interface IResetPasswordRequest {
  email: string;
  password: string;
  password_confirmation: string;
}