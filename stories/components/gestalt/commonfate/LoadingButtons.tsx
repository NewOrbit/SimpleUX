import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Stack,
  CircularProgress,
  LinearProgress,
} from "@mui/material";
import { MdSave, MdSend, MdDownload } from "react-icons/md";

export const LoadingButtons = () => {
  const [loadingStates, setLoadingStates] = useState({
    good1: false,
    good2: false,
    good3: false,
    bad1: false,
    bad2: false,
    bad3: false,
  });

  const handleClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };

  const GoodExample = () => (
    <Stack p={3}>
      <Stack spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={
            loadingStates.good1 ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <MdSave />
            )
          }
          onClick={() => handleClick("good1")}
          disabled={loadingStates.good1}
          sx={{ minWidth: 140 }}
        >
          {loadingStates.good1 ? "Saving..." : "Save Document"}
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={
            loadingStates.good2 ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <MdSend />
            )
          }
          onClick={() => handleClick("good2")}
          disabled={loadingStates.good2}
          sx={{ minWidth: 140 }}
        >
          {loadingStates.good2 ? "Sending..." : "Send Message"}
        </Button>

        <Button
          variant="contained"
          color="info"
          startIcon={
            loadingStates.good3 ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <MdDownload />
            )
          }
          onClick={() => handleClick("good3")}
          disabled={loadingStates.good3}
          sx={{ minWidth: 140 }}
        >
          {loadingStates.good3 ? "Downloading..." : "Download File"}
        </Button>
      </Stack>
    </Stack>
  );

  const BadExample = () => (
    <Stack p={3}>
      <Stack spacing={2} sx={{ position: "relative" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<MdSave />}
          onClick={() => handleClick("bad1")}
          sx={{ minWidth: 140 }}
        >
          Save Document
        </Button>

        <Button
          variant="contained"
          color="success"
          startIcon={<MdSend />}
          onClick={() => handleClick("bad2")}
          sx={{ minWidth: 140 }}
        >
          Send Message
        </Button>

        <Button
          variant="contained"
          color="info"
          startIcon={<MdDownload />}
          onClick={() => handleClick("bad3")}
          sx={{ minWidth: 140 }}
        >
          Download File
        </Button>

        {/* Disconnected loading indicator */}
        {(loadingStates.bad1 || loadingStates.bad2 || loadingStates.bad3) && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              p: 2,
              borderRadius: 1,
              boxShadow: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              zIndex: 1,
            }}
          >
            <CircularProgress size={20} />
            <Typography variant="body2" sx={{ lineHeight: 1 }}>
              Loading...
            </Typography>
          </Box>
        )}

        {/* Global progress bar */}
        {(loadingStates.bad1 || loadingStates.bad2 || loadingStates.bad3) && (
          <LinearProgress
            sx={{
              position: "absolute",
              bottom: -10,
              left: 0,
              right: 0,
              height: 4,
            }}
          />
        )}
      </Stack>
    </Stack>
  );

  return (
    <Container sx={{ pb: 4 }}>
      <Grid container spacing={4}>
        {/* Disconnected feedback example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Global loading feedback
          </Typography>
          <BadExample />
        </Grid>

        {/* Connected feedback example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contextual loading feedback
          </Typography>
          <GoodExample />
        </Grid>
      </Grid>
    </Container>
  );
};
