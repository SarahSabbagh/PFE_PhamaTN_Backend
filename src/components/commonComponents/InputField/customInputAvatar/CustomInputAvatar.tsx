import * as React from "react";
import { Badge, Fab, FormHelperText, Grid } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Controller, useFormContext } from "react-hook-form";
import { StyledAvatar } from "./CustomInputAvatar.style";
import { CustomInputAvatarProp } from "./CustomInputAvatar.types";
import { StyledInput } from "../../../signUpComponents/inputImage/InputImage.style";

export const CustomInputAvatar: React.FC<CustomInputAvatarProp> = (props) => {
  const { imageUrl, name } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { control, setValue } = useFormContext();

  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files !== null) {
      setValue(name, files);
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <Grid item display="flex" justifyContent="center">
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                <Fab
                  size="medium"
                  onClick={handleClick}
                  color={error ? "error" : "primary"}
                  aria-label="add"
                >
                  <PhotoCameraIcon />
                </Fab>
              }
            >
              <StyledAvatar
                onClick={handleClick}
                src={imageUrl}
                color={error ? "error" : "primary"}
              />
            </Badge>
          </Grid>
          <StyledInput
            type="file"
            inputProps={{ accept: "image/*" }}
            inputRef={inputRef}
            onChange={handleFileUpload}
          />

          <FormHelperText error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </>
      )}
    />
  );
};
