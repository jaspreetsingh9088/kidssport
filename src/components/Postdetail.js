import React from "react";
import groupPlay from "../assets/images/groupplay.png";
import girlimage from "../assets/images/girlimage.png";
import dateicon from "../assets/images/dateicon.png";
import eyeicon from "../assets/images/eyeicon.png";
import pumpkin from "../assets/images/pumpkin.png";
import tickgreen from "../assets/images/tickgreen.png";
import callcircleicon from '../assets/images/callcircleicon.png'
import mailcircleicon from '../assets/images/mailcircleicon.png'
import loactioncircleicon from '../assets/images/loactioncircleicon.png'
import ludoplay from '../assets/images/ludoplay.png'
import blocks from '../assets/images/blocks.png'
import listdot from '../assets/images/listdot.png'
import Search from '../assets/images/search.png'
const Postdetail = () => {
    return (
        <section className="post-detail">
            <div className="container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-lg-8">
                        <div className="post-background-color">
                            <div>
                                <img src={groupPlay} alt="Group play illustration" className="group-play-child" />
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <img src={girlimage} alt="Admin avatar" className="girl-image" />
                                <p className="admin-bg">By Admin</p>
                                <img src={dateicon} alt="Date icon" className="clarity" />
                                <p className="admin-bg">Date: 22-11-2024</p>
                                <img src={eyeicon} alt="Eye icon" className="clarity1" />
                                <p className="admin-bg">6 Read</p>
                            </div>
                            <div>
                                <h1 className="top">
                                    Top 5 Benefits Bootcamp Building Confidence and Character
                                </h1>
                            </div>
                            <div>
                                <p className="post-pg">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices Maecenas
                                </p>
                            </div>
                            <div>
                                <img src={pumpkin} alt="Pumpkin illustration" className="pumpkin" />
                            </div>
                            <div>
                                <h2 className="Experence">Best Live Experience</h2>
                            </div>
                            <div>
                                <p className="lorem-ipsm-pg">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                    hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices
                                    mauris. Maecenas vitae mattis tellus.
                                </p>
                            </div>
                            {/* Repeated Features */}
                             
                            <div className="features-imp">
                            <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="Empowering-paragraph">Empowering kids through dynamic activities</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="Empowering-paragraph">Dedicated team fosters a inclusive environment</p>
                                </div>
                            </div>
                            <div className="d-flex gap-2">
                                <div>
                                    <img src={tickgreen} alt="Tick icon" className="tickgreen-image" />
                                </div>
                                <div>
                                    <p className="Empowering-paragraph">Join us for a transformative experience

                                    </p>
                                </div>
                            </div>
</div>
                            <div>
                                <p className="lorem-ipsm-pg">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                    hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-4">
                        <div className="post bg-back-color">
                            {/* Search */}
                            <form class="d-flex">
                            <input style={{ borderRight: "0px" }}className="form-control form-control-search" type="search"placeholder="Search"aria-label="Search"/>
                              <button class="search-button" type="submit"><img src={Search} alt="Eye icon" className="search-icon-one" /></button>
                             </form>
                            <h4 class="post">Leave a Comment</h4>
                            <p className="email-address">
                                Your email address will not be published. Required fields are marked *
                            </p>
                            {/* Comment Form */}
                            <form>
                            <div className="row">
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" placeholder="Name" required/>
                                </div>
                                <div className="col-lg-6">
                                    <input type="text" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="col-lg-12 mt-3">
                                    <textarea class="form-control" rows="3" id="comment" name="text" placeholder="Comment"></textarea>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="submit-button">Submit Now</button>
                            </div>
                            </form>
                            
                            {/* Latest Post */}
                            <div>
                                <h4 className="post">Latest post</h4>
                            </div>
                            <div className="d-flex gap-3 mb-3">
                            <div><img src={ludoplay} alt="" className="img-fluid" /></div>
                          
                                <div>
                                    <p className="post-paragraph">
                                        Building Lifelong Friendships and Camaraderie
                                    </p>
                                    <div className="d-inline-flex align-items-center gap-2">
                                        <div>
                                        <img src={listdot} alt="Group play illustration" className="list-dot-img" />
                                        </div>
                                        <div>
                                        <p className="post-admin">By Admin</p>
                                        </div>
                                       
                                    </div>
                                    <div className="d-inline-flex align-items-center gap-2 read-list">
                                        <div>
                                        <img src={listdot} alt="Group play illustration" className="list-dot-img" />
                                        </div>
                                        <div>
                                        <p className="post-admin">6 Read</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-3 mb-3">
                            <div><img src={blocks} alt="" className="img-fluid" /></div>
                          
                                <div>
                                    <p className="post-paragraph">
                                        Building Lifelong Friendships and Camaraderie
                                    </p>
                                    <div className="d-inline-flex align-items-center gap-2">
                                        <div>
                                        <img src={listdot} alt="Group play illustration" className="list-dot-img" />
                                        </div>
                                        <div>
                                        <p className="post-admin">By Admin</p>
                                        </div>
                                       
                                    </div>
                                    <div className="d-inline-flex align-items-center gap-2 read-list">
                                        <div>
                                        <img src={listdot} alt="Group play illustration" className="list-dot-img" />
                                        </div>
                                        <div>
                                        <p className="post-admin">6 Read</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <hr className="orange-lines"></hr>
                            {/* Contact Information */}
                            <div className='d-flex gap-3 align-items-center mb-4 gap-mobile-view-form'>
                    <div><img src={callcircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-center mb-4 gap-mobile-view-form'>
                    <div><img src={mailcircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info pp-color'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-center  gap-mobile-view-form'>
                    <div><img src={loactioncircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info gr-color'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
                        </div>
                    </div>
                    {/* End of Right Section */}
                </div>
                {/* End of Row */}
            </div>
            {/* End of Container */}
        </section>
    );
};

export default Postdetail;
