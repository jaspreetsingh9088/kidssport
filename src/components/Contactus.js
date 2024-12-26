import React from 'react';

import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import contactimg from '../assets/images/contactimg.png'
import rightarrows from '../assets/images/rightarrows.png'
import childbanner from '../assets/images/childbanner.png'


function Contactus() {
    return (
  <section className='contact-us-sec'>
     <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                            Contact Us
                            </h1>
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
            {/* contact us form */}
                <div className='box-form-contact'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                    <img src={contactimg} alt="" className="contact-img" />
                    </div>
                    <div className='col-lg-6'>
                        <div className='contact-box'>
                        <h2 class="typing-effect">Let's Talk</h2>
                            <p>Reach out to us for the perfect gift that speaks from the heart!
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <label className='contact-input-name'>Name</label> */}
                                    <input type="text" className="form-control mb-4 " placeholder="Name" required/>
                                </div>
                                <div className="col-lg-6">
                                {/* <label className='contact-input-name'>Email Address</label> */}
                                    <input type="text" className="form-control" placeholder="Email Address" required/>
                                </div>
                                <div className="col-lg-12">
                                {/* <label className='contact-input-name'>Phone Number</label> */}
                                    <input type="number" className="form-control mb-4" placeholder="Phone Number" required/>
                                </div>
                                <div className="col-lg-12 mt-2">
                                {/* <label className='contact-input-name'>Comment</label> */}
                                <textarea class="form-control" rows="3" id="comment" placeholder="Comment" name="text"></textarea>
                                </div>
                                <div className="col-lg-12 mt-2">
                                <button className="Know">Submit <span className='img-right-arrow img-right-arrows'>
                                <img src={rightarrows} alt='' /> </span></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            {/* contact us form */}
  </section>

    );
}

export default Contactus;
