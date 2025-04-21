// // App.js
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Home from "./sections/home";
// import FeaturedProducts from "./sections/product";
// import BestSellers from "./sections/bestsellers";
// import NewArrivals from "./sections/newArrival";
// import Testimonial from "./sections/testimonial";
// import Footer from "./components/footer";
// import SignupForm from "./pages/signup";
// import LoginPage from "./pages/login";
// import ForgotPassword from "./pages/forgotPassword";
// import ProductDetail from "./components/productDetail";
// import Checkout from "./pages/checkout";

// function MainPage() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//       <FeaturedProducts />
//       <BestSellers />
//       <NewArrivals />
//       <Testimonial />
//       <Footer />
//     </>
//   );
// }

// export default function App() {
//   return (

//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/product/:id" element={<ProductDetail />} />
//         <Route path="/checkout/:id" element={<Checkout />} />
//       </Routes>
    
//   );
// }
// src/App.js

import React, { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./sections/home";
import FeaturedProducts from "./sections/product";
import BestSellers from "./sections/bestsellers";
import NewArrivals from "./sections/newArrival";
import Testimonial from "./sections/testimonial";
import Footer from "./components/footer";

import SignupForm from "./pages/signup";
import LoginPage from "./pages/login";
import ForgotPassword from "./pages/forgotPassword";
import ProductDetail from "./components/productDetail";
import Checkout from "./pages/checkout";

function MainPage() {
  // refs for scroll‑to‑section
  const sections = {
    home: useRef(null),
    products: useRef(null),
    bestsellers: useRef(null),
    newarrivals: useRef(null),
    testimonials: useRef(null),
    footer: useRef(null),
  };

  return (
    <>
      <Navbar sections={sections} />

      <div ref={sections.home}>
        <Home />
      </div>

      <div ref={sections.products}>
        <FeaturedProducts />
      </div>

      <div ref={sections.bestsellers}>
        <BestSellers />
      </div>

      <div ref={sections.newarrivals}>
        <NewArrivals />
      </div>

      <div ref={sections.testimonials}>
        <Testimonial />
      </div>

      <div ref={sections.footer}>
        <Footer />
      </div>
    </>
  );
}

export default function App() {
  return (
    
      <Routes>
        {/* Main landing page with scrollable sections */}
        <Route path="/" element={<MainPage />} />

        {/* Authentication routes */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Product detail & checkout */}
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
  
  );
}
