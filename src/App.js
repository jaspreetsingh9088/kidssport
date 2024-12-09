import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Event from "./components/Event";
import Sponsors from "./components/Sponsors";
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
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
