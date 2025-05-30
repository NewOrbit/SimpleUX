import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  IconButton,
  Slider,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  MdPlayArrow,
  MdPause,
  MdVolumeUp,
  MdVolumeOff,
  MdSkipNext,
  MdSkipPrevious,
  MdFullscreen,
  MdSpeed,
  MdClosedCaption,
  MdSettings,
} from "react-icons/md";

export const Controls = () => {
  const VideoControls = ({
    spacing,
    isDistributed = false,
  }: {
    spacing: number;
    isDistributed?: boolean;
  }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            ...(isDistributed
              ? { justifyContent: "space-between" }
              : { justifyContent: "space-between", gap: spacing }),
          }}
        >
          {isDistributed ? (
            <>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdSkipPrevious size={24} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdPlayArrow size={24} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdSkipNext size={24} />
              </IconButton>

              {/* Volume */}
              {!isMobile && (
                <>
                  <IconButton size="small" sx={{ color: "white" }}>
                    <MdVolumeUp size={24} />
                  </IconButton>
                  <Slider
                    size="small"
                    defaultValue={70}
                    sx={{
                      color: "#fff",
                      width: 100,
                      "& .MuiSlider-thumb": {
                        width: 12,
                        height: 12,
                      },
                    }}
                  />
                </>
              )}

              {/* Settings controls - distributed individually */}
              <IconButton size="small" sx={{ color: "white" }}>
                <MdClosedCaption size={24} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdSpeed size={24} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdSettings size={24} />
              </IconButton>
              <IconButton size="small" sx={{ color: "white" }}>
                <MdFullscreen size={24} />
              </IconButton>
            </>
          ) : (
            <>
              {/* Left controls group */}
              <Stack direction="row" spacing={spacing / 4}>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdSkipPrevious size={24} />
                </IconButton>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdPlayArrow size={24} />
                </IconButton>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdSkipNext size={24} />
                </IconButton>
              </Stack>

              {/* Volume controls */}

              {!isMobile && (
                <Stack
                  direction="row"
                  spacing={spacing / 4}
                  alignItems="center"
                >
                  <IconButton size="small" sx={{ color: "white" }}>
                    <MdVolumeUp size={24} />
                  </IconButton>
                  <Slider
                    size="small"
                    defaultValue={70}
                    sx={{
                      color: "#fff",
                      width: 100,
                      "& .MuiSlider-thumb": {
                        width: 12,
                        height: 12,
                      },
                    }}
                  />
                </Stack>
              )}

              {/* Right controls group */}
              <Stack direction="row" spacing={spacing / 4}>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdClosedCaption size={24} />
                </IconButton>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdSpeed size={24} />
                </IconButton>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdSettings size={24} />
                </IconButton>
                <IconButton size="small" sx={{ color: "white" }}>
                  <MdFullscreen size={24} />
                </IconButton>
              </Stack>
            </>
          )}
        </Box>
      </Box>
    );
  };

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Poor spacing example */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Scattered controls
          </Typography>
          <Paper sx={{ p: 2, bgcolor: "#333" }}>
            <VideoControls spacing={8} isDistributed={true} />
          </Paper>
        </Grid>

        {/* Proper spacing example */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Grouped controls
          </Typography>
          <Paper sx={{ p: 2, bgcolor: "#333" }}>
            <VideoControls spacing={2} isDistributed={false} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
