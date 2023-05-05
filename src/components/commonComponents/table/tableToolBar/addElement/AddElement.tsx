import * as React from "react";
import { Button, Dialog, Grid } from "@mui/material";
import { formTypes } from "../../../../../core/constants/formType";
import { AddElementProps } from "./AddElement.types";
import { AddDciForm } from "../../../forms/addDciForm/AddDciForm";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const AddElement: React.FC<AddElementProps> = (props) => {
  const { formType } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button endIcon={<AddOutlinedIcon />} onClick={handleClickOpen}>
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
            <AddDciForm handleClose={handleClose} />
          )}
        </Dialog>
      </Grid>
    </>
  );
};
