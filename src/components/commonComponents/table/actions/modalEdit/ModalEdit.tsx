import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { Dialog, DialogTitle, Theme, useMediaQuery } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { EditSimpleElementForm } from "../../../forms/editForm/EditSimpleElement";
import { EditMedication } from "../../../forms/editForm/EditMedication";
import { useCategoriesQuery } from "../../../../../redux/api/admin/CategoryApi";
import { useDcisQuery } from "../../../../../redux/api/dci/dciApi";
import { useFormsQuery } from "../../../../../redux/api/admin/FormApi";
import { useMarquesQuery } from "../../../../../redux/api/admin/MarqueApi";
import { EditLot } from "../../../forms/editForm/EditLot";
import { useTranslation } from "react-i18next";

export const EditModal: React.FC<ModalEditProps> = (props) => {
  const { t } = useTranslation();
  const { open, handleClose, formType, id, item, title } = props;
  const { data: dcis = [], isLoading: dcisLoading } = useDcisQuery();
  const { data: forms = [], isLoading: formsLoading } = useFormsQuery();
  const { data: marques = [], isLoading: marquesLoading } = useMarquesQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={formType !== formTypes.EDIT_SIMPLE_ELEMENT_MODAL && isMobile}
    >
      <DialogTitle align="center" variant="h3" color="primary">
        {t("label.EDIT")} {title.toLowerCase()}
      </DialogTitle>
      {formType === formTypes.EDIT_MEDICATION_MODAL && (
        <EditMedication
          handleClose={handleClose}
          item={item}
          isLoading={
            formsLoading && marquesLoading && dcisLoading && categoriesLoading
          }
          id={id}
          marques={marques}
          dcis={dcis}
          categories={categories}
          forms={forms}
        />
      )}
      {formType === formTypes.EDIT_LOT_MODAL && (
        <EditLot handleClose={handleClose} defaultValues={item} id={id} />
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
  );
};
