import React, { useEffect, useState } from 'react';
import childplay from '../assets/images/childplay.png';
import ticks from '../assets/images/ticks.svg';
import circleiconframe from '../assets/images/circleiconframe.png';
import rightarrows from '../assets/images/rightarrows.png';
import { Link } from "react-router-dom";
function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.kidzsport-about');
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (sectionPosition < windowHeight - 100) {
        setIsVisible(true); // Add 'show' class
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<section className={`about kidzsport-about ${isVisible ? 'show' : ''}`}>
  <div className="container">
    <div className="row align-items-center row-reverse">
      <div className="col-lg-6">
        <img src={childplay} alt="Childplay" className="child-play" />
      </div>
      <div className="col-lg-6">
        <div className='circle-framee'>
          <img src={circleiconframe} alt='' className='circle-frame floating'/>
        </div>
        <div>
          <p className="about">ABOUT KIDZSPORT</p>
        </div>
        <div>
          <h2 className="Engaging">Empowering Young Champions</h2>
        </div>
        <div>
          <p className="interactive">
            At Kidzsport, we believe that every child has the potential to be a champion,
            and our mission is to create a platform where young athletes can compete,
            learn, and grow in a safe, supportive, and inspiring environment.
            Kidzsport was founded with a simple yet powerful belief. every child deserves a
            chance to shine on the field. 
          </p>
        </div>
        <div className="d-flex gap-2 mb-2">
          <img src={ticks} alt="Childplay" className="check-icon" />
          <p className="Empowering">
            Equal opportunities for every child, regardless of skill level
          </p>
        </div>
        <div className="d-flex gap-2 mb-2">
          <img src={ticks} alt="Childplay" className="check-icon" />
          <p className="Empowering">
            Platform to test abilities and gain life skills
          </p>
        </div>
        <div className="d-flex gap-2 mb-2">
          <img src={ticks} alt="Childplay" className="check-icon" />
          <p className="Empowering">
            Teaching teamwork, discipline, and sportsmanship
          </p>
        </div>
        <div className="d-flex gap-2 mb-2">
          <img src={ticks} alt="Childplay" className="check-icon" />
          <p className="Empowering">
            Celebrating victories and embracing challenges for growth
          </p>
        </div>
        <Link to='/Aboutus'>
          <button className="Know">
            Know More <span className='img-right-arrow img-right-arrows'>
              <img src={rightarrows} alt='' />
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
}

export default About;
