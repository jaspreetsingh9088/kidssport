import React from "react";
import logokidz from "../assets/images/logokidz.png";
import pluspersonImg from "../assets/images/plus-person.png";
import arrowcontact from "../assets/images/arrowcontact.png";
import registertag from "../assets/images/registertag.png";
import { Link } from "react-router-dom";

function Navbar() {
  document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("navbar-shadow");
    } else {
      navbar.classList.remove("navbar-shadow");
    }
  });
  
  return (
      <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light " id="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logokidz} className="Kidzsport World" alt="Kidzsport" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <a className="nav-link " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
              <Link to="/Aboutus" className="nav-link">
                  About Us
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/Programmdetail" className="nav-link">
                  Events
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/Sportsstore" className="nav-link">
                  Sports  Store
                  </Link>
              </li>

              
              <li className="nav-item">
              <Link to="/Blog" className="nav-link">
                  Blog
               </Link>
              </li>
              
            </ul>
            
              
             
            <div className="mobile-register">
            <Link to="/stepform" >
            <div className="register-tag">
            <img src={registertag} className="register-tag-one" alt="Kidzsport" />
            </div>
              <img src={pluspersonImg} alt="Plus person" className="plus-person" />
            </Link>
           
            <Link to="/Contactus" >
            <div className="contact-bg-rol">
              <div className="d-inline-flex align-items-center contact-us-btn">
                <div><p>Contact Us</p></div>
                <div><img src={arrowcontact} className="contact-uss" alt="contact-us" /></div>
              </div>
            </div>
            </Link>
            </div>
          </div>
        </div>
      </nav>
      </div>

  );
}

export default Navbar;
