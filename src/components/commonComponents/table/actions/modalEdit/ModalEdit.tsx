import * as React from "react";
import { ModalEditProps } from "./ModalEdit.types";
import { DialogTitle } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { EditSimpleElementForm } from "../../../forms/editForm/EditSimpleElement";
import { EditMedication } from "../../../forms/editForm/EditMedication";
import { StyledDialog } from "../../../customizedDialog/CustomizedDialog.style";
import { useCategoriesQuery } from "../../../../../redux/api/admin/CategoryApi";
import { useDcisQuery } from "../../../../../redux/api/dci/dciApi";
import { useFormsQuery } from "../../../../../redux/api/admin/FormApi";
import { ISimpleElement } from "../../../../../redux/api/types/IResponseRequest";
import { useMarquesQuery } from "../../../../../redux/api/admin/MarqueApi";

export const EditModal: React.FC<ModalEditProps> = (props) => {
  const { open, handleClose, formType, id, item, title } = props;
  const { data: dcis = [], isLoading: dcisLoading } = useDcisQuery();
  const { data: forms = [], isLoading: formsLoading } = useFormsQuery();
  const { data: marques = [], isLoading: marquesLoading } = useMarquesQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();

  const findId = (list: ISimpleElement[], item: string) => {
    const result = list.find((val) => val.name === item);
    return result ? result?.id : 0;
  };

  const defaultValues = {
    id: id,
    dci_id: findId(marques, item["marque"]),
    marque_id: findId(marques, item["marque"]),
    category_id: findId(marques, item["marque"]),
    form_id: findId(marques, item["marque"]),
    dosage: item.dosage,
    description: item.description,
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <DialogTitle align="center" variant="h3" color="primary">
        Edit {title}
      </DialogTitle>
      {formType === formTypes.EDIT_MEDICATION_MODAL && (
        <EditMedication
          handleClose={handleClose}
          defaultValues={defaultValues}
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

      {formType === formTypes.EDIT_SIMPLE_ELEMENT_MODAL && (
        <EditSimpleElementForm
          handleClose={handleClose}
          id={id}
          item={item}
          title={title}
        />
      )}
    </StyledDialog>
  );
};
