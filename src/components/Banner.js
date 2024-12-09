import React from 'react';
import backgroundImage from '../assets/images/background-img.png';
import childImage from '../assets/images/child.png'; // Import the image for the child

function Banner() {
  // Inline styles for the background image and other styles
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <section className="banner" style={style}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h5 className="quest">Quest For Knowledge</h5>
            <h1 className="join">
              Join the Fun, <br /> Play the Game!
            </h1>
            <p className="banner-pg">
              Step into the action, embrace the excitement, and challenge <br />
              yourself to win!
            </p>
            <button className="book">Book Now</button>
          </div>
          <div className="col-lg-6">
            <img src={childImage} alt="Child playing" className="child" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
