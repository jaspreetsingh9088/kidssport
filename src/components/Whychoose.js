import React from 'react';
import { Link } from 'react-router-dom';
import speaker1 from '../assets/images/speaker1.png';
import troffy from '../assets/images/trophy-icon.png';
import multiSport from '../assets/images/multiSport-icon.png';
import safeIcon from '../assets/images/safe-icon.png';
import coachIcon from '../assets/images/coach-icon.png';
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

                        <p className="sports-pg sports-pg-onr">
                        we believe that competition fuels growth and success, and our mission is to provide a platform where young talents can shine, and every child gets the chance to experience the joy of sports. 
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
                                        <img src={troffy} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Organized Competitions </p>
                                            <p className="sports-pg">
                                            We bring together young athletes from different backgrounds to participate in well-structured sports tournaments.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-two">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input1">
                                            <img src={multiSport} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Multi-Sport Events </p>
                                            <p className="sports-pg">
                                            Whether your child is passionate about football, or any other sport, our platform provides a variety of competitive opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-three">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input2">
                                            <img src={coachIcon} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">Expert Coaching & Mentorship </p>
                                            <p className="sports-pg">
                                            We work with experienced trainers who guide children in refining their techniques, and improving their game.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-four">
                                    <div className="d-flex gap-3 align-items-start">
                                        <div className="choose-input3">
                                            <img src={safeIcon} alt="" className="emoji-content-img" />
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
