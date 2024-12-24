import React from "react";
import logokidz from "../assets/images/logokidz.png";
import pluspersonImg from "../assets/images/plus-person.png";
import arrowcontact from "../assets/images/arrowcontact.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
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
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                  Gallery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Photos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown-items" href="#">
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
              
              <li className="nav-item">
              <Link to="/Blog" className="nav-link">
                  Blog
               </Link>
              </li>
            </ul>
            <Link to="/stepform" title="Registration">
              <img src={pluspersonImg} alt="Plus person" className="plus-person" />
            </Link>
            <div className="contact-bg-rol">
              <a href="#" className="btn-cantact">
                Contact Us <span><img src={arrowcontact} className="contact-uss" alt="contact-us" /></span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </nav>
  );
}

export default Navbar;
