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
} from "@mui/material";

export const BackgroundBlur = () => {
  const backgroundContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
  ];

  const BlurExample = () => (
    <Box sx={{ position: "relative", height: 300, overflow: "hidden" }}>
      <Paper
        sx={{
          p: 3,
          height: "100%",
          backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          filter: "blur(2px)",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Background Article
        </Typography>
        {backgroundContent.map((text, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
            {text}
          </Typography>
        ))}
      </Paper>

      {/* Foreground content */}
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 280,
          zIndex: 2,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Important Notice
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            This content needs your immediate attention.
          </Typography>
          <Button variant="contained" color="primary">
            Take Action
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  const DarkenExample = () => (
    <Box sx={{ position: "relative", height: 300, overflow: "hidden" }}>
      <Paper
        sx={{
          p: 3,
          height: "100%",
          backgroundImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
          color: "#333",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Background Article
        </Typography>
        {backgroundContent.map((text, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 1 }}>
            {text}
          </Typography>
        ))}
      </Paper>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />

      {/* Foreground content */}
      <Card
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 280,
          zIndex: 2,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Important Notice
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            This content needs your immediate attention.
          </Typography>
          <Button variant="contained" color="primary">
            Take Action
          </Button>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Blur example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Background blur technique
          </Typography>
          <BlurExample />
        </Grid>

        {/* Darken example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Background darkening technique
          </Typography>
          <DarkenExample />
        </Grid>
      </Grid>
    </Container>
  );
};
