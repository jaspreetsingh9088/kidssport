import React, { useState } from 'react';
import login from '../assets/images/login.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setError('');
    setLoading(true);
  
    try {
      const response = await axios.post('https://mitdevelop.com/kidsadmin/api/login', {
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200 && response.data.token) {
        // Handle success (e.g., store token, navigate to another page)
        console.log('Login successful', response.data);
        localStorage.setItem('token', response.data.token); // Save token
        localStorage.setItem('userId', response.data.user.id); // Save user id


        const userid = response.data.user.id;

      // Navigate to the MyAccount page with the actual user ID
      navigate(`/Myaccount/${userid}`);

      } else {
        // Handle unexpected API response
        setError(response.data.message || 'Unexpected error occurred. Please try again.');
      }
    } catch (error) {
      // Handle error (e.g., invalid credentials, server errors)
      if (error.response && error.response.status === 401) {
        setError('Invalid email or password.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
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
              <form onSubmit={handleLogin}>
                <h2>Members Login</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3 mt-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
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
                    id="pwd"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary-login" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="register-now-btn">
                  If you're a New User, Please Register first! 
                  <span className="Register-span"> 
                    <Link to="/stepform"> Register Now</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
