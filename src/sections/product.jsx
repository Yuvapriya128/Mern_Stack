import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Grid,
  Container,
  Chip,
  Rating,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { products } from "../data/products";

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to bottom right, #ffe4ec, #fce1f2)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        py: 8,
      }}
    >
      <Container sx={{ minHeight: "90vh" }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#b03052",
            position: "relative",
            mb: 8,
            "&:after": {
              content: '""',
              display: "block",
              width: 80,
              height: 4,
              background: "#b03052",
              margin: "16px auto 0",
            },
          }}
        >
          Featured Products
        </Typography>

        {/* Product Cards - 3 per row */}
        <Grid container spacing={4} justifyContent="center">
          {products.slice(0, 3).map((product) => (
            <Grid
              item
              key={product.id}
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  width: "100%",
                  margin: "auto",
                  boxShadow: 5,
                  borderRadius: 4,
                  border: "2px solid #b03052",
                  position: "relative",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Chip Label for Featured */}
                <Chip
                  label="FEATURED"
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    backgroundColor: "#b03052",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />

                {/* Product Image */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    height: 250,
                    backgroundColor: "#f8f8f8",
                    padding: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Box>

                {/* Product Details */}
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                    sx={{ fontWeight: "bold" }}
                  >
                    {product.title}
                  </Typography>
                  <Box display="flex" justifyContent="center" mb={1}>
                    <Rating
                      value={product.rating || 4.5} // Default rating if not specified
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary" ml={1}>
                      ({product.rating || 4.5})
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {product.description}
                  </Typography>
                </CardContent>

                {/* Price and Buy Now Button */}
                <CardActions sx={{ justifyContent: "space-between", p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    ₹{product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#b03052",
                      color: "white",
                      fontWeight: "bold",
                      border: "2px solid #b03052",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#b03052",
                      },
                    }}
                    onClick={() => handleBuyNow(product)}
                  >
                    Buy Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;