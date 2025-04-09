import React from "react";
import Navbar from "../components/navbar";
import Home from "../sections/home";
import BestSellers from "../sections/bestsellers";
import NewArrivals from "../sections/NewArrivals";
import Testimonials from "../sections/Testimonials";
import Footer from "../components/footer";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <BestSellers />
      <NewArrivals />
      <Testimonials />
      <Footer />
    </>
  );
};

export default MainPage;
