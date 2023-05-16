import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { EditSimpleElementForm } from "../../../forms/editForm/EditSimpleElement";
import { EditMedication } from "../../../forms/editForm/EditMedication";

export const EditModal = <FormEditValues extends Record<string, any>>(
  props: React.PropsWithChildren<ModalEditProps<FormEditValues>>
) => {
  const { open, handleClose, formType, id, item, editAction } = props;
  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={formType}
        aria-describedby="modal-modal-description"
      >
        {formType === formTypes.EDIT_MEDICATION_MODAL && (
          <EditMedication
            handleClose={handleClose}
            id={id}
            item={item}
            editAction={editAction}
          />
        )}

        {formType === formTypes.EDIT_SIMPLE_ELEMENT_MODAL && (
          <EditSimpleElementForm
            handleClose={handleClose}
            id={id}
            item={item}
            editAction={editAction}
          />
        )}
      </Dialog>
    </Grid>
  );
};
