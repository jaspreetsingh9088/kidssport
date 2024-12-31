import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import rightarrows from '../assets/images/rightarrows.png';
import listdot from '../assets/images/listdot.png'
import leftarrows from '../assets/images/leftarrows.png'
function Stepform() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        if (currentStep === 4) {
            handleRegister(); // Handle the registration action
        } else {
            setCurrentStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
        }
    };

    const handlePrevStep = () => {
        setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    };

    const handleRegister = () => {
        // Logic for handling the registration (submit or show a confirmation)
        alert('Registration Successful!');
    };


    return (
        <section className="register-form-steps">
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
                            <ul class="breadcrumb justify-content-center text-white align-items-center gap-1">
                                <a href="/" class="nav-link"><li>Home | </li></a>
                                <a href="/" class="nav-link" style={{ color: "#ffb06c" }}><li>Registration</li></a>
                                </ul>
                        </div>
                        <div className='col-lg-4'>
                            <img src={linethree} alt="" className="fancy-iconss floating" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className='box-step-form'>
                    <div className="step-indicator">
                        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>1. Student Information</div>
                        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>2. Parent/Guardian Information</div>
                        <div className={`step ${currentStep === 3 ? 'active' : ''}`}>3. Emergency Contact Information</div>
                        <div className={`step ${currentStep === 4 ? 'active' : ''}`}>4. Medical Information</div>
                    </div>

                    <form id="stepForm" className='stepform-fill'>
                        <div className="form-step" style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                            {/* Step 1 */}
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="middleName" placeholder="Middle Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                    <input type="date" className="form-control form-date" id="date" name="date"/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <select class="form-select" id="sel2" name="sellist2"><option>Gender</option><option>Male</option><option>Female</option></select>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="GradeLevel" placeholder="Grade Level (e.g., Kindergarten, 1st Grade, etc.)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Streetaddress" placeholder="Street Address" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="City" placeholder="City" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Stateprovince" placeholder="State/Province" />
                                    </div>
                                </div>
                                <div className='col-lg-2'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Zipcode" placeholder="Zip/Postal Code" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="School" placeholder="School" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Nationality" placeholder="Nationality" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Language" placeholder="Language(s) Spoken at Home" />
                                    </div>
                                </div>
                                <div className='col-lg-4 adhar-field'>
                                    <div className="mb-4 last-feild-col">
                                    <label htmlFor="firstName" className="form-label"><span className='color-dot'><img src={listdot} alt="" className="list-dot list-dot-two" /></span> Need to see if we verify it with phone numer</label>
                                        <input type="text" className="form-control" id="Adharcard" placeholder="Addhar Card Number" />
                                    </div>
                                </div>
                                <div className='col-lg-4 adhar-field'>
                                    <div className="mb-4 last-feild-col">
                                    <label htmlFor="firstName" className="form-label"><span className='color-dot'><img src={listdot} alt="" className="list-dot list-dot-two" /></span> Adhar Card Front</label>
                                    <div className='span-choose'>
                                    <span className='choose-file-span'>Choose File </span>
                                    </div>
                                    <input type="file" className="form-controls" id="file-input" name="file-input"/>
                                    </div>
                                </div>
                                <div className='col-lg-4 adhar-field'>
                                    <div className="mb-4 last-feild-col">
                                    <label htmlFor="firstName" className="form-label"><span className='color-dot'><img src={listdot} alt="" className="list-dot list-dot-two" /></span> Adhar Card Back</label>
                                    <div className='span-choose'>
                                    <span className='choose-file-span'>Choose File </span>
                                    </div>
                                    <input type="file" className="form-controls" id="file-input" name="file-input"/>
                                    </div>
                                </div>
                            </div>



                            {/* Other inputs... */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                            {/* Step 2 */}
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="firstName" placeholder="Primary Guardian’s Full Name" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="parents" placeholder="Relationship to Student (e.g., mother, father, guardian)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="number" className="form-control" id="mobile" placeholder="Phone Number(s) (Mobile, Home)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="email" className="form-control" id="email" placeholder="Email Address" />
                                    </div>
                                </div>
                            </div>
                            {/* More inputs for Step 2 */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                            {/* Step 3 */}
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="firstName" placeholder="Contact Person’s Full Name" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="parents" placeholder="Relationship to Student" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="number" className="form-control" id="mobile" placeholder="Phone Number(s)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="email" className="form-control" id="email" placeholder="Alternative Contact Number" />
                                    </div>
                                </div>
                            </div>
                            {/* More inputs for Step 3 */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                            {/* Step 4 */}
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="medicalinfo" placeholder="Known Medical Conditions (e.g., allergies, asthma)" />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="medication" placeholder="Medications (if any)" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="doctorname" placeholder="Doctor’s Name" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="mobile" placeholder="Doctor’s Phone Number" />
                                    </div>
                                </div>
                                <div className='col-lg-4 adhar-field'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="insurance" placeholder="Insurance Information (if applicable)" />
                                    </div>
                                </div>
                            </div>
                            {/* More inputs for Step 4 */}
                        </div>

                    </form>
                    <div className="d-flex justify-content-end gap-3 next-previous-button">
                        <button type="button" className="btn btn-secondary" onClick={handlePrevStep} disabled={currentStep === 1}><span className='img-right-arrow img-right-arrows'>
                                <img src={leftarrows} alt='' />
                            </span> Previous</button>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={handleNextStep} 
                            disabled={currentStep === 4 && false} // Ensuring button is clickable even on Step 4
                        >
                            {currentStep === 4 ? 'Register' : `Step ${currentStep + 1}`}
                            <span className='img-right-arrow'>
                                <img src={rightarrows} alt='' />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stepform;
