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
} from "@mui/material";

import lipstick from "../assets/Images/lipstick.jpg";
import foundation from "../assets/Images/foundation.jpg";
import perfume from "../assets/Images/perfume.jpg";

const products = [
  {
    id: 1,
    title: "Matte Lipstick",
    description: "Smooth and long-lasting matte finish.",
    image: lipstick,
  },
  {
    id: 2,
    title: "Liquid Foundation",
    description: "Flawless coverage with a natural glow.",
    image: foundation,
  },
  {
    id: 3,
    title: "Luxury Perfume",
    description: "Enchanting fragrance that lasts all day.",
    image: perfume,
  },
];

const FeaturedProducts = () => {
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
      <Container
        sx={{
          textAlign: "center",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
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
            mb: 4,
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

        <Box display="flex" justifyContent="center" sx={{ flexGrow: 1 }}>
          <Grid container spacing={6} justifyContent="center">
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    width: "100%",
                    margin: "auto",
                    boxShadow: 5,
                    borderRadius: 4,
                    border: "2px solid #b03052",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
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
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#b03052",
                        color: "white",
                        fontWeight: "bold",
                        border: "2px solid #b03052",
                        px: 4,
                        "&:hover": {
                          backgroundColor: "white",
                          color: "#b03052",
                          borderColor: "#b03052",
                        },
                      }}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
