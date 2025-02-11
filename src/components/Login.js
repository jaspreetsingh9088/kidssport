import React, { useState } from 'react';
import login from '../assets/images/login.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('email'); // Default to email login
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const navigate = useNavigate();

  // Step 1: Check if Mobile Number is Registered
  const checkMobileAndSendOtp = async () => {
    setError('');
    setLoading(true);
  
    try {
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/send-otp', {
        phone_number: mobile,
      });
  
      if (response.status === 200) {
        // Mobile is registered, show OTP field
        setOtpSent(true);
        setError(''); // Clear any previous errors
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
  
      // Handling API errors properly
      if (error.response) {
        if (error.response.status === 404) {
          setError('This phone number is not registered.');
        } else {
          setError(error.response.data.message || 'Something went wrong. Please try again.');
        }
      } else {
        setError('Network error. Please check your internet connection.');
      }
    } finally {
      setLoading(false);
    }
  };
  
  // Step 3: Verify OTP
  const verifyOtp = async () => {
    setError('');
    setLoading(true);

    try {
      const credential = window.verificationId.confirm(otp);
      await credential;

      // Call backend to verify OTP and login
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/verify-otp', {
        phone_number: mobile,
        otp,
      });

      if (response.status === 200) {
        setOtpVerified(true);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        navigate(`/Myaccount/${response.data.user.id}`);
      } else {
        setError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 4: Handle Email Login
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        navigate(`/Myaccount/${response.data.user.id}`);
      } else {
        setError('Invalid email or password.');
      }
    } catch (error) {
      setError('Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="Login-page">
      <div className="container">
        <div className="box-login">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src={login} alt="" className="login-images" />
            </div>
            <div className="col-lg-6">
              <form onSubmit={activeTab === 'email' ? handleEmailLogin : verifyOtp}>
                <h2>Members Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="mb-3">
                  <button
                    type="button"
                    className={`btn ${activeTab === 'email' ? 'btn-primary' : 'btn-outline-primary'} me-2`}
                    onClick={() => {
                      setActiveTab('email');
                      setOtpSent(false);
                      setOtpVerified(false);
                    }}
                  >
                    Email Login
                  </button>
                  <button
                    type="button"
                    className={`btn ${activeTab === 'mobile' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => {
                      setActiveTab('mobile');
                      setOtpSent(false);
                      setOtpVerified(false);
                    }}
                  >
                    Mobile Login
                  </button>
                </div>

                {activeTab === 'email' && (
                  <>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary-login">
                      Login
                    </button>
                  </>
                )}

                {activeTab === 'mobile' && (
                  <>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                      />
                    </div>
                    {!otpSent && (
                      <button type="button" className="btn btn-primary" onClick={checkMobileAndSendOtp}>
                        Send OTP
                      </button>
                    )}
                    {otpSent && !otpVerified && (
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                        />
                        <button type="button" className="btn btn-success mt-2" onClick={verifyOtp}>
                          Verify OTP
                        </button>
                      </div>
                    )}
                    {otpVerified && (
                      <button type="submit" className="btn btn-primary-login">
                        Login
                      </button>
                    )}
                  </>
                )}

                <p className="register-now-btn">
                  If you're a New User, Please Register first!
                  <span className="Register-span">
                    <Link to="/stepform"> Register Now</Link>
                  </span>
                </p>
              </form>
              <div id="recaptcha-container"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
