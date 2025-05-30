import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  Stack,
  Chip,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BrokenConnector = styled(StepConnector)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderTopWidth: "2px",
    borderStyle: "dashed",
    borderColor: "#ccc",
  },
}));

export const ProgressFlow = () => {
  const steps = ["Order Placed", "Processing", "Shipped", "Delivered"];

  const ContinuousFlow = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Order Progress
      </Typography>
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );

  const DisconnectedFlow = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Order Progress
      </Typography>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2}>
          <Chip label="Order Placed" color="success" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label="Processing" color="primary" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label="Shipped" color="warning" />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Chip label="Delivered" color="default" />
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Disconnected example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Disconnected steps
          </Typography>
          <DisconnectedFlow />
        </Grid>

        {/* Continuous example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Connected flow
          </Typography>
          <ContinuousFlow />
        </Grid>
      </Grid>
    </Container>
  );
};
