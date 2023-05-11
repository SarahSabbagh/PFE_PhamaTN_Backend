import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { EditSimpleElementForm } from "../../../forms/editForm/EditSimpleElement";

export const EditModal = <FormEditValues extends Record<string, any>>(
  props: React.PropsWithChildren<ModalEditProps<FormEditValues>>
) => {
  const { open, handleClose, formType, id, itemName, editAction } = props;
  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={formType}
        aria-describedby="modal-modal-description"
      >
        {formType === formTypes.EDIT_MEDICATION_MODAL && <></>}

        {formType === formTypes.EDIT_SIMPLE_ELEMENT_MODAL && (
          <EditSimpleElementForm
            handleClose={handleClose}
            id={id}
            itemName={itemName}
            editAction={editAction}
          />
        )}
      </Dialog>
    </Grid>
  );
};
