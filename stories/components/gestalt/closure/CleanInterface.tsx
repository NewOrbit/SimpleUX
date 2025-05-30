import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  Stack,
  Divider,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export const CleanInterface = () => {
  const ClutteredForm = () => (
    <Stack pt={2}>
      <Typography
        variant="h6"
        sx={{ mb: 2, p: 1, border: "1px solid #bbb", bgcolor: "white" }}
      >
        Contact Form
      </Typography>
      <Divider sx={{ mb: 2, borderColor: "#aaa" }} />

      <Stack spacing={2}>
        <Box sx={{ border: "1px dashed #bbb", p: 2, bgcolor: "#f0f0f0" }}>
          <Typography
            variant="subtitle2"
            sx={{ mb: 1, border: "1px solid #999", p: 0.5 }}
          >
            Personal Information
          </Typography>
          <Divider sx={{ mb: 1, borderColor: "#bbb" }} />
          <Stack spacing={1}>
            <TextField
              label="First Name"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderWidth: 1.5, borderColor: "#999" },
                },
              }}
            />
            <TextField
              label="Last Name"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderWidth: 1.5, borderColor: "#999" },
                },
              }}
            />
          </Stack>
        </Box>

        <Box sx={{ border: "1px dashed #bbb", p: 2, bgcolor: "#f0f0f0" }}>
          <Typography
            variant="subtitle2"
            sx={{ mb: 1, border: "1px solid #999", p: 0.5 }}
          >
            Contact Details
          </Typography>
          <Divider sx={{ mb: 1, borderColor: "#bbb" }} />
          <Stack spacing={1}>
            <TextField
              label="Email"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderWidth: 1.5, borderColor: "#999" },
                },
              }}
            />
            <TextField
              label="Phone"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderWidth: 1.5, borderColor: "#999" },
                },
              }}
            />
          </Stack>
        </Box>

        <Box sx={{ border: "2px solid #aaa", p: 2, bgcolor: "#e8e8e8" }}>
          <Button
            variant="contained"
            sx={{
              border: "1px solid #666",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Stack>
    </Stack>
  );

  const CleanForm = () => (
    <Stack pt={2}>
      <Typography variant="h6" sx={{ mb: 3, color: "#333" }}>
        Contact Form
      </Typography>

      <Stack spacing={4}>
        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2, color: "#666" }}>
            Personal Information
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="First Name"
              size="small"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Last Name"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 2, color: "#666" }}>
            Contact Details
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Email"
              size="small"
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Phone"
              size="small"
              fullWidth
              variant="outlined"
            />
          </Stack>
        </Box>

        <Box sx={{ pt: 2 }}>
          <Button variant="contained" color="primary" size="large">
            Submit Form
          </Button>
        </Box>
      </Stack>
    </Stack>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Cluttered example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cluttered with unnecessary borders
          </Typography>
          <ClutteredForm />
        </Grid>

        {/* Clean example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Clean interface using closure
          </Typography>
          <CleanForm />
        </Grid>
      </Grid>
    </Container>
  );
};
