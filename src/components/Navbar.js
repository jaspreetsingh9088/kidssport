import React from "react";

import logoLogo from "../assets/images/logo-kidz.png";
import pluspersonImg from "../assets/images/plus-person.png";


function Navbar() {
  return (
    <nav>
      {/* top nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* Use relative path for images correctly */}
            <img src={logoLogo} className="Kidzsport World" alt="Kidzsport" />
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
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
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
                    <a className="dropdown-item" href="#">
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
            </ul>
            <img
              src={pluspersonImg}
              alt="Plus person"
              className="plus-person"
            />
            <a href="#" className="btn-cantact">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      {/* top nav end */}
    </nav>
  );
}

export default Navbar;
