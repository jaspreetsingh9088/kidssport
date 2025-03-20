import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import kidzbook from '../assets/images/kidzbook.png';
import lowcosttrip from '../assets/images/lowcosttrip.png';
import myrupee from '../assets/images/myrupee.png';
import nivesh from '../assets/images/nivesh.png';
import rasoi from '../assets/images/rasoi.png';
import fxfort from '../assets/images/fxfort.png';

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sponsors = [kidzbook, lowcosttrip, myrupee, nivesh, rasoi, fxfort];

  return (
    <section className="Sponsors">
      <div className="container">
        <h2 className="text-center">Our Sponsors</h2>
        <div className="sponsors-slider">
          <Slider {...settings}>
            {sponsors.map((logo, index) => (
              <div key={index} className="text-center">
                <img src={logo} alt={`Sponsor ${index + 1}`} className="sponser-logo-wid" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
