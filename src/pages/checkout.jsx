import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Button,
  Paper,
  Divider,
  Snackbar,
  Alert,
  Slide,
  Stack,
} from "@mui/material";

const paymentMethods = ["Credit Card", "UPI", "Cash on Delivery"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCancel, setShowCancel] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (showSuccess || showCancel) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setShowCancel(false);
        navigate("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, showCancel, navigate]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10‑digit Indian phone number";
    if (!formData.payment) newErrors.payment = "Select a payment method";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCancel = () => {
    setShowCancel(true);
  };

  if (!product) return <Typography>Product not found</Typography>;

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(to right, rgb(245,237,239), #f48fb1, rgb(251,219,230))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: { xs: "100%", sm: 500 },
          p: 4,
          borderRadius: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Delivery Details
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <TextField
          fullWidth
          label="Full Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Address"
          name="address"
          variant="outlined"
          multiline
          rows={3}
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          select
          label="Payment Method"
          name="payment"
          variant="outlined"
          value={formData.payment}
          onChange={handleChange}
          error={!!errors.payment}
          helperText={errors.payment}
          sx={{ mb: 3 }}
        >
          {paymentMethods.map((method) => (
            <MenuItem key={method} value={method}>
              {method}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h6" gutterBottom>
          Total: ₹{product.price}
        </Typography>

        <Stack spacing={2} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            onClick={handleSubmit}
            sx={{
              py: 1.5,
              backgroundColor: "#ec407a",
              textTransform: "uppercase",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#fff",
                border: "2px solid #f06292",
                color: "black",
              },
            }}
          >
            {isSubmitting ? "Processing..." : "Pay & Confirm Order"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            color="error"
            onClick={handleCancel}
            sx={{
              py: 1.5,
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            Cancel Order
          </Button>
        </Stack>
      </Paper>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" sx={{ fontSize: "1.2rem", py: 2, px: 4 }}>
          ✅ Your delivery is on the way!
        </Alert>
      </Snackbar>

      {/* Cancel Snackbar */}
      <Snackbar
        open={showCancel}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" sx={{ fontSize: "1.2rem", py: 2, px: 4 }}>
          ❌ Your order is canceled
        </Alert>
      </Snackbar>
    </Box>
  );
}
