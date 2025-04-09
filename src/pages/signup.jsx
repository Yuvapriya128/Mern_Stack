import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import image from "../assets/Images/background.jpg";

const steps = ["Personal Info", "Skin Preferences", "Additional Info"];

export default function CosmeticsSignupForm() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    skinType: "",
    allergies: "",
    concern: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  // Load saved data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cosmeticsSignupForm"));
    if (storedData) setFormData(storedData);
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem("cosmeticsSignupForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  };

  const validateStep = () => {
    let tempErrors = {};
    if (activeStep === 0) {
      if (!formData.name.trim()) tempErrors.name = "Name is required";
      if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
      } else if (!validateEmail(formData.email)) {
        tempErrors.email = "Invalid email format";
      }
      if (!formData.password.trim()) {
        tempErrors.password = "Password is required";
      } else if (!validatePassword(formData.password)) {
        tempErrors.password =
          "Min 6 chars, with uppercase, lowercase & number";
      }
    } else if (activeStep === 1) {
      if (!formData.skinType.trim())
        tempErrors.skinType = "Skin type is required";
    } else if (activeStep === 2 && !formData.termsAccepted) {
      tempErrors.termsAccepted = "You must accept the terms";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      alert("Form submitted successfully!");
      localStorage.removeItem("cosmeticsSignupForm");
      navigate("/login");
    }
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
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "95%",
          maxWidth: "1400px",
          height: "700px",
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          boxShadow: 6,
        }}
      >
        {/* IMAGE SECTION */}
        <Box
          sx={{
            flex: 2,
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* FORM SECTION */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: "#fff0f5",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom color="#ec407a">
            Register
          </Typography>
          <Typography variant="body2" gutterBottom>
            Create your account. It’s free and only takes a minute.
          </Typography>

          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{
              marginY: 2,
              "& .MuiStepIcon-root.Mui-completed": { color: "#ec407a" },
              "& .MuiStepIcon-root.Mui-active": { color: "#ec407a" },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* STEP FIELDS */}
          {activeStep === 0 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
              />
            </Box>
          )}

          {activeStep === 1 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Skin Type"
                name="skinType"
                value={formData.skinType}
                onChange={handleChange}
                error={!!errors.skinType}
                helperText={errors.skinType}
                fullWidth
              />
              <TextField
                label="Allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                fullWidth
              />
            </Box>
          )}

          {activeStep === 2 && (
            <Box display="flex" flexDirection="column" gap={2}>
              <TextField
                label="Skin Concern (e.g., acne, wrinkles)"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                fullWidth
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.termsAccepted}
                    onChange={handleCheckboxChange}
                  />
                }
                label={
                  <Typography variant="body2">
                    I accept the{" "}
                    <span style={{ color: "#ec407a", cursor: "pointer" }}>
                      Terms of Use & Privacy Policy
                    </span>
                  </Typography>
                }
              />
              {errors.termsAccepted && (
                <Typography color="error" variant="body2">
                  {errors.termsAccepted}
                </Typography>
              )}
            </Box>
          )}

          <Box display="flex" justifyContent="space-between" mt={3}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              sx={{
                color: "#ec407a",
                borderColor: "#ec407a",
                "&:hover": {
                  backgroundColor: "#fce4ec",
                  borderColor: "#ec407a",
                },
              }}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ backgroundColor: "#ec407a", color: "white" }}
              >
                Register Now
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{ backgroundColor: "#ec407a", color: "white" }}
              >
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
