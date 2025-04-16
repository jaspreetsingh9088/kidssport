import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Sponsors = () => {
  const [videos, setVideos] = useState([]);
  const [images, setImages] = useState([]);

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
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  useEffect(() => {
    axios.get("https://mitdevelop.com/kidsadmin/api/sponsored")
      .then((response) => {
        if (response.data.success) {
          const sponsored = response.data.data;
          const storageBaseURL = "https://mitdevelop.com/kidsadmin/storage/app/public/";

          const videoItems = sponsored
            .filter(item => item.video_url)
            .map(item => ({
              id: item.id,
              url: storageBaseURL + item.video_url,
              title: item.title
            }));

          const imageItems = sponsored
            .filter(item => item.image_url)
            .map(item => ({
              id: item.id,
              url: storageBaseURL + item.image_url,
              title: item.title
            }));

          setVideos(videoItems);
          setImages(imageItems);
        }
      })
      .catch(error => {
        console.error("Error fetching sponsored data:", error);
      });
  }, []);

  return (
    <section className="Sponsors">
      <div className="container">
        <h2 className="text-center">Our Sponsors</h2>
        <p className="interactive interactive-one">Supporting the Champions of tomorrow</p>

        {/* Videos Slider */}
        {videos.length > 0 && (
          <div className="sponsors-slider video-slider-ads">
            <Slider {...settings}>
              {videos.map((video) => (
                <div key={video.id} className="text-center">
                  <video
                    width="100%"
                    controls
                    autoPlay
                    muted
                    loop
                    style={{ borderRadius: "16px" }}
                    className="ads-collapse"
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div>
        )}

        {/* Images Slider */}
        {images.length > 0 && (
          <div className="sponsors-slider">
            <Slider {...settings}>
              {images.map((img) => (
                <div key={img.id} className="text-center">
                  <img src={img.url} alt={img.title} className="sponser-logo-wid" />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </section>
  );
};

export default Sponsors;
