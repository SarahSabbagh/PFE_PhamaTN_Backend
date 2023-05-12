import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, DialogTitle, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { EditSimpleElementForm } from "../../../forms/editForm/EditSimpleElement";
import { EditMedication } from "../../../forms/editForm/EditMedication";

export const EditModal: React.FC<ModalEditProps> = (props) => {
  const { open, handleClose, formType, id, item, title } = props;
  return (
    <Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle align="center" variant="h3" color="primary">
          Edit {title}
        </DialogTitle>
        {formType === formTypes.EDIT_MEDICATION_MODAL && (
          <EditMedication handleClose={handleClose} id={id} item={item} />
        )}

        {formType === formTypes.EDIT_SIMPLE_ELEMENT_MODAL && (
          <EditSimpleElementForm
            handleClose={handleClose}
            id={id}
            item={item}
            title={title}
          />
        )}
      </Dialog>
    </Grid>
  );
};
