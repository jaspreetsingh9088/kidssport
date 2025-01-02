import React from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import footballsports from '../assets/images/footballsports.png'
import cricketsports from '../assets/images/cricketsports.png'
import handball from '../assets/images/handball.png'
import racket from '../assets/images/racket.png'
import arrowtransparent from '../assets/images/arrowtransparent.png'
import ticktransparent from '../assets/images/ticktransparent.png'
import activityimg from '../assets/images/activityimg.png'
import rightarrows from '../assets/images/rightarrows.png';
import twolines from '../assets/images/twolines.png'
import programicon1 from '../assets/images/programicon1.png'
import programicon2 from '../assets/images/programicon2.png'
import programicon3 from '../assets/images/programicon3.png'
import programicon4 from '../assets/images/programicon4.png'


import listdot from '../assets/images/listdot.png'
import { Link } from "react-router-dom";

function Programmdetail() {
  return (
    <section className="Program-detail">
  <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                            Program Detail
                            </h1>
                            <ul className='breadcrumb justify-content-center text-white align-items-center gap-1'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <a href='/' className='nav-link' style={{ color: "#ffb06c" }}><li>Program detail</li></a>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className='sports-detail'>
            <div className='container'>
            <div className='row program-mobile-preview'>
            <div className='col-lg-3 wid-program'>
            
              <div className='box-blog'>
              <img src={footballsports} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting Football Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
              <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program'>
              <div className='box-blog'>
              <img src={cricketsports} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting Cricket Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
              <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program'>
              <div className='box-blog'>
              <img src={handball} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting handball Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
              <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program'>
              <div className='box-blog'>
              <img src={racket } alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting badminton Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
               <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program mt-4'>
            
              <div className='box-blog'>
              <img src={footballsports} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting Football Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
               <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program mt-4'>
              <div className='box-blog'>
              <img src={cricketsports} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting Cricket Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
               <Link to={'/Eventform'} style={{ textDecoration: 'none' }}><button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button></Link>
              </div>
            </div>
            <div className='col-lg-3 wid-program mt-4'>
              <div className='box-blog'>
              <img src={handball} alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting handball Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
              <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
              </div>
            </div>
            <div className='col-lg-3 wid-program mt-4'>
              <div className='box-blog'>
              <img src={racket } alt="" className="blog-images" />
              <div className='main-display-admin'>
                <div className='d-flex gap-3'>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin</p></div>
                <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date : 22-11-2024</p></div>
                </div>
              </div>
              <h5>Exciting badminton Showdown: 
              The Ultimate Clash of Champions!</h5>
              <hr className='line-programm-sec'></hr>
              <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
              </div>
            </div>
            </div>
            </div>
            </div>
            <div className='activit-bg'>
            <div className="container">
        <div className="row  row-reverse mb-5">
          <div className="col-lg-6">
            <div className='circle-framee'>
              {/* <img src={circleiconframe} alt='' className='circle-frame floating'/> */}
            </div>
            <div>
              <h2 className="Engaging">Activity Includes</h2>
            </div>
            <div>
              <p className="interactive">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              </p>
            </div>
            
            <div className='row activity-wid'>
              <div className='col-lg-6'>
              <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Play and Fun</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Team Challenges</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Jumbo Games</p>
            </div>
              </div>
              <div className='col-lg-6'>
              <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Play and Fun</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Team Challenges</p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <img src={ticktransparent} alt="Childplay" className="check-icons" />
              <p className="Empowering">Jumbo Games</p>
            </div>
              </div>
            </div>
            <button className="Know btn-activity">Know More <span className='img-right-arrow img-right-arrows'>
            <img src={rightarrows} alt='' /> </span></button>
          </div>
          <div className="col-lg-6">
            <img src={activityimg} alt="Childplay" className="child-plays" />
          </div>
        </div>
      </div>
      </div>
      <div className='why-choose-program'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-lg-3'>
             <div className='box-programme'>
              <div className='image-pro'>
               <img src={programicon1} alt=" " className='icon-events'/>
              </div>
              <h4>Age Group</h4>
              <p>Staff-Camper</p>
             </div>
          </div>
          <div className='col-lg-3'>
             <div className='box-programme'>
              <div className='image-pro'>
               <img src={programicon2} alt=" " className='icon-events'/>
              </div>
              <h4>Duration</h4>
              <p>Prestigious Award</p>
             </div>
          </div>
          <div className='col-lg-3'>
             <div className='box-programme'>
              <div className='image-pro'>
               <img src={programicon3} alt=" " className='icon-events'/>
              </div>
              <h4>Location</h4>
              <p>local park, nature</p>
             </div>
          </div>
          <div className='col-lg-3'>
             <div className='box-programme'>
              <div className='image-pro'>
               <img src={programicon4} alt=" " className='icon-events'/>
              </div>
              <h4>Dates</h4>
              <p>Our Commitment</p>
             </div>
          </div>
        </div>
        </div>
      </div>
      <div className='container'>
           {/* activity time */}
       <div className='activity-timing'>
       <p className="text-center Our-programs-color">PROGRAM ACTIVITY</p>
    <div className='two-lines-img'>
    <img src={twolines} alt="" className="two-lines-img-one" />
    </div>
    <h2 className="text-center">
    Complete Day Enriched<br/> with Fun & Play
    </h2>
    <div className='row mt-5 mb-5'>
      <div className='col-lg-3'>
      <div class="activity-table">
    <div class="activity-header">Hour</div>
    <div class="activity-item">8:00 AM</div>
    <div class="activity-item">8:30 AM</div>
    <div class="activity-item">9:00 AM</div>
    <div class="activity-item">9:30 AM</div>
    <div class="activity-item">10:00 AM</div>
  </div>
      </div>
      <div className='col-lg-3'>
      <div class="activity-table">
    <div class="activity-header">Activity</div>
    <div class="activity-item">Free Play</div>
    <div class="activity-item">Sand Pit</div>
    <div class="activity-item">Tattoo Corner</div>
    <div class="activity-item">Creativity Corner</div>
    <div class="activity-item">Food Time</div>
  </div>
      </div>
      <div className='col-lg-3'>

      <div class="activity-table">
    <div class="activity-header">Hour</div>
    <div class="activity-item">10:30 AM</div>
    <div class="activity-item">11:00 AM</div>
    <div class="activity-item">11:30 AM</div>
    <div class="activity-item">12:00 PM</div>
    <div class="activity-item">12:30 PM</div>
  </div>
      </div>
      <div className='col-lg-3'>
      <div class="activity-table">
    <div class="activity-header">Activity</div>
    <div class="activity-item">Free Play</div>
    <div class="activity-item">Sand Pit</div>
    <div class="activity-item">Tattoo Corner</div>
    <div class="activity-item">Creativity Corner</div>
    <div class="activity-item">Food Time</div>
  </div>
      </div>
    </div>
    
    </div>
       {/* activity time */}
      </div>

     
</section>

  );
}

export default Programmdetail;
