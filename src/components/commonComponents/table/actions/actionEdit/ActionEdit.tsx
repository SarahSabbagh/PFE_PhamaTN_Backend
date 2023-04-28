import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ActionEditProps } from "./ActionEdit.types";
import { Button, Grid, Paper } from "@mui/material";
import { ISignUpRequest } from "../../../../../pages/Register";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "../../../InputField/formInput/FormInput";
import { useTranslation } from "react-i18next";
import { RoleBlock } from "../../../../signUpComponents/roleBlock/RoleBlock";
import { SelectField } from "../../../InputField/selectInput/SelectField";
import { InputImage } from "../../../../signUpComponents/inputImage/InputImage";

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
  //image: undefined,
  type: "1",
  fax: "",
  phone: "",
};
export const EditModal: React.FC<ActionEditProps> = (props) => {
  const { open, handleOpen, handleClose } = props;
  const { t } = useTranslation();
  const methods = useForm<ISignUpRequest>({
    //resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: "onChange",
  });
  return (
    <Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            bgcolor: "background.paper",
            border: "1px solid ",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h3">
            edit
          </Typography>
          <Grid></Grid>
        </Paper>
      </Modal>
    </Grid>
  );
};
