import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import About from "./Pages/About";
import ServicesSection from "./Pages/Services";
import Footer from "./Components/Footer";
import ContactSection from "./Pages/ContactUs";
import ClientSection from "./Pages/Clients";
import Portfolio from "./Pages/Portfolio";
import BackToTop from "./Components/BacktoTop";
import VisionPage from "./Pages/VisionPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact-us" element={<ContactSection/>} />
        <Route path="/clients" element={<ClientSection/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/vision" element={<VisionPage/>} />
        
       
      </Routes>
      <BackToTop/>
      <Footer/>
    </Router>
  );
};

export default App;
