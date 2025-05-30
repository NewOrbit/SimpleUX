import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Chip,
  Stack,
} from "@mui/material";

export const CoordinatedAnimation = () => {
  const contacts = [
    {
      name: "Sarah Chen",
      status: "Online",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5d4?w=40&h=40&fit=crop&crop=face",
      lastSeen: "Active now",
    },
    {
      name: "Mike Rodriguez",
      status: "Away",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      lastSeen: "5 min ago",
    },
    {
      name: "Emma Wilson",
      status: "Online",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      lastSeen: "Active now",
    },
  ];

  const CoordinatedExample = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Team Members
      </Typography>

      <List sx={{ bgcolor: "white", borderRadius: 1 }}>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            sx={{
              cursor: "pointer",
              borderRadius: 1,
              mb: 1,
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#e3f2fd",
                // ALL related elements respond together
                "& .contact-avatar": {
                  transform: "scale(1.1)",
                },
                "& .contact-name": {
                  color: "#1976d2",
                  fontWeight: "bold",
                },
                "& .contact-button": {
                  backgroundColor: "#1976d2",
                  color: "white",
                  transform: "scale(1.05)",
                },
              },
            }}
          >
            <ListItemAvatar>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src={contact.avatar}
                  className="contact-avatar"
                  sx={{
                    transition: "all 0.2s ease",
                  }}
                />
                <Box
                  className="contact-status"
                  sx={{
                    position: "absolute",
                    bottom: -2,
                    right: 10,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor:
                      contact.status === "Online" ? "#4caf50" : "#ff9800",
                    border: "2px solid white",
                    transition: "all 0.2s ease",
                  }}
                />
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  className="contact-name"
                  sx={{
                    transition: "all 0.2s ease",
                    fontWeight: "medium",
                  }}
                >
                  {contact.name}
                </Typography>
              }
              secondary={contact.lastSeen}
            />
            <ListItemSecondaryAction>
              <Button
                size="small"
                variant="outlined"
                className="contact-button"
                sx={{
                  transition: "all 0.2s ease",
                  borderColor: "#ccc",
                }}
              >
                Message
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Stack>
  );

  const UncoordinatedExample = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Team Members
      </Typography>

      <List sx={{ bgcolor: "white", borderRadius: 1 }}>
        {contacts.map((contact, index) => (
          <ListItem
            key={index}
            sx={{
              cursor: "pointer",
              borderRadius: 1,
              mb: 1,
              "&:hover": {
                // Only the name responds, other elements are "forgotten"
                "& .uncoord-name": {
                  color: "#1976d2",
                },
              },
            }}
          >
            <ListItemAvatar>
              <Box sx={{ position: "relative" }}>
                <Avatar
                  src={contact.avatar}
                  // No hover response - feels disconnected
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -2,
                    right: 10,
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor:
                      contact.status === "Online" ? "#4caf50" : "#ff9800",
                    border: "2px solid white",
                  }}
                  // No hover response - feels disconnected
                />
              </Box>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  className="uncoord-name"
                  sx={{
                    transition: "color 0.2s ease",
                    fontWeight: "medium",
                  }}
                >
                  {contact.name}
                </Typography>
              }
              secondary={contact.lastSeen}
            />
            <ListItemSecondaryAction>
              <Button
                size="small"
                variant="outlined"
                sx={{
                  borderColor: "#ccc",
                }}
                // No hover response - feels disconnected
              >
                Message
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Stack>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Uncoordinated example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Incomplete responses
          </Typography>
          <UncoordinatedExample />
        </Grid>

        {/* Coordinated example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Complete responses
          </Typography>
          <CoordinatedExample />
        </Grid>
      </Grid>
    </Container>
  );
};
