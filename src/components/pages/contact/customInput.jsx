import React from "react";
import { TextField } from "@mui/material";

const CustomInput = ({ label, variant = "outlined", multiline = false, rows = 4, ...props }) => {
  return (
    <TextField
      label={label}
      variant={variant}
      multiline={multiline}
      rows={multiline ? rows : 1} // ✅ If multiline is true, use the provided rows, else default to 1
      fullWidth
      {...props}
    />
  );
};

export default CustomInput;
