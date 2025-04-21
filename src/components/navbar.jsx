import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  InputBase,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Images/logo.png";

const Navbar = ({ sections }) => {
  const navigate = useNavigate();

  const scrollToSection = (section) => {
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", ref: "home" },
    { label: "Products", ref: "products" },
    { label: "Best Sellers", ref: "bestsellers" },
    { label: "New Arrivals", ref: "newarrivals" },
    { label: "Testimonials", ref: "testimonials" },
    { label: "Contact Us", ref: "footer" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#f48fb1",
        color: "white",
        boxShadow: "none",
        padding: "4px 24px", // padding directly on the AppBar instead of Container
        mb: "2px",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          width: "100%",
        }}
      >
        {/* Logo & Brand */}
        <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <IconButton edge="start" color="inherit">
            <img src={logo} alt="logo" className="navbar-logo" />
          </IconButton>
          <Typography variant="h6" className="brand-text">
            WhyC! Cosmetics
          </Typography>
        </Box>

        {/* Nav Buttons - Hidden on mobile */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              onClick={() => scrollToSection(item.ref)}
              className="nav-button"
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Right Side: Search + Login */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexShrink: 0,
          }}
        >
          {/* Search - Hidden on mobile */}
          <Box
            className="search-box"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <InputBase placeholder="Search..." className="search-input" />
            <IconButton className="search-icon">
              <SearchIcon />
            </IconButton>
          </Box>

          {/* SignUp/Login Button */}
          <Button
            onClick={() => navigate("/login")}
            className="login-button"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            SignUp/Login
          </Button>

          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      <style>
        {`
          .navbar-logo {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid white;
          }

          .brand-text {
            font-weight: 700;
            margin-left: 12px;
            font-size: 1.25rem;
            white-space: nowrap;
          }

          .nav-button {
            margin: 0 8px;
            padding: 8px 12px;
            color: white;
            text-transform: none;
            font-weight: 600;
            font-size: 0.9rem;
            border: 2px solid transparent;
            border-radius: 8px;
            transition: all 0.3s ease;
            min-height: unset;
            line-height: 1.5;
            background-color: transparent;
            white-space: nowrap;
          }

          .nav-button:hover {
            background-color: white;
            color: #b03052;
            border: 2px solid #b03052;
          }

          .search-box {
            display: flex;
            align-items: center;
            background-color: rgba(255, 255, 255, 0.2);
            padding: 6px 14px;
            border-radius: 6px;
            margin-left: 10px;
          }

          .search-input {
            color: white;
            width: 120px;
            font-size: 0.9rem;
            margin-right: 6px;
          }

          .search-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }

          .search-icon {
            color: white;
            padding: 6px;
          }

          .login-button {
            text-transform: none;
            background-color: white;
            color: #b03052;
            border-radius: 8px;
            padding: 8px 20px;
            font-weight: bold;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            border: none;
            white-space: nowrap;
            min-width: 120px;
          }

          .login-button:hover {
            background-color: #b03052;
            color: white;
            border: 2px solid white;
          }

          @media (min-width: 900px) {
            .search-input {
              width: 180px;
            }

            .login-button {
              padding: 10px 30px;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </AppBar>
  );
};

export default Navbar;
