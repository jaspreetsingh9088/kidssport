import React, { useState } from "react";
import axios from "axios";

import fancyicon from "../assets/images/fancyicon.png";
import linethree from "../assets/images/linethree.png";
import contactimg from "../assets/images/contactimg.png";
import rightarrows from "../assets/images/rightarrows.png";
import childbanner from "../assets/images/childbanner.png";
import ticks from '../assets/images/ticks.svg';
import contactCoach from '../assets/images/contact-coach.png';
import contactParent from '../assets/images/contact-parent.png';
import locationIcon from '../assets/images/location-icon.png';

function Contactus() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [loading, setLoading] = useState(false);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage("");

        try {
            const response = await axios.post("http://your-laravel-api.com/api/contact", formData);
            setResponseMessage(response.data.message);
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch (error) {
            setResponseMessage("Failed to send message. Please try again.");
        }

        setLoading(false);
    };

    return (
        <>
         <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>Contact Us</h1>
                            <ul className='breadcrumb justify-content-center text-white align-items-center gap-1'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <a href='/' className='nav-link' style={{ color: "#ffb06c" }}><li>Contact us</li></a>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                </div>
            </div>
        <section class="get-involved">
            <div class="container">
                <div class="row align-items-center">
                {/* <div class="text-center">
                            <h2 class="sports-get">Get Involved</h2>
                            <p class="invovled-pg">Join the Kidzsport Community</p>
                            <p class="ivovled-pg">We believe that the power of sports is best realized when the community comes together. Whether you’re <br></br>a parent, coach, or volunteer, there’s a place for you at Kidzsport.
                            </p>
                           
                        </div> */}
                    <div class="col-lg-6">
                        <h4 class="for-parent">For Parents & Schools:
                        </h4>
                        <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Enroll Your Child: Give them a chance to compete and grow.
              </p>

            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Partnership Opportunities: Schools and community groups can collaborate with us for inter-school competitions.

              </p>
              
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Stay Informed: Subscribe to our newsletter for the latest news and updates.

              </p>
              
            </div>
                    </div>
                    <div class="col-lg-6">

        <div>
           
            <img src={contactParent} alt="Childplay" className="child-play" />
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6">
                <img src={contactCoach} alt="Childplay" className="child-play" />
                    </div>
                 <div class="col-lg-6">
                        <h4 class="for-parent">For Coaches & Volunteers:

                        </h4>
                        <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Coaching Opportunities: Join our network and share your expertise.

              </p>

            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Volunteer Programs: Help us organize events and support our young athletes.


              </p>
              
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticks} alt="Childplay" className="check-icon" />
              <p className="Empowering">Community Engagement: Be part of a movement that makes a positive impact in children’s lives.


              </p>
              
            </div>
                    </div>
                    <div class="text-center"> 
                    <p class="together-pg">Together, we can build a brighter future for our young athletes. Get involved today!
                    </p>
                    </div>
                    
            </div>
            </div>
        </section>


        <section class="contact-section">
  <div class="container">
    <h1>We’d Love to Hear from You
    </h1>
    <p>For more information about our events, training programs, or partnership opportunities, please reach out. Our team is here to help answer your questions and guide you through the registration process.</p>

    <div class="contact-options">
      <div class="contact-box-1">
        <img src="https://img.icons8.com/ios-filled/50/000000/new-post.png" alt="Email Icon" />
        
        <p>Email: info@kidzsport.com
        </p>
      </div>

      <div class="contact-box-1">
        <img  class="location-icon" src={locationIcon} alt="Chat Icon" />
       
        <p>Location: [Your City, Country]
        </p>
      </div>

      <div class="contact-box-1">
        <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" alt="Call Icon" />
       
        <p>Phone: +123 456 7890
        </p>
      </div>

      
    </div>
  </div>
</section>


         <section className='contact-us-sec'>
            <div className='box-form-contact'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img src={contactimg} alt="" className="contact-img" />
                        </div>
                        <div className='col-lg-6'>
                            <div className='contact-box'>
                                <h2 className="typing-effect">Let's Talk</h2>
                                <p>Reach out to us for the perfect gift that speaks from the heart!</p>
                                {responseMessage && <p className="response-message">{responseMessage}</p>}
                                <form onSubmit={handleSubmit}>
                                    <input type="text" name="name" className="form-control mb-4" placeholder="Name" required value={formData.name} onChange={handleChange} />
                                    <input type="email" name="email" className="form-control" placeholder="Email Address" required value={formData.email} onChange={handleChange} />
                                    <input type="number" name="phone" className="form-control mb-4" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                                    <textarea name="message" className="form-control" rows="3" placeholder="Comment" required value={formData.message} onChange={handleChange}></textarea>
                                    <button type="submit" className="Know" disabled={loading}>
                                        {loading ? "Submitting..." : "Submit"} <span className='img-right-arrow img-right-arrows'>
                                            <img src={rightarrows} alt='' />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contactus;
