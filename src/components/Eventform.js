import React from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import rightarrows from '../assets/images/rightarrows.png';

function Eventform() {
  return (
    <section className="event-form-register">
        {/* breadcrumb */}
        <div className='bacground-purple'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img src={fancyicon} alt="" className="fancy-icons floating" />
                        </div>
                        <div className='col-lg-4'>
                            <h1 className='heading-main text-center'>
                            Registration
                            </h1>
                            <ul className='breadcrumb justify-content-center text-white align-items-center gap-1'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <a href='/' className='nav-link' style={{ color: "#ffb06c" }}><li>Registration</li></a>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                    
                </div>
                
            </div>
        {/* breadcrumb */}
        <div className='container'>
        <div className='event-form-start'>
            <div className='row'>
                <div className='heading-form-reg'>
                <h2>Register Event Form</h2>
                </div>
                <form>
                    <div className='row'>
                    <div class="col-lg-4">
                        <div class="mb-4"><input class="form-control" id="registerno" placeholder="Registeration Number" type="text"/></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4"><input class="form-control" id="studentname" placeholder="Student Name" type="text"/></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4"><select class="form-select" id="sel1" name="sellist1" >
                           <option>Football</option>
                           <option>Badminton</option>
                           <option>Hand ball</option> 
                         </select></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4"> <select class="form-select" id="sel1" name="sellist1" >
                           <option>10 - 12</option>
                           <option>12 - 14</option>
                           <option>14 - 16</option> 
                         </select>  </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="mb-4"><input class="form-control" id="grade" placeholder="Grade Level (e.g., Kindergarten, 1st Grade, etc.)" type="text"/></div>
                    </div>
                  
                    <div class="col-lg-4">
                        <div class="mb-4"><input class="form-control" id="state" placeholder="State" type="text"/></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4"><input class="form-control" id="city" placeholder="City" type="text"/></div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4"><input class="form-control" id="area" placeholder="Area" type="text"/></div>
                    </div>
                    
                    </div>
                </form>
                <div className='button-pay'>
                    <button type="button" className="btn btn-primary">Make Payment
                            <span className='img-right-arrow'>
                                <img src={rightarrows} alt='' />
                            </span>
                        </button>
                        </div>
            </div>
        </div>
        </div>
    </section>

  );
}

export default Eventform;
