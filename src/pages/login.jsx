import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  IconButton,
  Stack,
  Paper,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedEmail = localStorage.getItem("loginEmail");
    const storedPassword = localStorage.getItem("loginPassword");

    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "" || validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid email.");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === "" || validatePassword(value)) {
      setPasswordError("");
    } else {
      setPasswordError(
        "Minimum 6 characters with uppercase, lowercase, and number."
      );
    }
  };

  const handleLogin = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) setEmailError("Enter a valid email.");
    if (!isPasswordValid)
      setPasswordError(
        "Minimum 6 characters with uppercase, lowercase, and number."
      );

    if (!isEmailValid || !isPasswordValid) return;

    localStorage.setItem("loginEmail", email);
    localStorage.setItem("loginPassword", password);

    navigate("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to right, rgb(245, 237, 239), #f48fb1, rgb(251, 219, 230))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 400,
          padding: 4,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight={600} gutterBottom>
          LOGIN
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <FormControlLabel control={<Checkbox />} label="Remember me" />
          <Typography variant="body2" color="primary">
            <Link
              to="/forgot-password"
              style={{
                color: "#1976d2",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            mt: 3,
            py: 1.5,
            backgroundColor: "#ec407a",
            fontWeight: 500,
            letterSpacing: 1,
            textTransform: "uppercase",
            "&:hover": {
              backgroundColor: "#fff",
              border: "2px solid #f06292",
              color: "black",
            },
          }}
        >
          Login
        </Button>

        <Typography mt={3} variant="body2">
          Or login with
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <IconButton sx={{ border: "1px solid lightgray", borderRadius: 2 }}>
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton sx={{ border: "1px solid lightgray", borderRadius: 2 }}>
            <GoogleIcon color="error" />
          </IconButton>
        </Stack>

        <Typography mt={3} variant="body2">
          Not a member?{" "}
          <Link
            to="/signup"
            style={{
              color: "#f06292",
              cursor: "pointer",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Sign up now
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
