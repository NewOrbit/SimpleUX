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
  Avatar,
  Chip,
} from "@mui/material";
import { MdPerson, MdEmail, MdPhone } from "react-icons/md";

export const ImpliedContainers = () => {
  const contacts = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      email: "alice@company.com",
      phone: "+1 555-0123",
    },
    {
      name: "Bob Smith",
      role: "UX Designer",
      email: "bob@company.com",
      phone: "+1 555-0124",
    },
    {
      name: "Carol Davis",
      role: "Developer",
      email: "carol@company.com",
      phone: "+1 555-0125",
    },
  ];

  const ExplicitBoundaries = () => (
    <Stack spacing={2}>
      {contacts.map((contact, index) => (
        <Card
          key={index}
          sx={{
            border: "2px solid #ddd",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <CardContent sx={{ border: "1px solid #eee", bgcolor: "#f9f9f9" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1,
                border: "1px dashed #ccc",
              }}
            >
              <Avatar
                sx={{ bgcolor: "primary.main", border: "2px solid #333" }}
              >
                <MdPerson />
              </Avatar>
              <Box
                sx={{
                  flex: 1,
                  border: "1px solid #ddd",
                  p: 1,
                  bgcolor: "white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ border: "1px solid #ccc", p: 0.5 }}
                >
                  {contact.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ border: "1px solid #ccc", p: 0.5 }}
                >
                  {contact.role}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ mt: 2, p: 1, border: "1px solid #ddd", bgcolor: "#f0f0f0" }}
            >
              <Stack spacing={1}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ccc",
                    p: 0.5,
                  }}
                >
                  <MdEmail size={16} />
                  <Typography variant="body2">{contact.email}</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    border: "1px solid #ccc",
                    p: 0.5,
                  }}
                >
                  <MdPhone size={16} />
                  <Typography variant="body2">{contact.phone}</Typography>
                </Box>
              </Stack>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );

  const ImpliedBoundaries = () => (
    <Stack spacing={4}>
      {contacts.map((contact, index) => (
        <Box
          key={index}
          sx={{ "&:hover": { bgcolor: "#f8f9fa" }, p: 2, borderRadius: 1 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Avatar sx={{ bgcolor: "primary.main" }}>
              <MdPerson />
            </Avatar>
            <Box>
              <Typography variant="h6">{contact.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {contact.role}
              </Typography>
            </Box>
          </Box>
          <Stack spacing={1} sx={{ ml: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MdEmail size={16} />
              <Typography variant="body2">{contact.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <MdPhone size={16} />
              <Typography variant="body2">{contact.phone}</Typography>
            </Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Over-designed example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Explicit boundaries everywhere
          </Typography>
          <ExplicitBoundaries />
        </Grid>

        {/* Minimal example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Implied boundaries using whitespace
          </Typography>
          <ImpliedBoundaries />
        </Grid>
      </Grid>
    </Container>
  );
};
