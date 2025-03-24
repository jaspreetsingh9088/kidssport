import React from 'react';
import { Link } from 'react-router-dom';
import speaker1 from '../assets/images/speaker1.png';
import troffy from '../assets/images/troffy.png';
import imaginpicture from '../assets/images/imaginpicture.png';
import happycustomer from '../assets/images/happycustomer.png';
import youngboy from '../assets/images/young-boy.png';
import rightarrows from '../assets/images/rightarrows.png';

function Whychoose() {
    return (
        <section className="choose">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <h2 className="why-choose pt-3 py-2">Why Choose Us</h2>
                        </div>

                        <p className="sports-pg">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                        </p>

                        <Link to="/aboutus">
                            <button className="know more1 mt-4">Know More <span className='img-right-arrow img-right-arrows'>
                                <img src={rightarrows} alt='' /> </span>
                            </button>
                        </Link>
                        <div className='youn-boy-img-with-bat'>
                            <img src={youngboy} alt="" className="young-boy" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="border-or-one">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input">
                                            <img src={speaker1} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Organized Competitions </p>
                                            <p className="sports-pg">
                                            We bring together young athletes from different backgrounds to participate in well-structured sports tournaments, allowing them to test their skills, challenge themselves, and celebrate their achievements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-two">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input1">
                                            <img src={imaginpicture} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Multi-Sport Events </p>
                                            <p className="sports-pg">
                                            Whether your child is passionate about football, basketball, athletics, or any other sport, our platform provides a variety of competitive opportunities for every interest and skill level.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-three">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input2">
                                            <img src={troffy} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Expert Coaching & Mentorship </p>
                                            <p className="sports-pg">
                                            We work with experienced coaches and trainers who guide children in refining their techniques, building strength, and improving their game.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-four">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input3">
                                            <img src={happycustomer} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">A Safe & Encouraging Environment</p>
                                            <p className="sports-pg">
                                            We prioritize safety and inclusivity, ensuring that every child feels supported and motivated while competing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whychoose;
