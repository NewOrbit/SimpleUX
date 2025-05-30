import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Stack,
  Backdrop,
} from "@mui/material";

export const ModalContrast = () => {
  const [lowContrastOpen, setLowContrastOpen] = useState(false);
  const [highContrastOpen, setHighContrastOpen] = useState(false);

  const LowContrastExample = () => (
    <Box sx={{ position: "relative", height: 300, overflow: "hidden" }}>
      <Paper sx={{ p: 3, bgcolor: "#e0e0e0", height: "100%" }}>
        <Typography variant="h6" sx={{ mb: 2, color: "#666" }}>
          Background Content
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: "#888" }}>
          This is the main page content that should fade into background when
          modal appears.
        </Typography>

        {/* Poor contrast modal overlay */}
        {lowContrastOpen && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(200, 200, 200, 0.3)", // Very light backdrop
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                bgcolor: "#f5f5f5",
                boxShadow: 1,
                border: "1px solid #ddd",
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ color: "#777", mb: 1 }}>
                  Modal Dialog
                </Typography>
                <Typography variant="body2" sx={{ color: "#999", mb: 2 }}>
                  This modal doesn't stand out well from the background.
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ color: "#888", borderColor: "#ccc" }}
                  onClick={() => setLowContrastOpen(false)}
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </Box>
        )}
      </Paper>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => setLowContrastOpen(true)}
        disabled={lowContrastOpen}
      >
        Open Poor Contrast Modal
      </Button>
    </Box>
  );

  const HighContrastExample = () => (
    <Box sx={{ position: "relative", height: 300, overflow: "hidden" }}>
      <Paper sx={{ p: 3, bgcolor: "#f8f9fa", height: "100%" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Background Content
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This is the main page content that should fade into background when
          modal appears.
        </Typography>

        {/* High contrast modal overlay */}
        {highContrastOpen && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(0, 0, 0, 0.7)", // Strong dark backdrop
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{ bgcolor: "white", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ color: "#333", mb: 1 }}>
                  Modal Dialog
                </Typography>
                <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                  This modal clearly stands out from the background.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setHighContrastOpen(false)}
                >
                  Close
                </Button>
              </CardContent>
            </Card>
          </Box>
        )}
      </Paper>

      <Button
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => setHighContrastOpen(true)}
        disabled={highContrastOpen}
      >
        Open High Contrast Modal
      </Button>
    </Box>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Poor contrast example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Poor figure-ground separation
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Weak contrast fails to establish clear foreground/background
            hierarchy
          </Typography>
          <LowContrastExample />
        </Grid>

        {/* Strong contrast example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Clear figure-ground distinction
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Strong contrast makes the modal "pop" forward from the background
          </Typography>
          <HighContrastExample />
        </Grid>
      </Grid>
    </Container>
  );
};
