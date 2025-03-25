import React from "react";
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
const ExploreWorld = () => {
  const headingColor = "#002D45";

  return (
    <section className="explore-world">
    
    <section className="safety-rules text-center">
    <h2 className="Engaging">
             Explore Are World
        </h2>
    {/* <p class="about safely-p">At KidzSports</p> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3">
            <div class="stand-box-three">
              <h4>Organized Competitions</h4>
              <p> Discover a range of sports events designed to challenge and inspire.
              </p>
            </div>
            </div>
            <div className="col-lg-3">
            <div class="stand-box-three">
            <h4>Expert Coaching</h4>
            <p> Access top-notch training and mentorship. 
            </p>
            </div>
            </div>
            <div className="col-lg-3">
            <div class="stand-box-three">
            <h4>Upcoming Events</h4>
            <p> Stay in the loop with our event calendar.
            </p>
            </div>
            </div>
            <div className="col-lg-3 ">
            <div class="stand-box-three">
            <h4>Get Involved</h4>
            <p> Join our vibrant community of parents, coaches, and volunteers.
            </p>
              </div>
            </div>
       
          </div>
        </div>
    </section>
  
    </section>
  );
};

export default ExploreWorld;
