import React from 'react';
import footballplay from '../assets/images/footballplay.png'
import girlplay from '../assets/images/girlplay.png'
import rightarrow from '../assets/images/rightarrow.png'

function Event() {
  return (
    <section className="event">
    <div className="container">
        <div className="row">
            <div className="col-lg-3">
                <div className="text-center">
                    <div>
                        <img src={girlplay} alt="" class="girl-play"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="text-center">
                    <div>
                        <p className="code">2024</p>
                    </div>
                    <div>
                        <h2 className="sports-kidz">Sports Kidz Events</h2>
                    </div>
                    <div>
                        <p className="sports-pg"> provide a fun and engaging environment where children can participate
                            in various
                            physical activities, fostering teamwork and healthy competition. These events focus on
                            inclusivity, safety, and creating positive experiences for kids of all skill levels.</p>
                    </div>
                    <div class="d-flex gap-4 justify-content-center">
                        <div className='d-flex gap-2 align-items-center'>
                        <p className="phone1">Contact Us</p>
                        <img src={rightarrow} alt="" class="right-arrow"/>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                        <p className="phone2">View More</p>
                        <img src={rightarrow} alt="" class="right-arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="text-center">
                    <div>
                        <img src={footballplay} alt="" class="girl-play"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default Event;
