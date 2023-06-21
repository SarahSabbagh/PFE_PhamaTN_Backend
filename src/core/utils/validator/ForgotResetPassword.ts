import { number, object, string } from "zod";

export const ForgotPasswordSchema = object({
  email: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .email("errorMessages.EMAIL_INVALID"),
});

export const verifyPinSchema = object({
  email: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .email("errorMessages.EMAIL_INVALID"),
  token: string().nonempty("errorMessages.IS_REQUIRED"),
});

export const resetPasswordSchema = ForgotPasswordSchema.extend({
  password: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
    .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS"),
  password_confirmation: string()
    .nonempty("errorMessages.IS_REQUIRED")
    .min(8, "errorMessages.PASSWORD_MIN_8_CHARACTERS")
    .max(32, "errorMessages.PASSWORD_LESS_32_CHARACTERS"),
}).refine((data) => data.password === data.password_confirmation, {
  path: ["password_confirmation"],
  message: "errorMessages.INVALID",
});
