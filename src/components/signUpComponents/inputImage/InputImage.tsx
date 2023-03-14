import * as React from "react";
import { InputLabel, Stack } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { StyledButton, StyledInput, StyledInputBase } from "./InputImage.style";
import { InputImageProps } from "./InputImage.types";

const convertSize = (size: number) => {
  const def = [
    [1, "octets"],
    [1024, "ko"],
    [1024 * 1024, "Mo"],
    [1024 * 1024 * 1024, "Go"],
    [1024 * 1024 * 1024 * 1024, "To"],
  ];
  for (let i = 1; i < def.length; i++) {
    if (size < def[i][0])
      return (size / Number(def[i - 1][0])).toFixed(2) + " " + def[i - 1][1];
  }
};

export const InputImage: React.FC<InputImageProps> = (props) => {
  const {label, id ,placeholder}=props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState("");
  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    files !== null &&
      setInputValue(files[0].name + "(" + convertSize(files[0].size) + ")");
    // Do something with the uploaded files
  };

  return (
    <>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Stack direction={"row"}>
        <StyledInputBase
          placeholder={placeholder}
          onClick={handleClick}
          value={inputValue}
          readOnly
        />
        <StyledButton
          component="label"
          id={id}
          variant="contained"
          onClick={handleClick}
        >
          <CloudUploadIcon />
        </StyledButton>
      </Stack>
      <StyledInput
        type="file"
        inputRef={inputRef}
        onChange={handleFileUpload}
      />
    </>
  );
};
