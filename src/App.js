import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Event from "./components/Event";
import Whychoose from "./components/Whychoose";
import Programm from "./components/Programm";
import Testimonial from "./components/Testimonial";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Latestblog from "./components/Latestblog";
import Stepform from "./components/Stepform";
import Footer from "./components/Footer";

import "./assets/css/style.css";

function App() {
  return (
    <Router>
      {/* Always show Header and Navbar on all pages */}
      <Header />
      <Navbar />

      <Routes>
        {/* Default home page route */}
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <About />
              <Event />
              <Whychoose />
              <Programm />
              <Testimonial />
              <Sponsors />
              <Register />
              <Latestblog />
            </>
          }
        />

        {/* Route for the Stepform */}
        <Route path="/stepform" element={<Stepform />} />
      </Routes>

      {/* Footer always shows */}
      <Footer />
    </Router>
  );
}

export default App;
