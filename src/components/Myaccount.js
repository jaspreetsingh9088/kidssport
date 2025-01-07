import React, { useState } from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import myaccounticon from '../assets/images/myaccounticon.svg'
import activity from '../assets/images/activity.svg'
import subscription from '../assets/images/subscription.svg'
import setting from '../assets/images/setting.svg'
import holderimage from '../assets/images/holderimage.svg'

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
          <div className='hellomsg'>
                      <div className='heyy'>Hello!</div>
                    </div>
            <aside className="sidebar">
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
                <p>Check your recent sports activities and schedules.</p>
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
