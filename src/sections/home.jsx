import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // if using React Router

import home_background from "../assets/Images/home_background.jpg";
const Home = () => {
  const navigate = useNavigate(); // comment this out if not using routing

  return (
    <Box
      sx={{
        backgroundImage: `url(${home_background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "800px",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(176, 48, 82, 0.8)", // #b03052 with opacity
          padding: 4,
          borderRadius: 4,
          maxWidth: 600,
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to WhyC! Cosmetics
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover the beauty within. Shop our latest collection today!
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: "#f5b7b1", // rose macaroon tone
            color: "#b03052",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f1948a",
            },
          }}
          onClick={() => navigate("/bestsellers")} // or scroll into view
        >
          Shop Bestsellers
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
