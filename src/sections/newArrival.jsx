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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

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
      image: eyeshadow,
      title: "Eyeshadow Palette",
      description: "Vibrant colors for every look.",
    },
    {
      image: moisturizer,
      title: "Hydrating Moisturizer",
      description: "Deep hydration for glowing skin.",
    },
    {
      image: lipgloss,
      title: "Glossy Lip Gloss",
      description: "Shine and nourish your lips.",
    },
  ],
  [
    {
      image: blush,
      title: "Cream Blush",
      description: "Adds a natural flush.",
    },
    {
      image: foundation,
      title: "Long-Lasting Foundation",
      description: "Flawless coverage all day.",
    },
    {
      image: mascara,
      title: "Volumizing Mascara",
      description: "Dramatic lashes with one swipe.",
    },
  ],
  [
    {
      image: serum,
      title: "Vitamin C Serum",
      description: "Brightens and evens skin tone.",
    },
    {
      image: cleanser,
      title: "Gentle Facial Cleanser",
      description: "Removes impurities without drying.",
    },
    {
      image: toner,
      title: "Hydrating Toner",
      description: "Balances skin and prepares for serum.",
    },
  ],
];

const NewArrivals = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = products.length;

  const handleNext = () =>
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  const handleBack = () =>
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: "#fef2f4",
        borderRadius: 4,
        overflow: "hidden",
        minHeight: "700px",
        height: "auto",
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
          mb: 2,
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

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          minHeight: "90vh", // ← Added minHeight
          py: 2, // ← Added some vertical padding
        }}
      >
        {!isMobile && (
          <IconButton
            onClick={handleBack}
            sx={{
              mx: 1,
              backgroundColor: "#fff",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowBackIos />
          </IconButton>
        )}

        <SwipeableViews
          index={activeStep}
          onChangeIndex={setActiveStep}
          enableMouseEvents
          resistance
          style={{ overflow: "hidden", width: "100%" ,  padding: "20px 0"}}
        >
          {products.map((slide, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Grid
                container
                spacing={isMobile ? 2 : 4}
                justifyContent="center"
              >
                {" "}
                {/* Increased spacing */}
                {slide.map((product, idx) => (
                  <Grid item xs={12} sm={4} md={4} key={idx}>
                    <Card
                      sx={{
                        maxWidth: 345,
                        margin: "auto",
                        boxShadow: 5,
                        borderRadius: 4,
                        transition: "transform 0.3s ease-in-out",
                        position: "relative",
                        height: "100%",
                        border: "2px solid #b03052", // Added border here
                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    >
                      <Chip
                        label="NEW"
                        color="error"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          zIndex: 1,
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
                        <Typography gutterBottom variant="h6" align="center">
                          {product.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          align="center"
                        >
                          {product.description}
                        </Typography>
                      </CardContent>
                      <Box textAlign="center" pb={2}>
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
                        >
                          Buy Now
                        </Button>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </SwipeableViews>

        {!isMobile && (
          <IconButton
            onClick={handleNext}
            sx={{
              mx: 1,
              backgroundColor: "#fff",
              boxShadow: 2,
              "&:hover": { backgroundColor: "#eee" },
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default NewArrivals;
