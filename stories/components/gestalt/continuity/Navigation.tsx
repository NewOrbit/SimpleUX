import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";

export const Navigation = () => {
  const AlignedNavigation = () => (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Products
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Services
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            About
          </Button>
          <Button color="inherit" sx={{ textTransform: "none" }}>
            Contact
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );

  const MisalignedNavigation = () => (
    <Paper sx={{ p: 2, mb: 2, bgcolor: "#f5f5f5" }}>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} justifyContent="flex-start">
          <Button variant="contained" size="small">
            Home
          </Button>
          <Button variant="outlined" size="large" sx={{ ml: 4 }}>
            Products
          </Button>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Button variant="text" size="medium">
            Services
          </Button>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" size="small" sx={{ mr: 3 }}>
            About
          </Button>
          <Button variant="outlined" size="large">
            Contact
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Misaligned example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Broken continuity
          </Typography>
          <MisalignedNavigation />
        </Grid>

        {/* Aligned example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Clear continuity
          </Typography>
          <AlignedNavigation />
        </Grid>
      </Grid>
    </Container>
  );
};
