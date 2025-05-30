import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Stack,
  Card,
  CardContent,
  TextField,
  Divider,
} from "@mui/material";

export const ColorCoding = () => {
  const AppSection = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => <Stack>{children}</Stack>;

  const ConsistentExample = () => (
    <Stack spacing={6}>
      {/* Login Section */}
      <AppSection title="Login Page">
        <Stack spacing={2}>
          <TextField placeholder="Email" size="small" variant="outlined" />
          <TextField placeholder="Password" size="small" variant="outlined" />
          <Button
            variant="contained"
            sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
          >
            Sign In
          </Button>
        </Stack>
      </AppSection>

      {/* Checkout Section */}
      <AppSection title="Checkout Page">
        <Stack spacing={2}>
          <Typography variant="body2">Order Total: $79.99</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit">
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
            >
              Complete Purchase
            </Button>
          </Stack>
        </Stack>
      </AppSection>

      {/* Profile Section */}
      <AppSection title="Profile Settings">
        <Stack spacing={2}>
          <TextField
            placeholder="Display Name"
            size="small"
            variant="outlined"
          />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit">
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </AppSection>

      {/* Newsletter Section */}
      <AppSection title="Newsletter Signup">
        <Stack spacing={2}>
          <Typography variant="body2">Get updates on new features</Typography>
          <TextField
            placeholder="Your email address"
            size="small"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}
          >
            Subscribe
          </Button>
        </Stack>
      </AppSection>
    </Stack>
  );

  const InconsistentExample = () => (
    <Stack spacing={6}>
      {/* Login Section */}
      <AppSection title="Login Page">
        <Stack spacing={2}>
          <TextField placeholder="Email" size="small" variant="outlined" />
          <TextField placeholder="Password" size="small" variant="outlined" />
          <Button
            variant="contained"
            sx={{ bgcolor: "#d32f2f", "&:hover": { bgcolor: "#c62828" } }}
          >
            Sign In
          </Button>
        </Stack>
      </AppSection>

      {/* Checkout Section */}
      <AppSection title="Checkout Page">
        <Stack spacing={2}>
          <Typography variant="body2">Order Total: $79.99</Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit">
              Continue Shopping
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#388e3c", "&:hover": { bgcolor: "#2e7d32" } }}
            >
              Complete Purchase
            </Button>
          </Stack>
        </Stack>
      </AppSection>

      {/* Profile Section */}
      <AppSection title="Profile Settings">
        <Stack spacing={2}>
          <TextField
            placeholder="Display Name"
            size="small"
            variant="outlined"
          />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="inherit">
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ bgcolor: "#f57c00", "&:hover": { bgcolor: "#ef6c00" } }}
            >
              Save Changes
            </Button>
          </Stack>
        </Stack>
      </AppSection>

      {/* Newsletter Section */}
      <AppSection title="Newsletter Signup">
        <Stack spacing={2}>
          <Typography variant="body2">Get updates on new features</Typography>
          <TextField
            placeholder="Your email address"
            size="small"
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#7b1fa2", "&:hover": { bgcolor: "#6a1b9a" } }}
          >
            Subscribe
          </Button>
        </Stack>
      </AppSection>
    </Stack>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Inconsistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Mixed primary action colors
          </Typography>
          <InconsistentExample />
        </Grid>

        {/* Consistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Consistent primary color
          </Typography>
          <ConsistentExample />
        </Grid>
      </Grid>
    </Container>
  );
};
