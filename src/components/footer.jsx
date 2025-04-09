import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Link,
  IconButton,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  LocalShipping,
  HelpOutline,
  AssignmentReturn,
  QuestionAnswer,
} from '@mui/icons-material';

import logo from "../assets/Images/logo.png";
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to right, #fff7f7, #fff0f0)',
        color: '#333',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img src={logo} alt="WhyC! Logo" style={{ height: 50, marginRight: 10 }} />
              <Typography variant="h5" fontWeight="bold">
                WhyC! Cosmetics
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Dedicated to bringing you the best in beauty and skincare. Our mission is to provide
              high-quality products that enhance your natural beauty.
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              ✉️ contact@whyccosmetics.com
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Quick Links</Typography>
            {['Home', 'Featured Products', 'Best Sellers', 'New Arrivals', 'Testimonials'].map((text) => (
              <Link
                key={text}
                href="#"
                sx={{
                  display: 'block',
                  color: '#444',
                  mb: 0.8,
                  transition: '0.3s',
                  '&:hover': {
                    textDecoration: 'underline',
                    color: '#b03052',
                  },
                }}
              >
                {text}
              </Link>
            ))}
          </Grid>

          {/* Customer Service */}
          <Grid item xs={6} sm={4} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Customer Service</Typography>
            <Box>
              <Link href="#" sx={{ display: 'flex', alignItems: 'center', color: '#444', mb: 0.8 }}>
                <HelpOutline fontSize="small" sx={{ mr: 1 }} /> Help Center
              </Link>
              <Link href="#" sx={{ display: 'flex', alignItems: 'center', color: '#444', mb: 0.8 }}>
                <LocalShipping fontSize="small" sx={{ mr: 1 }} /> Shipping & Delivery
              </Link>
              <Link href="#" sx={{ display: 'flex', alignItems: 'center', color: '#444', mb: 0.8 }}>
                <AssignmentReturn fontSize="small" sx={{ mr: 1 }} /> Returns & Refunds
              </Link>
              <Link href="#" sx={{ display: 'flex', alignItems: 'center', color: '#444' }}>
                <QuestionAnswer fontSize="small" sx={{ mr: 1 }} /> FAQs
              </Link>
            </Box>
          </Grid>

          {/* Follow Us & Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>Follow Us</Typography>
            <Box>
              {[
                { icon: <Facebook />, color: '#4267B2' },
                { icon: <Instagram />, color: '#E1306C' },
                { icon: <Twitter />, color: '#1DA1F2' },
                { icon: <Pinterest />, color: '#E60023' },
              ].map(({ icon, color }, i) => (
                <IconButton
                  key={i}
                  aria-label="social"
                  href="#"
                  sx={{
                    color,
                    mr: 1,
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'scale(1.2)',
                    },
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>

            <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
              Subscribe to our newsletter
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <TextField
                placeholder="Your email"
                size="small"
                sx={{
                  flexGrow: 1,
                  mr: 1,
                  backgroundColor: '#fff',
                  borderRadius: 1,
                }}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#b03052',
                  '&:hover': { backgroundColor: '#902542' },
                  textTransform: 'none',
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#ddd' }} />

        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2">
            © 2025 WhyC! Cosmetics | All Rights Reserved
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                sx={{ color: '#777', fontSize: '0.875rem' }}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
