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
import hockeyplay from "../assets/images/hockeyplay.mp4";
import tennisvideo from "../assets/images/tennisvideo.mp4";
import chidvideo from "../assets/images/chidvideo.mp4";
import footballbvideo from "../assets/images/footballbvideo.mp4";

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
  const ads = [hockeyplay, tennisvideo, chidvideo, footballbvideo];

  return (
    <section className="Sponsors">

      <div className="container">
      <h2 className="text-center">Our Sponsors</h2>
      <p class="interactive interactive-one">Supporting the Champions of tomorrow</p>
        <div className="sponsors-slider video-slider-ads">
          <Slider {...settings}>
            {ads.map((video, index) => (
              <div key={index} className="text-center">
                <video
                  width="100%"
                  controls
                  autoPlay
                  muted
                  loop
                  style={{ borderRadius: "16px" }}
                  className="ads-collapse"
                >
                  <source src={video} type="video/mp4" alt={`ads ${index + 1}`} />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </Slider>
        </div>
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
