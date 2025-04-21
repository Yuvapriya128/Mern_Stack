import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Chip,
  IconButton,
  Rating,
  useTheme,
  useMediaQuery,
  CardActions,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import eyeshadow from "../assets/Images/eyeshadow.jpg";
import moisturizer from "../assets/Images/moisturizer.jpg";
import lipgloss from "../assets/Images/lipgloss.jpg";
import blush from "../assets/Images/blush.jpg";
import foundation from "../assets/Images/foundation.jpg";
import mascara from "../assets/Images/mascara.jpg";
import serum from "../assets/Images/serum.jpg";
import cleanser from "../assets/Images/cleanser.jpeg";
import toner from "../assets/Images/toner.jpg";

const products = [
  [
    {
      id: 1,
      image: eyeshadow,
      title: "Eyeshadow Palette",
      description: "Vibrant colors for every look.",
      price: 450,
      rating: 4.6,
    },
    {
      id: 2,
      image: moisturizer,
      title: "Hydrating Moisturizer",
      description: "Deep hydration for glowing skin.",
      price: 450,
      rating: 4.7,
    },
    {
      id: 3,
      image: lipgloss,
      title: "Glossy Lip Gloss",
      description: "Shine and nourish your lips.",
      price: 450,
      rating: 4.5,
    },
  ],
  [
    {
      id: 4,
      image: blush,
      title: "Cream Blush",
      description: "Adds a natural flush.",
      price: 450,
      rating: 4.6,
    },
    {
      id: 5,
      image: foundation,
      title: "Long-Lasting Foundation",
      description: "Flawless coverage all day.",
      price: 450,
      rating: 4.8,
    },
    {
      id: 6,
      image: mascara,
      title: "Volumizing Mascara",
      description: "Dramatic lashes with one swipe.",
      price: 450,
      rating: 4.7,
    },
  ],
  [
    {
      id: 7,
      image: serum,
      title: "Vitamin C Serum",
      description: "Brightens and evens skin tone.",
      price: 450,
      rating: 4.9,
    },
    {
      id: 8,
      image: cleanser,
      title: "Gentle Facial Cleanser",
      description: "Removes impurities without drying.",
      price: 450,
      rating: 4.6,
    },
    {
      id: 9,
      image: toner,
      title: "Hydrating Toner",
      description: "Balances skin and prepares for serum.",
      price: 450,
      rating: 4.7,
    },
  ],
];

const NewArrivals = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const maxSteps = products.length;

  const handleNext = () => setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  const handleBack = () => setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);

  const handleBuyNow = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#fef2f4",
        borderRadius: 4,
        minHeight: "700px",
      }}
    >
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
        New Arrivals
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center" sx={{ py: 2 }}>
        {!isMobile && (
          <IconButton onClick={handleBack} sx={{ mx: 1, backgroundColor: "#fff", boxShadow: 2 }}>
            <ArrowBackIos />
          </IconButton>
        )}

        <SwipeableViews
          index={activeStep}
          onChangeIndex={setActiveStep}
          enableMouseEvents
          resistance
          style={{ overflow: "hidden", width: "100%", padding: "20px 0" }}
        >
          {products.map((slide, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Grid container spacing={isMobile ? 2 : 4} justifyContent="center">
                {slide.map((product) => (
                  <Grid item xs={12} sm={4} md={4} key={product.id}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        margin: "auto",
                        boxShadow: 5,
                        borderRadius: 4,
                        position: "relative",
                        border: "2px solid #b03052",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      <Chip
                        label="NEW"
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
                            "&:hover": { transform: "scale(1.1)" },
                          }}
                        />
                      </Box>

                      <CardContent>
                        <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: "bold" }}>
                          {product.title}
                        </Typography>

                        <Box display="flex" justifyContent="center" mb={1}>
                          <Rating
                            value={product.rating}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          <Typography variant="body2" color="text.secondary" ml={1}>
                            ({product.rating})
                          </Typography>
                        </Box>

                        <Typography variant="body2" color="text.secondary" align="center">
                          {product.description}
                        </Typography>
                      </CardContent>

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
            </Box>
          ))}
        </SwipeableViews>

        {!isMobile && (
          <IconButton onClick={handleNext} sx={{ mx: 1, backgroundColor: "#fff", boxShadow: 2 }}>
            <ArrowForwardIos />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default NewArrivals;
