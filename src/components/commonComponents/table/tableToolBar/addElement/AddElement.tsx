import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { AddElementProps } from "./AddElement.types";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { AddForm } from "../../../forms/addForm/AddForm";
import { AddMedication } from "../../../forms/addForm/AddMedication";
import { AddLot } from "../../../forms/addForm/addLot/AddLotForm";
import { useCategoriesQuery } from "../../../../../redux/api/admin/CategoryApi";
import { useFormsQuery } from "../../../../../redux/api/admin/FormApi";
import { useDcisQuery } from "../../../../../redux/api/dci/dciApi";
import { useMarquesQuery } from "../../../../../redux/api/admin/MarqueApi";

export const AddElement = <FormAddValues extends Record<string, any>>(
  props: React.PropsWithChildren<AddElementProps<FormAddValues>>
) => {
  const { addProps, handleModal, title } = props;
  const { data: dcis = [], isLoading: dcisLoading } = useDcisQuery();
  const { data: forms = [], isLoading: formsLoading } = useFormsQuery();
  const { data: marques = [], isLoading: marquesLoading } = useMarquesQuery();
  const { data: categories = [], isLoading: categoriesLoading } =
    useCategoriesQuery();

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <>
      <Button
        variant="contained"
        endIcon={<AddOutlinedIcon />}
        onClick={handleModal?.handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        open={handleModal?.open ?? false}
        onClose={handleModal?.handleClose}
        fullScreen={
          addProps.addFormType !== formTypes.ADD_SIMPLE_ELEMENT_MODAL &&
          isMobile
        }
      >
        <DialogTitle align="center" variant="h3" color="primary">
          Add {title}
        </DialogTitle>
        {addProps.addFormType === formTypes.ADD_MEDICATION_MODAL && (
          <AddMedication handleClose={handleModal?.handleClose} {...addProps} />
        )}
        {addProps.addFormType === formTypes.ADD_LOT_MODAL && (
          <AddLot
            isLoading={
              formsLoading && marquesLoading && dcisLoading && categoriesLoading
            }
            marques={marques}
            categories={categories}
            forms={forms}
            handleClose={handleModal?.handleClose}
            {...addProps}
          />
        )}
        {addProps.addFormType === formTypes.ADD_SIMPLE_ELEMENT_MODAL && (
          <AddForm handleClose={handleModal?.handleClose} {...addProps} />
        )}
      </Dialog>
    </>
  );
};
