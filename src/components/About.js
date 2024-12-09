import React from 'react';
import childplay from '../assets/images/childplay.png';
import ticks from '../assets/images/ticks.svg';
import circleiconframe from '../assets/images/circleiconframe.png';

function About() {
  return (
    <section className="about kidzsport-about">
      <div className="container">
        <div className="row align-items-center row-reverse">
          <div className="col-lg-6">
           
            <img src={childplay} alt="Childplay" className="child-play" />
          </div>
          <div class="col-lg-6">
             <div className='circle-framee'>
            <img src={circleiconframe} alt='' className='circle-frame'/>
            </div>
                    <div>
                        <p class="about">ABOUT KIDZSPORT</p>
                    </div>
                    <div>
                        <h2 class="Engaging">Engaging kids through fun</h2>
                    </div>
                    <div>
                        <p class="interactive">interactive sports lessons and events, our company promotes healthy
                            habits and teamwork. Join
                            us on social media for tips, challenges, and exciting giveaways!</p>
                    </div>
                    <div class="d-flex gap-2 mb-2">
                        <img src={ticks} alt="Childplay" className="check-icon" />
                        <p class="Empowering">Empowering kids through dynamic activities</p>
                    </div>
                    <div class="d-flex gap-2 mb-2">
                        <img src={ticks} alt="Childplay" className="check-icon" />
                        <p class="Empowering">Dedicated team fosters a inclusive environment</p>
                    </div>
                    <div class="d-flex gap-2 mb-2">
                        <img src={ticks} alt="Childplay" className="check-icon" />
                        <p class="Empowering">Join us for a transformative experience</p>
                    </div>
                    <button class="Know">Know More</button>
                </div>
        </div>
      </div>
    </section>
  );
}

export default About;
