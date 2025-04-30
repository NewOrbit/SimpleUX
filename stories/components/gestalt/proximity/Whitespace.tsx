import React from "react";
import {
  Card,
  Typography,
  Box,
  Container,
  Grid,
  CardContent,
  Stack,
} from "@mui/material";

export const Whitespace = () => {
  const cards = [
    { title: "Card 1", content: "Some content here" },
    { title: "Card 2", content: "Another piece of content" },
    { title: "Card 3", content: "More information" },
    { title: "Card 4", content: "Additional details" },
    { title: "Card 5", content: "Important notes" },
    { title: "Card 6", content: "Final thoughts" },
  ];

  return (
    <Container>
      <Grid container spacing={8}>
        {/* Column with cramped cards */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Not enough whitespace
          </Typography>

          <Card elevation={0} sx={{ background: "#ddd", mb: 0.5 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Header
              </Typography>
            </CardContent>
          </Card>

          <Grid container spacing={0.2}>
            {cards.map((card, index) => (
              <Grid item xs={6} key={index}>
                <Card elevation={0} sx={{ height: "100%", background: "#eee" }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Column with proper spacing */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Enough whitespace
          </Typography>

          <Card elevation={0} sx={{ background: "#ddd", mb: 4 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Header
              </Typography>
            </CardContent>
          </Card>

          <Grid container spacing={1}>
            {cards.map((card, index) => (
              <Grid item xs={6} key={index}>
                <Card elevation={0} sx={{ height: "100%", background: "#eee" }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
