import React from "react";
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
const SafetySecurity = () => {
  const headingColor = "#002D45";

  return (
    <section className="safety-security">
       <div className='bacground-purple'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={fancyicon} alt="" className="fancy-icons floating" />
                </div>
                <div className='col-lg-4'>
                    <h1 className='heading-main text-center'>Safety and Security</h1>
                    <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                        <a href="/" className="nav-link"><li>Home | </li></a>
                        <a href="/" className="nav-link" style={{ color: "#ffb06c" }}><li>Safety and Security</li></a>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <img src={linethree} alt="" className="fancy-iconss floating" />
                </div>
            </div>
        </div>
    </div>
    <section className="safety-rules text-center">
    {/* <p class="about safely-p">At KidzSports</p> */}
    <h2 className="Engaging">
          we prioritize the safety and well-being <br></br>of every child
        </h2>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
            <div class="stand-box stand-box-one">
              <h4>Comprehensive Child Supervision</h4>
              <p> Our trained staff and coaches monitor children closely during all activities to prevent accidents and ensure they stay engaged in a positive manner.</p>
            </div>
            </div>
            <div className="col-lg-4">
            <div class="stand-box stand-box-one">
            <h4>First Aid Readiness</h4>
            <p> We have certified first aid responders on-site at every event, equipped with medical kits to handle minor injuries and emergencies promptly.</p>
            </div>
            </div>
            <div className="col-lg-4">
            <div class="stand-box stand-box-one">
            <h4>Secure Venues</h4>
            <p> Our event locations are carefully selected to provide controlled
              access, preventing unauthorized entry and ensuring children play in a
              safe space.</p>
            </div>
            </div>
            <div className="col-lg-4 mt-4 mb-5">
            <div class="stand-box stand-box-one">
            <h4>Emergency Preparedness</h4>
            <p> We have emergency protocols in place, including direct communication
              channels with local medical facilities and law enforcement, if
              needed.</p>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mb-5">
            <div class="stand-box stand-box-one">
            <h4>Parental Notification System</h4>
            <p> In case of an emergency, parents are promptly informed, and immediate
            action is taken to ensure their child’s safety and well-being.</p>
            </div>
            </div>
          </div>
        </div>
    </section>
  
    </section>
  );
};

export default SafetySecurity;
