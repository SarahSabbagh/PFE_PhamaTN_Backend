import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, Grid, Paper } from "@mui/material";
import { EditDciForm } from "../../../forms/EditDciForm";
import { formTypes } from "../../../../../core/constants/formType";

export const EditModal: React.FC<ModalEditProps> = (props) => {
  const { open, handleClose, formType, id } = props;
  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={formType}
        aria-describedby="modal-modal-description"
      >
        {formType === formTypes.MEDICATION_MODAL && <></>}
        {formType === formTypes.DCI_MODAL && (
          <EditDciForm handleClose={handleClose} id={id} />
        )}
      </Dialog>
    </Grid>
  );
};
