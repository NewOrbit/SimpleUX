import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

export const ElementVisibility = () => {
  const PoorSeparationExample = () => (
    <Stack spacing={3}>
      {/* Hero section with poor contrast */}
      <Paper
        sx={{
          p: 4,
          backgroundImage: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, color: "#64b5f6" }}>
          Special Offer Available Now
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#81c784" }}>
          Limited time promotion ending soon
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#b3e5fc",
            color: "#4fc3f7",
            "&:hover": { bgcolor: "#c8e6f5" },
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          Claim Offer
        </Button>
      </Paper>

      {/* Navigation with poor visibility */}
      <Paper sx={{ p: 2, bgcolor: "#f5f5f5" }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button sx={{ color: "#bdbdbd", textTransform: "none" }}>Home</Button>
          <Button sx={{ color: "#bdbdbd", textTransform: "none" }}>
            Products
          </Button>
          <Button
            sx={{ color: "#9e9e9e", textTransform: "none", fontWeight: "bold" }}
          >
            Current Page
          </Button>
          <Button sx={{ color: "#bdbdbd", textTransform: "none" }}>
            Contact
          </Button>
        </Stack>
      </Paper>

      {/* Content with poor readability */}
      <Card sx={{ bgcolor: "#fafafa" }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2, color: "#bdbdbd" }}>
            Important Information
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "#e0e0e0" }}>
            This is critical content that users need to read and understand.
            However, the poor contrast makes it difficult to see and process.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Urgent"
              sx={{ bgcolor: "#f5f5f5", color: "#bdbdbd" }}
            />
            <Chip
              label="Action Required"
              sx={{ bgcolor: "#eeeeee", color: "#9e9e9e" }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );

  const GoodSeparationExample = () => (
    <Stack spacing={3}>
      {/* Hero section with strong contrast */}
      <Paper
        sx={{
          p: 4,
          backgroundImage: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, color: "white", fontWeight: "bold" }}
        >
          Special Offer Available Now
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#e3f2fd" }}>
          Limited time promotion ending soon
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff6f00",
            color: "white",
            "&:hover": { bgcolor: "#f57c00" },
            fontWeight: "bold",
            boxShadow: "0 4px 12px rgba(255, 111, 0, 0.3)",
          }}
        >
          Claim Offer
        </Button>
      </Paper>

      {/* Navigation with clear visibility */}
      <Paper sx={{ p: 2, bgcolor: "white", boxShadow: 1 }}>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button sx={{ color: "#666", textTransform: "none" }}>Home</Button>
          <Button sx={{ color: "#666", textTransform: "none" }}>
            Products
          </Button>
          <Button
            sx={{
              color: "#1976d2",
              textTransform: "none",
              fontWeight: "bold",
              bgcolor: "#e3f2fd",
            }}
          >
            Current Page
          </Button>
          <Button sx={{ color: "#666", textTransform: "none" }}>Contact</Button>
        </Stack>
      </Paper>

      {/* Content with good readability */}
      <Card sx={{ bgcolor: "white", boxShadow: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            sx={{ mb: 2, color: "#1976d2", fontWeight: "bold" }}
          >
            Important Information
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 2, color: "#333", lineHeight: 1.6 }}
          >
            This is critical content that users need to read and understand. The
            strong contrast makes it easy to see and process quickly.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Urgent"
              sx={{
                bgcolor: "#d32f2f",
                color: "white",
                fontWeight: "bold",
              }}
            />
            <Chip
              label="Action Required"
              sx={{
                bgcolor: "#ff9800",
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Poor separation example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Poor figure-ground separation
          </Typography>
          <PoorSeparationExample />
        </Grid>

        {/* Good separation example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Strong figure-ground separation
          </Typography>
          <GoodSeparationExample />
        </Grid>
      </Grid>
    </Container>
  );
};
