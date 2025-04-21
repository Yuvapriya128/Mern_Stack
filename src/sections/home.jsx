import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"; // for routing (if necessary)

import home_background from "../assets/Images/home_background.jpg";

const Home = () => {
  const navigate = useNavigate(); // comment this out if not using routing

  // Function to scroll to specific section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with id ${sectionId} not found.`);
    }
  };

  return (
    <Box
      sx={{
        scrollMarginTop: "180px",
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
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Content Box */}
      <Box
        sx={{
          backgroundColor: "rgba(176, 48, 82, 0.8)",
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
            backgroundColor: "#f5b7b1",
            color: "#b03052",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f1948a",
            },
          }}
          onClick={() => navigate("/bestsellers")} // Navigate to Bestsellers page if necessary
        >
          Shop Bestsellers
        </Button>
        {/* Scroll button to the next section */}
        <Button
          variant="outlined"
          sx={{
            mt: 2,
            color: "#f5b7b1",
            borderColor: "#f5b7b1",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "#f1948a",
              color: "#f1948a",
            },
          }}
          onClick={() => scrollToSection("home")} // Scroll to home section
        >
          Go to Home Section
        </Button>
      </Box>

      {/* Add this extra box to create a clean separation */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "50px",
          backgroundColor: "#ffe6ec", // match the background of the next section
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Home;
