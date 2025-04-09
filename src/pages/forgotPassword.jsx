import React, { useEffect, useState } from "react";
import "../assets/css/forgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const savedEmail = localStorage.getItem("resetEmail");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resetEmail", email);
  }, [email]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("⚠️ Please enter a valid email address.");
      setMessage("");
      return;
    }
    setError("");
    setMessage("✅ A reset link has been sent to your email.");
  };

  return (
    <div className="forgot-password-body">
      <div className="container">
        <header>Forgot Password?</header>
        <div className="form-outer">
          <form onSubmit={handleSubmit}>
            <div className="page">
              <p className="reset-message">
                Don’t worry, we can help you reset your password.
              </p>

              <div className="field">
                <div className="label">Email Address</div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && (
                  <div className="feedback error-feedback">{error}</div>
                )}
                {message && (
                  <div className="feedback success-feedback">{message}</div>
                )}
              </div>

              <div className="field">
                <button className="reset-button" type="submit">
                  Send Reset Link
                </button>
              </div>

              <p className="back-to-login">
                Remember your password? <a href="/login">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
