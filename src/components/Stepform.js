import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import rightarrows from '../assets/images/rightarrows.png';
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
                            <ul className='breadcrumb justify-content-center text-white'>
                                <a href='/' className='nav-link'><li>Home | </li></a>
                                <li>Registration</li>
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
                                        <input type="text" className="form-control" id="date" placeholder="MM/DD/YYYY" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="Gender" placeholder="Gender" />
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
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label">Need to see if we verify it with phone numer</label>
                                        <input type="text" className="form-control" id="Adharcard" placeholder="Addhar Card Number" />
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label">Adhar Card Front</label>
                                    <input type="file" className="form-controls" id="file-input" name="file-input"/>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label">Adhar Card Back</label>
                                    <input type="file" className="form-controls" id="file-input" name="file-input"/>
                                    </div>
                                </div>
                            </div>



                            {/* Other inputs... */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                            {/* Step 2 */}
                            <div className="mb-4">
                                <input type="text" className="form-control" id="parentName" placeholder="Parent/Guardian Name" />
                            </div>
                            {/* More inputs for Step 2 */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                            {/* Step 3 */}
                            <div className="mb-4">
                                <input type="text" className="form-control" id="emergencyContact" placeholder="Emergency Contact" />
                            </div>
                            {/* More inputs for Step 3 */}
                        </div>

                        <div className="form-step" style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                            {/* Step 4 */}
                            <div className="mb-4">
                                <input type="text" className="form-control" id="medicalCondition" placeholder="Medical Condition" />
                            </div>
                            {/* More inputs for Step 4 */}
                        </div>

                    </form>
                    <div className="d-flex justify-content-end gap-3 next-previous-button">
                        <button type="button" className="btn btn-secondary" onClick={handlePrevStep} disabled={currentStep === 1}>Previous</button>
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
