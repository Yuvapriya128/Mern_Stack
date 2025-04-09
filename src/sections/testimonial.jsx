import React from 'react';
import { Box, Typography } from '@mui/material';

const testimonials = [
  {
    text: "The best cosmetics I've ever used! My skin feels soft and hydrated all day long. I’ve already recommended WhyC! Cosmetics to all my friends.",
    name: "Jane Doe",
  },
  {
    text: "Amazing products and excellent customer service. They answered my questions right away and helped me choose the right items. I couldn’t be happier with my experience!",
    name: "John Smith",
  },
  {
    text: "My skin has never looked better. After just a week of using WhyC! products, I noticed a huge difference. I feel so much more confident now!",
    name: "Emily Johnson",
  },
  {
    text: "Absolutely love these products! The texture, the scent, and the results are all amazing. I’ll definitely be coming back for more.",
    name: "Sophia Lee",
  },
  {
    text: "Their moisturizer changed my skincare game! It absorbs quickly and keeps my face glowing all day. I can't believe I went so long without it.",
    name: "Michael Brown",
  },
  {
    text: "Five stars across the board for quality and service! My order arrived fast and beautifully packaged. WhyC! has earned a lifelong customer.",
    name: "Sarah Wilson",
  },
];


const MarqueeRow = ({ reverse = false }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        animation: `${reverse ? 'scrollReverse' : 'scroll'} 40s linear infinite`,
      }}
    >
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <Box
          key={index}
          sx={{
            width: 320, // Fixed width instead of minWidth
            height: 200,
            mx: 2,
            px: 3,
            py: 2,
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
            border: '1px solid #e0e0e0',
            position: 'relative',
            overflow: 'hidden',
            whiteSpace: 'normal', // Allow text wrapping
            flexShrink: 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: 1.6,
              color: '#333',
              wordBreak: 'break-word',
              pr: 2,
              mb: 5,
            }}
          >
            "{testimonial.text}"
          </Typography>
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 12,
              fontWeight: 'bold',
              color: 'gray',
            }}
          >
            - {testimonial.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const Testimonial = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fffff9',
        py: 6,
        minHeight: '60vh',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#b03052',
          mb: 4,
          position: 'relative',
          '&:after': {
            content: '""',
            display: 'block',
            width: 80,
            height: 4,
            background: '#b03052',
            margin: '16px auto 0',
          },
        }}
      >
        What Our Customers Say
      </Typography>

      <Box sx={{ overflow: 'hidden' }}>
        <MarqueeRow />
        <Box sx={{ mt: 3 }}>
          <MarqueeRow reverse />
        </Box>
      </Box>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scrollReverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default Testimonial;
