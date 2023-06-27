import * as React from "react";
import { FormHelperText, InputLabel, Stack } from "@mui/material";
import { StyledButton, StyledInput, StyledInputBase } from "./InputImage.style";
import { InputImageProps } from "./InputImage.types";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { Controller, useFormContext } from "react-hook-form";

export const InputImage: React.FC<InputImageProps> = (props) => {
  const { name, label, id } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { control, setValue, getValues } = useFormContext();

  const handleClick = () => {
    inputRef.current?.click();
  };
  let imageName = "";
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files !== null) {
      setValue(name, files);
      imageName = files[0].name;
    }
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Stack direction={"row"}>
            <StyledInputBase
              {...field}
              {...props}
              onClick={handleClick}
              value={imageName}
              error={!!error}
              readOnly
            />

            <StyledButton
              component="label"
              id={id}
              variant="contained"
              onClick={handleClick}
            >
              <PhotoCameraIcon />
            </StyledButton>
          </Stack>
          <StyledInput
            type="file"
            inputProps={{ accept: "image/*" }}
            inputRef={inputRef}
            onChange={handleFileUpload}
          />

          <FormHelperText id={id} error={!!error}>
            {error ? error?.message : ""}
          </FormHelperText>
        </>
      )}
    />
  );
};
