import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fancyicon from '../assets/images/fancyicon.png';
import linethree from '../assets/images/linethree.png';
import footballsports from '../assets/images/footballsports.png';
import cricketsports from '../assets/images/cricketsports.png';
import handball from '../assets/images/handball.png';
import racket from '../assets/images/racket.png';
import arrowtransparent from '../assets/images/arrowtransparent.png';
import ticktransparent from '../assets/images/ticktransparent.png';
import activityimg from '../assets/images/activityimg.png';
import rightarrows from '../assets/images/rightarrows.png';
import twolines from '../assets/images/twolines.png';
import programicon1 from '../assets/images/programicon1.png';
import programicon2 from '../assets/images/programicon2.png';
import programicon3 from '../assets/images/programicon3.png';
import programicon4 from '../assets/images/programicon4.png';
import listdot from '../assets/images/listdot.png';
import { Link } from "react-router-dom";

function Programmdetail() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      axios.get('https://mitdevelop.com/kidsadmin/api/events')
          .then((response) => {
              console.log('API Response:', response.data);
              console.log('Response structure:', response.data.data); // Add this log to check the exact structure of the response data

              // Check if the inner data is an array
              if (response.data && response.data.data && Array.isArray(response.data.data.data)) {
                  console.log('Setting events:', response.data.data.data); // This will show what data is set
                  setEvents(response.data.data.data);  // Set the array to state
              } else {
                  console.error('API did not return an array:', response.data.data);
              }
          })
          .catch((error) => {
              console.error('Error fetching events:', error);
          });
  }, []);

    return (
      <section className="Program-detail">
      <div className='bacground-purple'>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-4'>
                      <img src={fancyicon} alt="Fancy Icon" className="fancy-icons floating" />
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
                      <img src={linethree} alt="Line Three" className="fancy-iconss floating" />
                  </div>
              </div>
          </div>
      </div>
      <div className='sports-detail'>
          <div className='container'>
              <div className='row program-mobile-preview'>
              {events && events.length > 0 ? (
    events.map((event, index) => (
        <div className='col-lg-3 wid-program' key={index}>
            <div className='box-blog'>
                {/* Display the image if available */}
                <img
                  src={event.event_image ? `https://mitdevelop.com/kidsadmin/storage/app/public/${event.event_image}` : footballsports}
                  alt={event.event_name}
                  className="blog-images"
              />



                <div className='main-display-admin'>
                    <div className='d-flex gap-3'>
                        <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Admin: {event.user.name}</p></div>
                        <div><p className='admin-name'><span className='color-dot'><img src={listdot} alt="" className="list-dot" /></span> Date: {new Date(event.created_at).toLocaleDateString()}</p></div>
                    </div>
                </div>
                {/* Display event name */}
                <h5>{event.event_name || 'Exciting Football Showdown: The Ultimate Clash of Champions!'}</h5>
                <hr className='line-programm-sec' />
                <Link to={'/Eventform'} style={{ textDecoration: 'none' }}>
                    <button className='join-now'>
                        Join Now <span><img src={arrowtransparent} alt="Arrow" className="arrow-circle-img" /></span>
                    </button>
                </Link>
            </div>
        </div>
    ))
) : (
    <div>No events available</div>  // If no events found
)}

              </div>
          </div>
      </div>
  </section>
    );
}

export default Programmdetail;
