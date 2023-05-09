import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, Grid } from "@mui/material";
import { EditDciForm } from "../../../forms/editForm/EditDci";
import { formTypes } from "../../../../../core/constants/formType";
import { EditMarqueForm } from "../../../forms/editForm/EditMarque";
import { EditForm } from "../../../forms/editForm/EditForm";
import { EditCategoryForm } from "../../../forms/editForm/EditCategory";

export const EditModal: React.FC<ModalEditProps> = (props) => {
  const { open, handleClose, formType, id, itemName } = props;
  return (
    <Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={formType}
        aria-describedby="modal-modal-description"
      >
        {formType === formTypes.EDIT_MEDICATION_MODAL && <></>}
        {formType === formTypes.EDIT_DCI_MODAL && (
          <EditDciForm handleClose={handleClose} id={id} itemName={itemName} />
        )}
        {formType === formTypes.EDIT_MARQUE_MODAL && (
          <EditMarqueForm
            handleClose={handleClose}
            id={id}
            itemName={itemName}
          />
        )}
        {formType === formTypes.EDIT_FORM_MODAL && (
          <EditForm handleClose={handleClose} id={id} itemName={itemName} />
        )}
        {formType === formTypes.EDIT_CATEGORY_MODAL && (
          <EditCategoryForm
            handleClose={handleClose}
            id={id}
            itemName={itemName}
          />
        )}
      </Dialog>
    </Grid>
  );
};
