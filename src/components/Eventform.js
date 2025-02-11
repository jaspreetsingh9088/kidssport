import React, { useState } from 'react';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import rightarrows from '../assets/images/rightarrows.png';

function Eventform() {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    studentName: '',
    sport: '',
    ageGroup: '',
    gradeLevel: '',
    state: '',
    city: '',
    area: ''
  });
  
  const [termsAccepted, setTermsAccepted] = useState(false); // New state for checkbox

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted); // Toggle the checkbox value
  };

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
                <div className="col-lg-4">
                  <div className="mb-4"><input className="form-control" id="registerno" name="registrationNumber" value={formData.registrationNumber} placeholder="Registration Number" type="text" onChange={handleChange} /></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><input className="form-control" id="studentname" name="studentName" value={formData.studentName} placeholder="Student Name" type="text" onChange={handleChange} /></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><select className="form-select" id="sport" name="sport" value={formData.sport} onChange={handleChange}>
                    <option>Football</option>
                    <option>Badminton</option>
                    <option>Hand ball</option>
                  </select></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><select className="form-select" id="ageGroup" name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                    <option>10 - 12</option>
                    <option>12 - 14</option>
                    <option>14 - 16</option>
                    <option>16 - 18</option>
                  </select></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4">
                    <select className="form-select" name="gradeLevel" value={formData.gradeLevel} onChange={handleChange}>
                      <option value="">Select Grade Level</option>
                      {Array.from({ length: 12 }, (_, index) => index + 1).map((grade) => (
                        <option key={grade} value={grade}>Grade {grade}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><input className="form-control" id="state" name="state" value={formData.state} placeholder="State" type="text" onChange={handleChange} /></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><input className="form-control" id="city" name="city" value={formData.city} placeholder="City" type="text" onChange={handleChange} /></div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-4"><input className="form-control" id="area" name="area" value={formData.area} placeholder="Area" type="text" onChange={handleChange} /></div>
                </div>
                {/* Terms and Conditions checkbox */}
                <div className="col-12">
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="termsAndConditions"
                      checked={termsAccepted}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="termsAndConditions">
                      I accept the <a href="/terms" target="_blank">Terms and Conditions</a>.
                    </label>
                  </div>
                </div>
              </div>
            </form>
            <div className='button-pay'>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!termsAccepted} // Disable button if terms not accepted
              >
                Make Payment
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
