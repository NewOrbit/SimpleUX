import React from "react";
import {
  Box,
  TextField,
  Typography,
  Container,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";

export const FormFields = () => {
  const formFields = {
    personal: [
      { label: "First Name", type: "text" },
      { label: "Last Name", type: "text" },
      { label: "Email", type: "email" },
      { label: "Phone", type: "tel" },
    ],
    address: [
      { label: "Street Address", type: "text" },
      { label: "City", type: "text" },
      { label: "ZIP Code", type: "text" },
    ],
    account: [
      { label: "Username", type: "text" },
      { label: "Password", type: "password" },
      { label: "Confirm Password", type: "password" },
    ],
  };

  const FormContent = ({ spacing }: { spacing: number }) => (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: spacing }}
    >
      {/* Personal Information */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {formFields.personal.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            size="small"
            fullWidth
          />
        ))}
      </Box>

      {/* Address Information */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {formFields.address.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            size="small"
            fullWidth
          />
        ))}
        <FormControl size="small" fullWidth>
          <InputLabel>State</InputLabel>
          <Select label="State">
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Account Information */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {formFields.account.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            type={field.type}
            size="small"
            fullWidth
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Column with cramped form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            No whitespace
          </Typography>

          <FormContent spacing={1} />
        </Grid>

        {/* Column with properly spaced form */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Whitespace as section separator
          </Typography>

          <FormContent spacing={3} />
        </Grid>
      </Grid>
    </Container>
  );
};
