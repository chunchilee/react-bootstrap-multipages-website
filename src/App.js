import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
// import Whatsapp from "./components/common/Whatsapp";
import "./css/App.scss";
import About from "./pages/About";
import Advertising from "./pages/Advertising";
import Branding from "./pages/Branding";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import SocialMedia from "./pages/SocialMedia";
import Website from "./pages/Website";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/website" element={<Website />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        {/* <Whatsapp /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
