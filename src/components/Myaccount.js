import React, { useState } from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import myaccounticon from '../assets/images/myaccounticon.svg'
import activity from '../assets/images/activity.svg'
import subscription from '../assets/images/subscription.svg'
import setting from '../assets/images/setting.svg'
import holderimage from '../assets/images/holderimage.svg'
import cricket from '../assets/images/cricket.png'
import dateicon from "../assets/images/dateicon.png";
import time from "../assets/images/time.png";
import locationimg from "../assets/images/locationimg.png";
import football from '../assets/images/football.png'
import badminton from '../assets/images/badminton.png'
import arrowtransparent from '../assets/images/arrowtransparent.png';
function MyAccount() {
  
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab

  const handleTabClick = (tab, e) => {
    e.preventDefault(); // Prevent page reload
    setActiveTab(tab);
  };
  

  return (
    <section className="my-account">
      <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                                My Account
                            </h1>
                            <ul class="breadcrumb justify-content-center text-white align-items-center gap-1">
                                <a href="/" class="nav-link"><li>Home | </li></a>
                                <a href="/" class="nav-link" style={{ color: "#ffb06c" }}><li>My account</li></a>
                                </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                </div>
            </div>
      <div className="dashboard-container container">
        {/* Sidebar */}
        <div className="row">
          <div className="col-lg-3">
          
            <aside className="sidebar">
            <div className='hellomsg'>
                      <div className='heyy'>Hello!</div>
                    </div>
              <div className='profilebox'>
                <div className='d-flex align-items-center'>
                  <div><img src={holderimage} alt="" className="holder-image" /></div>
                  <div>
                   
                    <div className='holder-name'>
                      <p>Gurpreet Singh</p>
                    </div>
                    <div className='logout-btn'>
                      <button type="submit">Logout</button>
                    </div>
                  </div>
                </div>
              </div>
              <ul>
                <li>
                  
                  <a href="#profile" className={`tab-link ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('profile', e)}
                  ><span><img src={myaccounticon} alt="" className="dasboardicons" /></span>Profile</a>

                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#activities"
                    className={`tab-link ${activeTab === 'activities' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('activities', e)}
                  >
                    <span><img src={activity} alt="" className="dasboardicons" /></span>My Activities
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#subscriptions"
                    className={`tab-link ${activeTab === 'subscriptions' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('subscriptions', e)}
                  >
                    <span><img src={subscription} alt="" className="dasboardicons" /></span>Subscriptions
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
                <li>
                  <a
                    href="#settings"
                    className={`tab-link ${activeTab === 'settings' ? 'active' : ''}`}
                    onClick={(e) => handleTabClick('settings', e)}
                  >
                    <span><img src={setting} alt="" className="dasboardicons" /></span>Settings
                  </a>
                  {/* <hr className='dashline'></hr> */}
                </li>
              </ul>
            </aside>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <main className="main-content">
              <section
                id="profile"
                className={`tab-content ${activeTab === 'profile' ? 'active' : ''}`}
              >
                <h2>Your Profile</h2>
                <p>Update your personal details and preferences here.</p>
              </section>

              <section
                id="activities"
                className={`tab-content ${activeTab === 'activities' ? 'active' : ''}`}
              >
                <h2>My Activities</h2>
                <div className='row'>
                  
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Cricket Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={football} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Football Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='col-lg-5'>
                    <div className='main-box-activity'>
                    <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones blog-images-ones-two" />

                    </div>
                    <div className='upcoming-box'>
                    <h3>Cricket Upcoming</h3>
                    <hr></hr>
                      <div className='d-flex justify-content-between flex-wrap'>
                        <div> <p className='detail-upcoming'><span className=''><img src={dateicon} alt="" className="date-icon" /></span> 15 jan 2025</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={time} alt="" className="date-icon" /></span> 10:00 am To 12:00 pm</p></div>
                        <div> <p className='detail-upcoming'><span className=''><img src={locationimg} alt="" className="date-icon" /></span> Mohali</p></div>
                        <hr></hr>
                      </div>
                    
                     
                      <div className='detailbtn'>
                      <button className='join-now'>Join Now <span><img src={arrowtransparent} alt="" className="arrow-circle-img" /></span></button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className='col-lg-7'>
                      <div className='box-events'>
                    <div className='row'>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={football} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Upcoming events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={badminton} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Visit events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Past Events</h4>
                    </div>
                      </div>
                      <div className='col-lg-6'>
                      <div className='image-box-one'>
                    <img src={cricket} alt="" className="blog-images blog-images-ones" />
                    </div>
                    <div className='upcoming-box-one'>
                      <h4>Past events</h4>
                    </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </section>

              <section
                id="subscriptions"
                className={`tab-content ${activeTab === 'subscriptions' ? 'active' : ''}`}
              >
                <h2>Subscriptions</h2>
                <p>Manage your subscriptions and payments here.</p>
              </section>

              <section
                id="settings"
                className={`tab-content ${activeTab === 'settings' ? 'active' : ''}`}
              >
                <h2>Settings</h2>
                <p>Customize your dashboard and update account settings.</p>
              </section>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
