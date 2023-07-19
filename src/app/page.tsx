"use client";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import AOS from "aos";
import CustomNavbar from "./Components/Home/CustomNavbar/CustomNavbar";
import Hero from "./Components/Home/Hero/Hero";
import Intro from "./Components/Home/Intro/Intro";
import About from "./Components/Home/About/About";
import Form from "./Components/Home/Form/Form";
import Footer from "./Components/Home/Footer/Footer";
import Services from "./Components/Home/Services/Services";
import Info from "./Components/Home/Info/Info";

import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    // Code to run when the component mounts
    AOS.init();
  }, []);
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Intro />
      <About />
      <Services />
      <Info />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
