import * as React from "react";
import { Button, DialogTitle } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { AddElementProps } from "./AddElement.types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { AddForm } from "../../../forms/addForm/AddForm";
import { AddMedication } from "../../../forms/addForm/AddMedication";
import { StyledDialog } from "../../../customizedDialog/CustomizedDialog.style";

export const AddElement = <FormAddValues extends Record<string, any>>(
  props: React.PropsWithChildren<AddElementProps<FormAddValues>>
) => {
  const { addProps, handleModal, title } = props;

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddOutlinedIcon />}
        onClick={handleModal.handleClickOpen}
      >
        Add
      </Button>
      <StyledDialog open={handleModal.open} onClose={handleModal.handleClose}>
        <DialogTitle align="center" variant="h3" color="primary">
          Add {title}
        </DialogTitle>
        {addProps.addFormType === formTypes.ADD_MEDICATION_MODAL && (
          <AddMedication {...addProps} />
        )}
        {addProps.addFormType === formTypes.ADD_DCI_MODAL && (
          <AddForm {...addProps} />
        )}
      </StyledDialog>
    </>
  );
};
