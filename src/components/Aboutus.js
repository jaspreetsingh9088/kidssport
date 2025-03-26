import React from 'react';
import About from "./About";
import Register from "./Register";
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import volumone from '../assets/images/volumone.png'
import trophystar from '../assets/images/trophystar.png'
import galleryimg from '../assets/images/galleryimg.png'
import smileabout from '../assets/images/smileabout.png'
import twoboys from '../assets/images/twoboys.png'
import circleiconframe from '../assets/images/circleiconframe.png';
import madam from '../assets/images/madam.png';
import sirimg from '../assets/images/sirimg.png';
import twolines from '../assets/images/twolines.png'
import fairplay from '../assets/images/fairplay.png'
import puzzle from '../assets/images/puzzle.png'
import creativethinking from '../assets/images/creativethinking.png'
import twoboysone from '../assets/images/twoboysone.png'



function Aboutus() {
    return (
<>
<section className="about-us-section">
    <div className='bacground-purple'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={fancyicon} alt="" className="fancy-icons floating" />
                </div>
                <div className='col-lg-4'>
                    <h1 className='heading-main text-center'>About Us</h1>
                    <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                        <a href="/" className="nav-link"><li>Home | </li></a>
                        <a href="/" className="nav-link" style={{ color: "#ffb06c" }}><li>About Us</li></a>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <img src={linethree} alt="" className="fancy-iconss floating" />
                </div>
            </div>
        </div>
    </div>
    <About />
    <style>
        {`.Know { display: none; }`}
    </style>
</section>


        <div className="container bg-background-gradient">
  <div className="row text-center">
    <div className="col-lg-3">
      <div>
        <img src={volumone} alt="Volum One" className="volum" />
      </div>
      <div>
        <p className="sound">2+</p>
      </div>
      <div>
        <p className="Staff">Staff-Camper</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={trophystar} alt="Trophy Star" className="volum" />
      </div>
      <div>
        <p className="sound">08+</p>
      </div>
      <div>
        <p className="Staff">Programs Designed</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={galleryimg} alt="Gallery Image" className="volum" />
      </div>
      <div>
        <p className="sound">13+</p>
      </div>
      <div>
        <p className="Staff">Programs Designed</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={smileabout} alt="Smile" className="volum" />
      </div>
      <div>
        <p className="sound">100%</p>
      </div>
      <div>
        <p className="Staff">Our Commitment</p>
      </div>
    </div>
  </div>
</div>


<section className="new-genration">
    <div className="container bg-color-gradient">
        <div className="row">
            <div className="col-lg-6">
            <div className='circle-framee'>
              <img src={circleiconframe} alt='' className='circle-frame floating'/>
            </div>
            <div>
              <p className="about">Our Vision</p>
            </div>
            <div>
              <h2 className="Engaging">Empowering the Next Generation</h2>
              <p className='interactive'>To inspire the next generation of athletes by providing top-tier sports competitions, expert coaching, and a pathway to excellence.</p>
            </div>
                <div className="background-border color mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">01</h5>
                        <div>
                            <h5 className="health">Encouraging an Active Lifestyle for Kids</h5>
                            <p className="vision-pg">Promote an <b>active lifestyle</b> among children</p>
                        </div>
                    </div>
                </div>
                <div className="background-border mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">02</h5>
                        <div>
                            <h5 className="health">Providing Competitive Platforms for Young Athletes</h5>
                            <p className="vision-pg">Offer <b>competitive platforms</b> for young athletes</p>
                        </div>
                    </div>
                </div>
                <div className="background-border mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">03</h5>
                        <div>
                            <h5 className="health">Building Character and Skills</h5>
                            <p className="vision-pg">Develop <b>teamwork, discipline, and confidence</b></p>
                        </div>
                    </div>
                </div>
                <div className="background-border">
                    <div className="d-flex gap-3">
                        <h5 className="number">04</h5>
                        <div>
                            <h5 className="health">Safe and Inclusive Space</h5>
                            <p className="vision-pg">Ensure a <b>safe and inclusive environment</b> for all</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div>
                <img src={twoboys} alt="Smile" className="boys-together" />
                </div>
                <div className='circle-framee'>
              <img src={circleiconframe} alt='' className='circle-frame circle-frame-us floating'/>
            </div>
            </div>
        </div>
    </div>
    {/* our mission */}
    <div className='bg-color-white'>
    <div className="container bg-color-gradient ">
        <div className="row align-items-center">
        <div className="col-lg-6">
                <div>
                <img src={twoboysone} alt="Smile" className="boys-together boys-together-one " />
                </div>
                <div className='circle-framee'>
              <img src={circleiconframe} alt='' className='circle-frame circle-frame-us floating'/>
            </div>
            </div>
            <div className="col-lg-6">
            <div className='circle-framee'>
             
            </div>
            <div>
              <p className="about">Our Mission</p>
            </div>
            <div>
              <h2 className="Engaging Engaging-about">At Kidzsport, our mission</h2>
              <p className='interactive'>Is to <b>promote a love for sports among children by organizing structured, engaging, and well-managed competitions</b> that focus on more than just winning. We aim to:</p>
            </div>
                <div className="background-border color mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">01</h5>
                        <div>
                            <h5 className="health">Provide a Safe & Inclusive Platform </h5>
                            <p className="vision-pg">Ensuring that all children, regardless of background or experience, have access to professional-level competitions.</p>
                        </div>
                    </div>
                </div>
                <div className="background-border mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">02</h5>
                        <div>
                            <h5 className="health">Encourage Teamwork & Fair Play </h5>
                            <p className="vision-pg">Instilling core values that help kids grow into responsible and respectful individuals.</p>
                        </div>
                    </div>
                </div>
                <div className="background-border mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">03</h5>
                        <div>
                            <h5 className="health">Foster Confidence & Personal Growth </h5>
                            <p className="vision-pg">Helping young athletes push their limits, celebrate their progress, and build self-esteem.</p>
                        </div>
                    </div>
                </div>
                <div className="background-border">
                    <div className="d-flex gap-3">
                        <h5 className="number">04</h5>
                        <div>
                            <h5 className="health">Promote Physical & Mental Well-Being</h5>
                            <p className="vision-pg">Encouraging an active lifestyle that strengthens both the body and mind.</p>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    </div>
</section>
<section className="team westand-for">
    <h2 className="text-center">
    What We Stand For
    </h2>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4'>
          <div className='stand-box'>
            <div className='d-flex gap-3 align-items-center'>
              <div><img src={fairplay} alt="Volum One" className="fairplay-icon" /></div>
              <div> <h4>Integrity & Fair Play</h4></div>
            </div>
            <p className='interactive'>Every competition is organized with the highest standards of fairness.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='stand-box'>
          <div className='d-flex gap-3 align-items-center'>
              <div><img src={puzzle} alt="Volum One" className="fairplay-icon" /></div>
              <div> <h4>Inclusivity & Safety</h4></div>
            </div>
            
            <p className='interactive'>We ensure a secure environment where all children can participate and thrive.</p>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='stand-box'>
          <div className='d-flex gap-3 align-items-center'>
              <div><img src={creativethinking} alt="Volum One" className="fairplay-icon" /></div>
              <div> <h4>Skill & Character Development</h4></div>
            </div>
            
            <p className='interactive'>Our events are about more than just sports—they’re about building confidence and life-long friendships.</p>
          </div>
        </div>
      </div>
    </div>
    
</section>
{/* <section className="team">
<p className="text-center Our-programs-color">Our programs</p>
    <div className='two-lines-img'>
    <img src={twolines} alt="" className="two-lines-img-one" />
    </div>
    <h2 className="text-center">
    Meet Our Dedicated Team
    </h2>
    <div className="container">
        <div className="row text-center">
            <div className="col-lg-4">
                <div class="worker-image-border"> 
                <img src={sirimg} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
            <div className="col-lg-4">
                <div class="worker-image-border">
                <img src={madam} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
            <div className="col-lg-4">
                <div class="worker-image-border"> 
                <img src={sirimg} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
        </div>
    </div>
</section> */}
{/* <Register /> */}

        </>

    );
}

export default Aboutus;
