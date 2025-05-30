import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Chip,
  Button,
  Rating,
} from "@mui/material";

export const CardConsistency = () => {
  const products = [
    {
      name: "Wireless Headphones",
      price: "$79.99",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=200&fit=crop",
      category: "Electronics",
      inStock: true,
    },
    {
      name: "Coffee Maker",
      price: "$129.99",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop",
      category: "Appliances",
      inStock: true,
    },
    {
      name: "Running Shoes",
      price: "$89.99",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop",
      category: "Sports",
      inStock: false,
    },
  ];

  const ConsistentCards = () => (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              component="img"
              height="160"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ flexGrow: 1, p: 2 }}>
              <Stack spacing={2}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontSize: "1rem", fontWeight: "bold" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.category}
                  </Typography>
                </Box>

                <Stack direction="row" spacing={1} alignItems="center">
                  <Rating
                    value={product.rating}
                    precision={0.1}
                    size="small"
                    readOnly
                  />
                  <Typography variant="body2" color="text.secondary">
                    ({product.rating})
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h6"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.price}
                  </Typography>
                  <Chip
                    label={product.inStock ? "In Stock" : "Out of Stock"}
                    color={product.inStock ? "success" : "default"}
                    size="small"
                  />
                </Stack>

                <Button
                  variant={product.inStock ? "contained" : "outlined"}
                  color="primary"
                  disabled={!product.inStock}
                  fullWidth
                >
                  {product.inStock ? "Add to Cart" : "Notify Me"}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  const InconsistentCards = () => (
    <Grid container spacing={3}>
      {/* Card 1 - Different layout and styling */}
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: "auto", bgcolor: "#f8f9fa" }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ mb: 1, color: "#d32f2f" }}>
              {products[0].name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic" }}>
              Category: {products[0].category}
            </Typography>
            <CardMedia
              component="img"
              height="120"
              image={products[0].image}
              alt={products[0].name}
              sx={{ objectFit: "cover", borderRadius: "8px", mb: 2 }}
            />
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Rating
                value={products[0].rating}
                precision={0.1}
                size="large"
                readOnly
              />
            </Box>
            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              <Button variant="outlined" color="secondary" size="small">
                Details
              </Button>
              <Button variant="contained" color="success" size="small">
                Buy Now - {products[0].price}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 - Completely different structure */}
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 2, border: "2px solid #1976d2" }}>
          <Stack direction="row" spacing={2}>
            <CardMedia
              component="img"
              sx={{ width: 80, height: 80, borderRadius: "50%" }}
              image={products[1].image}
              alt={products[1].name}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" sx={{ fontWeight: "bold", mb: 0.5 }}>
                {products[1].name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {products[1].category} - {products[1].rating}★
              </Typography>
              <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                {products[1].price}
              </Typography>
            </Box>
          </Stack>
          <Button variant="text" color="primary" sx={{ mt: 2, width: "100%" }}>
            Add to Wishlist
          </Button>
        </Paper>
      </Grid>

      {/* Card 3 - Yet another different approach */}
      <Grid item xs={12} sm={4}>
        <Box sx={{ border: "1px dashed #666", p: 1 }}>
          <Typography variant="h4" sx={{ mb: 1, textAlign: "center" }}>
            {products[2].name}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Price: {products[2].price} | Rating: {products[2].rating}/5
          </Typography>
          <CardMedia
            component="img"
            height="100"
            image={products[2].image}
            alt={products[2].name}
            sx={{ objectFit: "cover", mb: 1 }}
          />
          <Stack direction="row" spacing={1}>
            <Chip
              label={products[2].category}
              variant="outlined"
              size="small"
            />
            <Chip label="OUT OF STOCK" color="error" size="small" />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={4}>
        {/* Inconsistent example */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Inconsistent card layouts
          </Typography>
          <InconsistentCards />
        </Grid>

        {/* Consistent example */}
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Consistent card design
          </Typography>
          <ConsistentCards />
        </Grid>
      </Grid>
    </Container>
  );
};
