import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import "./assets/css/style.css";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
