import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import {
  ArrowBack,
  ShoppingCart,
  FlashOn,
  FavoriteBorder,
  Favorite,
  Share,
  LocalShipping,
  AssignmentReturn,
  VerifiedUser,
} from "@mui/icons-material";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  const product =
    location.state?.product || products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  const originalPrice = Math.ceil(product.price * 1.5);
  const discountPercentage = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: "#fef6f9", minHeight: "100vh" }}>
      {/* Back button */}
      <Button
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{ mb: 3, color: "text.secondary" }}
      >
        Back to results
      </Button>

      {/* Main product container */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Grid container spacing={4}>
          {/* Image column - takes full width on mobile, 5/12 on desktop */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 300, sm: 400 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 3,
                p: 2,
                border: "1px solid #f0f0f0",
              }}
            >
              <Chip
                label={`${discountPercentage}% OFF`}
                color="error"
                size="small"
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  zIndex: 1,
                  fontWeight: "bold",
                }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  backgroundColor: "rgba(255,255,255,0.8)",
                }}
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                {isWishlisted ? (
                  <Favorite color="error" />
                ) : (
                  <FavoriteBorder color="action" />
                )}
              </IconButton>

              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              />
            </Box>
          </Grid>

          {/* Details column - takes full width on mobile, 7/12 on desktop */}
          <Grid item xs={12} md={7}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                {product.title}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ color: "text.secondary", mb: 1 }}
              >
                by {product.brand || "BeautyBrand"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Rating
                  value={product.rating || 4.5}
                  precision={0.5}
                  readOnly
                  size="medium"
                  sx={{ mr: 1 }}
                />
                <Typography variant="body2" color="text.secondary">
                  ({product.ratingCount || 124} reviews)
                </Typography>
              </Box>
            </Box>

            {/* Price section */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                backgroundColor: "#fff9f9",
                border: "1px solid #ffebee",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "baseline", mb: 1 }}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 700, color: "#b03052" }}
                >
                  ₹{product.price}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textDecoration: "line-through",
                    color: "text.secondary",
                    ml: 2,
                  }}
                >
                  ₹{originalPrice}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#388e3c",
                    ml: 2,
                    backgroundColor: "#e8f5e9",
                    px: 1,
                    borderRadius: 1,
                  }}
                >
                  Save ₹{originalPrice - product.price}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Inclusive of all taxes
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  Offers
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Chip
                    label="10%"
                    size="small"
                    sx={{
                      backgroundColor: "#e3f2fd",
                      color: "#1976d2",
                      mr: 1,
                    }}
                  />
                  <Typography variant="body2">
                    Get 10% cashback up to ₹100 on Paytm Wallet
                  </Typography>
                </Box>
              </Box>
            </Paper>

            {/* Description */}
            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Description
              </Typography>
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
            </Box>

            {/* Trust badges */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                mb: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                }}
              >
                <LocalShipping sx={{ color: "text.secondary", mr: 1 }} />
                <Typography variant="body2">Free Delivery</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  backgroundColor: "#f5f5f5",
                  borderRadius: 1,
                }}
              >
                <AssignmentReturn sx={{ color: "text.secondary", mr: 1 }} />
                <Typography variant="body2">7-Day Returns</Typography>
              </Box>
            </Box>

            {/* Action buttons */}
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                variant="contained"
                startIcon={<ShoppingCart />}
                size="large"
                sx={{
                  flexGrow: 1,
                  backgroundColor: "#b03052",
                  "&:hover": { backgroundColor: "#8c2642" },
                  py: 1.5,
                }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                startIcon={<FlashOn />}
                size="large"
                onClick={() => navigate(`/checkout/${product.id}`, { state: { product } })}
                sx={{
                  flexGrow: 1,
                  backgroundColor: "#ff5252",
                  "&:hover": { backgroundColor: "#ff3232" },
                  py: 1.5,
                }}
              >
                Buy Now
              </Button>
              <IconButton
                sx={{
                  border: "1px solid #e0e0e0",
                  backgroundColor: "background.paper",
                }}
              >
                <Share />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetail;