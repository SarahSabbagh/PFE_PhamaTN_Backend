import * as React from "react";
import { Button, Dialog, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { AddElementProps } from "./AddElement.types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { AddDciForm } from "../../../forms/dciForm/addDciForm/AddDciForm";
import { FormAddProps } from "../../../forms/dciForm/addDciForm/AddDciForm.types";

export const AddElement = <FormValues extends Record<string, any>>(
  props: React.PropsWithChildren<AddElementProps & FormAddProps<FormValues>>
) => {
  const {
    isSuccessAddForm,
    formType,
    titleAddForm,
    defaultAddValues,
    addResolver,
    onSubmitAdd,
    isLoadingAddForm,
    handleClickOpen,
    handleClose,
    open,
  } = props;

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddOutlinedIcon />}
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby={formType}
          aria-describedby="modal-modal-description"
        >
          {formType === formTypes.ADD_MEDICATION_MODAL && <></>}
          {formType === formTypes.ADD_DCI_MODAL && (
            <AddDciForm
              handleClose={handleClose}
              titleAddForm={titleAddForm}
              defaultAddValues={defaultAddValues}
              addResolver={addResolver}
              onSubmitAdd={onSubmitAdd}
              isLoadingAddForm={isLoadingAddForm}
              isSuccessAddForm={isSuccessAddForm}
            />
          )}
        </Dialog>
      </Grid>
    </>
  );
};
