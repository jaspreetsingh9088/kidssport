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
import ScrollToTop from "./components/ScrollToTop";
import Eventform from "./components/Eventform";
import Myaccount from "./components/Myaccount";
import Sportsstore from "./components/Sportsstore";
import Login from "./components/Login";
import Footer from "./components/Footer";
import DisclaimerPolicy from "./components/DisclaimerPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditionPolicy from "./components/TermsCondition"; // Corrected import statement

import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Header and Navbar always visible */}
      <Header />
      <Navbar />

      <main>
        <Routes>
          {/* Home route */}
          <Route
            path="/kidssport"
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
          <Route path="events" element={<Programmdetail />} />
          <Route path="Aboutus" element={<Aboutus />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="Contactus" element={<Contactus />} />
          <Route path="Eventform" element={<Eventform />} />
          <Route path="Sportsstore" element={<Sportsstore />} />
          <Route path="/myaccount/:id" element={<Myaccount />} />
          <Route path="/blog/:slug" element={<Postdetail />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/Disclaimer-policy" element={<DisclaimerPolicy />} />
          <Route path="/Terms-conditions" element={<TermsConditionPolicy />} />

          <Route path="Login" element={<Login />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
}

export default App;
