import { Stack, TextField, FormControl } from "@mui/material";
import React from "react";

export const Form = () => {
  return (
    <Stack gap={2}>
      <TextField label="Name" />
      <TextField label="Email" />
      <TextField label="Password" />
    </Stack>
  );
};
