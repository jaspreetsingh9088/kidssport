import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Programmdetail from "./components/Programmdetail";
import Aboutus from "./components/Aboutus";
import Blog from "./components/Blog";
import Postdetail from "./components/Postdetail";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";

import "./assets/css/style.css";

function App() {
  return (
    <Router>
      {/* Header and Navbar always visible */}
      <Header />
      <Navbar />

      <main>
        <Routes>
          {/* Home route */}
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

          {/* Other specific routes */}
          <Route path="stepform" element={<Stepform />} />
          <Route path="programmdetail" element={<Programmdetail />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Postdetail" element={<Postdetail />} />
          <Route path="Contactus" element={<Contactus />} />

        
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
