import * as React from "react";
import { Button, Dialog, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { AddElementProps } from "./AddElement.types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { AddForm } from "../../../forms/addForm/AddForm";
import { AddMedication } from "../../../forms/addForm/AddMedication";

export const AddElement = <FormAddValues extends Record<string, any>>(
  props: React.PropsWithChildren<AddElementProps<FormAddValues>>
) => {
  const { addProps, handleModal } = props;

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddOutlinedIcon />}
        onClick={handleModal.handleClickOpen}
      >
        Add
      </Button>
      <Grid>
        <Dialog
          open={handleModal.open}
          onClose={handleModal.handleClose}
          aria-labelledby={addProps.addFormType}
          aria-describedby="modal-modal-description"
        >
          {addProps.addFormType === formTypes.ADD_MEDICATION_MODAL && (
            <AddMedication {...addProps} />
          )}
          {addProps.addFormType === formTypes.ADD_DCI_MODAL && (
            <AddForm {...addProps} />
          )}
        </Dialog>
      </Grid>
    </>
  );
};
