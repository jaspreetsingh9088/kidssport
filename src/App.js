import React from "react";
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
import Footer from "./components/Footer";
import "./assets/css/style.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <About />
      <Event />
      <Whychoose />
      <Programm />
      <Testimonial />
      <Sponsors />
      <Register />
      <Latestblog />
      <Footer />
    </>
  );
}

export default App;
