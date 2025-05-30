import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";

export const ButtonHierarchy = () => {
  const ProductPageExample = ({ isConsistent }: { isConsistent: boolean }) => (
    <Paper sx={{ p: 3, bgcolor: "#fff", border: "1px solid #e0e0e0" }}>
      <Stack spacing={3}>
        {/* Product title and price */}
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Wireless Bluetooth Headphones
          </Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
            $79.99
          </Typography>
          <Chip label="In Stock" color="success" size="small" sx={{ mt: 1 }} />
        </Box>

        {isConsistent ? (
          <>
            {/* Primary actions on one line */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ flex: 1 }}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ flex: 1 }}
              >
                Add to Wishlist
              </Button>
            </Stack>

            {/* Secondary text actions */}
            <Stack direction="row" spacing={1}>
              <Button variant="text" color="secondary" size="small">
                Share
              </Button>
              <Button variant="text" color="secondary" size="small">
                Compare
              </Button>
            </Stack>
          </>
        ) : (
          <>
            {/* Inconsistent mixed hierarchy */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                sx={{ flex: 1 }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="error"
                size="large"
                sx={{ flex: 1 }}
              >
                Add to Wishlist
              </Button>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button variant="contained" color="warning" size="large">
                Share
              </Button>
              <Button variant="text" color="success" size="small">
                Compare
              </Button>
            </Stack>
          </>
        )}
      </Stack>
    </Paper>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Inconsistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Inconsistent button hierarchy
          </Typography>
          <ProductPageExample isConsistent={false} />
        </Grid>

        {/* Consistent example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Clear button hierarchy
          </Typography>
          <ProductPageExample isConsistent={true} />
        </Grid>
      </Grid>
    </Container>
  );
};
