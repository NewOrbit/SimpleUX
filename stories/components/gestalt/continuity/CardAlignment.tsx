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
} from "@mui/material";

export const CardAlignment = () => {
  const cardData = [
    { title: "Product A", price: "$29.99", rating: 4.5 },
    { title: "Product B", price: "$39.99", rating: 4.2 },
    { title: "Product C", price: "$19.99", rating: 4.8 },
    { title: "Product D", price: "$49.99", rating: 4.1 },
  ];

  const AlignedCards = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Product Carousel
      </Typography>
      <Stack direction="row" spacing={2} sx={{ pb: 1, overflowX: "auto" }}>
        {cardData.map((product, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 160,
              cursor: "pointer",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "primary.main",
                  mx: "auto",
                  mb: 2,
                  fontSize: "1.5rem",
                }}
              >
                {product.title.slice(-1)}
              </Avatar>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {product.price}
              </Typography>
              <Typography variant="body2" sx={{ color: "orange" }}>
                ⭐ {product.rating}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Stack>
  );

  const MisalignedCards = () => (
    <Stack p={3}>
      <Typography variant="subtitle2" sx={{ mb: 3 }}>
        Product Grid
      </Typography>
      <Box>
        {/* First row with 3 cards */}
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          {cardData.slice(0, 3).map((product, index) => (
            <Card
              key={index}
              sx={{
                width: 160,
                cursor: "pointer",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "translateY(-4px)" },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: "primary.main",
                    mx: "auto",
                    mb: 2,
                    fontSize: "1.5rem",
                  }}
                >
                  {product.title.slice(-1)}
                </Avatar>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  {product.price}
                </Typography>
                <Typography variant="body2" sx={{ color: "orange" }}>
                  ⭐ {product.rating}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        {/* Second row with 1 card - breaks the alignment */}
        <Stack direction="row" spacing={2}>
          <Card
            sx={{
              width: 160,
              cursor: "pointer",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translateY(-4px)" },
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: "primary.main",
                  mx: "auto",
                  mb: 2,
                  fontSize: "1.5rem",
                }}
              >
                {cardData[3].title.slice(-1)}
              </Avatar>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {cardData[3].title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {cardData[3].price}
              </Typography>
              <Typography variant="body2" sx={{ color: "orange" }}>
                ⭐ {cardData[3].rating}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Stack>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Misaligned example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Misaligned layout
          </Typography>
          <MisalignedCards />
        </Grid>

        {/* Aligned example */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Aligned layout
          </Typography>
          <AlignedCards />
        </Grid>
      </Grid>
    </Container>
  );
};
