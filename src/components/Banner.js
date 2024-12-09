import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
import bannerchild from '../assets/images/bannerchild.svg'; // Import the image for the child

function Banner() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerchild} alt="banner" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={bannerchild} alt="banner" className="d-block w-100" />
        </div>
        <div className="carousel-item">
          <img src={bannerchild} alt="banner" className="d-block w-100" />
        </div>
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Banner;
