import React from 'react';
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
  Rating
} from '@mui/material';

import mascara from '../assets/Images/mascara.jpg';
import serum from '../assets/Images/serum.jpg';
import sunscreen from '../assets/Images/sunscreen.jpg';

const bestSellers = [
  {
    id: 1,
    title: 'Volumizing Mascara',
    description: 'Lengthen and volumize your lashes instantly.',
    image: mascara,
    rating: 4.8,
    isNew: true
  },
  {
    id: 2,
    title: 'Anti-Aging Serum',
    description: 'Reduce wrinkles and rejuvenate your skin.',
    image: serum,
    rating: 4.9,
    isPopular: true
  },
  {
    id: 3,
    title: 'SPF 50 Sunscreen',
    description: 'Lightweight protection against UV rays.',
    image: sunscreen,
    rating: 4.7,
    isBestSeller: true
  },
];

const BestSellers = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(to bottom right, #fff4f8, #ffe1e9)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        py: 8,
      }}
    >
      <Container sx={{ minHeight: '90vh' }}>
        {/* Heading */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#b03052',
            position: 'relative',
            mb: 8,
            '&:after': {
              content: '""',
              display: 'block',
              width: 80,
              height: 4,
              background: '#b03052',
              margin: '16px auto 0',
            }
          }}
        >
          Best Sellers
        </Typography>

        {/* Product Cards */}
        <Grid container spacing={4} justifyContent="center">
          {bestSellers.map((product) => (
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
                  width: '100%',
                  margin: 'auto',
                  boxShadow: 5,
                  borderRadius: 4,
                  border: '2px solid #b03052',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* Chip Labels */}
                {product.isNew && (
                  <Chip
                    label="NEW"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#b03052',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                )}
                {product.isPopular && (
                  <Chip
                    label="HOT"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#d76c82',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                )}
                {product.isBestSeller && (
                  <Chip
                    label="BESTSELLER"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#3d0301',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                )}

                {/* Image */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    height: 250,
                    backgroundColor: '#f8f8f8',
                    padding: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
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
                  >
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                  >
                    {product.description}
                  </Typography>
                </CardContent>

                {/* Buy Now Button */}
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#b03052',
                      color: 'white',
                      fontWeight: 'bold',
                      border: '2px solid #b03052',
                      '&:hover': {
                        backgroundColor: 'white',
                        color: 'black',
                        borderColor: '#b03052',
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
      </Container>
    </Box>
  );
};

export default BestSellers;
